import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className={cn("text-2xl font-semibold tracking-tight text-foreground", className)} {...props}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-md text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
