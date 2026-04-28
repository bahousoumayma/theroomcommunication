'use client';

import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import styles from './button.module.css';

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.variantDefault,
      outline: styles.variantOutline,
      secondary: styles.variantSecondary,
      ghost: styles.variantGhost,
      destructive: styles.variantDestructive,
      link: styles.variantLink,
    },
    size: {
      default: styles.sizeDefault,
      xs: styles.sizeXs,
      sm: styles.sizeSm,
      lg: styles.sizeLg,
      icon: styles.sizeIcon,
      'icon-xs': styles.sizeIconXs,
      'icon-sm': styles.sizeIconSm,
      'icon-lg': styles.sizeIconLg,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive className={clsx(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
