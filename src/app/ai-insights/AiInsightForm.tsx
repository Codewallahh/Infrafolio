"use client";

import { useState, type FormEvent } from 'react';
import { generateInsight, type GenerateInsightInput, type GenerateInsightOutput } from '@/ai/flows/generate-insight';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';

export default function AiInsightForm() {
  const [metricsData, setMetricsData] = useState<string>('');
  const [insightResult, setInsightResult] = useState<GenerateInsightOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setInsightResult(null);

    const input: GenerateInsightInput = { metricsData };

    try {
      const result = await generateInsight(input);
      setInsightResult(result);
    } catch (e: any) {
      console.error("Error generating insight:", e);
      setError(e.message || "Failed to generate insight. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-primary" />
            Generate New Insight
          </CardTitle>
          <CardDescription>
            Paste your raw infrastructure metrics data (e.g., CPU, memory, network stats over time, log snippets) below. 
            The AI will analyze it and provide potential insights or anomaly detections.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="metricsData" className="text-lg font-medium">Metrics Data</Label>
              <Textarea
                id="metricsData"
                value={metricsData}
                onChange={(e) => setMetricsData(e.target.value)}
                placeholder="Example: CPU: 65%, Memory: 70GB/128GB, Disk I/O: 500 IOPS, Network Out: 200Mbps..."
                rows={10}
                className="mt-2 bg-card-foreground/5 focus:bg-card-foreground/10"
                required
                disabled={isLoading}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Provide a text blob of metrics. The more context, the better the insight.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="bg-accent text-accent-foreground hover:bg-accent/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Get Insight
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive-foreground">{error}</p>
          </CardContent>
        </Card>
      )}

      {insightResult && (
        <Card className="shadow-md border-primary">
          <CardHeader>
            <SectionTitle title="AI Generated Insight" className="!mb-0" />
             <CardDescription>The AI has analyzed the provided data and generated the following insight:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm prose-invert max-w-none p-4 bg-card-foreground/5 rounded-md">
              <p>{insightResult.insight}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!isLoading && !insightResult && !error && (
         <Card className="border-dashed">
          <CardContent className="p-10 text-center text-muted-foreground">
            <Wand2 className="mx-auto h-12 w-12 mb-4 opacity-50" />
            <p>Your generated insights will appear here once you submit metrics data.</p>
            <p className="text-xs mt-2">Try pasting some sample server logs or performance numbers.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
