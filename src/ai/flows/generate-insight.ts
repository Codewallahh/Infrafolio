// src/ai/flows/generate-insight.ts
'use server';
/**
 * @fileOverview An AI agent that generates insights on infrastructure performance and potential anomalies.
 *
 * - generateInsight - A function that generates insights.
 * - GenerateInsightInput - The input type for the generateInsight function.
 * - GenerateInsightOutput - The return type for the generateInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInsightInputSchema = z.object({
  metricsData: z
    .string()
    .describe(
      'A string containing infrastructure metrics data, including CPU usage, memory usage, network traffic, etc.'
    ),
});
export type GenerateInsightInput = z.infer<typeof GenerateInsightInputSchema>;

const GenerateInsightOutputSchema = z.object({
  insight: z.string().describe('The AI-powered insight on infrastructure performance and potential anomalies.'),
});
export type GenerateInsightOutput = z.infer<typeof GenerateInsightOutputSchema>;

export async function generateInsight(input: GenerateInsightInput): Promise<GenerateInsightOutput> {
  return generateInsightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInsightPrompt',
  input: {schema: GenerateInsightInputSchema},
  output: {schema: GenerateInsightOutputSchema},
  prompt: `You are a DevOps engineer expert providing insights on infrastructure performance and potential anomalies based on the provided metrics data.

  Analyze the following metrics data and provide a concise insight, proactively addressing potential issues and optimizing resource allocation.

  Metrics Data: {{{metricsData}}}`,
});

const generateInsightFlow = ai.defineFlow(
  {
    name: 'generateInsightFlow',
    inputSchema: GenerateInsightInputSchema,
    outputSchema: GenerateInsightOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
