'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CompoundProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * SectionHeader: A semantic 12-column grid header.
 * Layout: 5/12 columns for Title/Left, 7/12 for Description/Right.
 */
const SectionHeader = ({ children, className }: CompoundProps) => {
  return (
    <header
      className={cn('mb-12 grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-6', className)}
    >
      {children}
    </header>
  );
};

// Left Column (Title/Sub-navigation)
SectionHeader.Left = ({ children, className }: CompoundProps) => (
  <div className={cn('lg:col-span-5', className)}>{children}</div>
);

// Right Column (Main Description/Actions)
SectionHeader.Right = ({ children, className }: CompoundProps) => (
  <div className={cn('lg:col-span-7', className)}>{children}</div>
);

// Semantic Title with the indicator dot
SectionHeader.Title = ({ children, className }: CompoundProps) => (
  <h2
    className={cn(
      'text-foreground flex items-center gap-4 text-xl font-normal',
      "before:bg-foreground before:block before:aspect-square before:w-2 before:rounded-full before:content-['']",
      className,
    )}
  >
    {children}
  </h2>
);

// High-impact Description using clamp for fluid typography
SectionHeader.Description = ({ children, className }: CompoundProps) => (
  <p
    className={cn(
      'text-foreground font-semibold tracking-[-0.05em]',
      'text-[clamp(1.5rem,4vw,2rem)] leading-tight',
      className,
    )}
  >
    {children}
  </p>
);

// Muted helper for secondary text
SectionHeader.Muted = ({ children, className }: CompoundProps) => (
  <span className={cn('text-muted-foreground transition-opacity', className)}>{children}</span>
);

export { SectionHeader };
