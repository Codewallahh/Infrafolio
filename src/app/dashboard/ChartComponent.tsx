"use client"

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { ChartConfig } from '@/components/ui/chart'; // Assuming ChartConfig is used from shadcn

interface ChartComponentProps {
  title: string;
  description?: string;
  data: any[];
  config: ChartConfig; // Use shadcn's ChartConfig or a simplified version
  dataKey: string; // The key in data objects to plot
  chartType?: 'line' | 'bar';
}

// A simplified ChartConfig if not using full shadcn setup for this specific component
interface SimpleChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

export default function ChartComponent({ title, description, data, config, dataKey, chartType = 'line' }: ChartComponentProps) {
  const chartColor = config[dataKey]?.color || 'hsl(var(--primary))';

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full"> {/* Increased height */}
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}> {/* Adjusted margins for YAxis labels */}
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  itemStyle={{ color: chartColor }}
                />
                <Line type="monotone" dataKey={dataKey} stroke={chartColor} strokeWidth={2} dot={{ r: 4, fill: chartColor }} activeDot={{ r: 6 }} name={config[dataKey]?.label || dataKey} />
              </LineChart>
            ) : (
              <BarChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  itemStyle={{ color: chartColor }}
                />
                <Bar dataKey={dataKey} fill={chartColor} name={config[dataKey]?.label || dataKey} radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
