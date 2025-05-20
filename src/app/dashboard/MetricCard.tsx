import type { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon?: ReactNode;
  status?: 'healthy' | 'warning' | 'critical' | 'neutral';
  trend?: 'up' | 'down' | 'stable';
  description?: string;
}

export default function MetricCard({ title, value, unit, icon, status = 'neutral', trend, description }: MetricCardProps) {
  const statusColors = {
    healthy: 'border-l-accent', // Green
    warning: 'border-l-yellow-500', // Yellow
    critical: 'border-l-destructive', // Red
    neutral: 'border-l-primary', // Blue
  };

  const TrendIcon = trend === 'up' ? ArrowUpRight : trend === 'down' ? ArrowDownRight : Minus;
  const trendColor = trend === 'up' ? 'text-accent' : trend === 'down' ? 'text-destructive' : 'text-muted-foreground';

  return (
    <Card className={cn("shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4", statusColors[status])}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">
          {value}{unit && <span className="text-xl font-normal text-muted-foreground ml-1">{unit}</span>}
        </div>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        {trend && (
          <div className={cn("text-xs flex items-center mt-1", trendColor)}>
            <TrendIcon className="h-4 w-4 mr-1" />
            {trend.charAt(0).toUpperCase() + trend.slice(1)}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
