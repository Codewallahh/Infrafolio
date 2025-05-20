import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description, className, ...props }: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1 className={cn("text-3xl font-bold tracking-tight text-foreground sm:text-4xl", className)} {...props}>
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
