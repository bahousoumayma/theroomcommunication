import React, { forwardRef } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import styles from './container.module.css';
import { ContainerProps } from './container.types';

const containerVariants = cva(styles.container, {
  variants: {
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
      xl: styles.xl,
      full: styles.full,
    },
    fluid: {
      true: styles.fluid,
    },
  },
  defaultVariants: {
    size: 'full',
    fluid: false,
  },
});

interface Props extends ContainerProps, VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLElement, Props>(
  ({ children, className, size, fluid, as: Component = 'div', ...rest }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<any>}
        className={containerVariants({ size, fluid, className })}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Container.displayName = 'Container';
