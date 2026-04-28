import { ComponentPropsWithRef, ReactNode } from 'react';

export type ContainerElement =
  | 'div'
  | 'section'
  | 'main'
  | 'article'
  | 'header'
  | 'footer'
  | 'aside';

export interface ContainerBaseProps {
  /** The content to be rendered inside the container */
  children: ReactNode;
  /** The HTML tag to render for semantic SEO purposes */
  as?: ContainerElement;
  /** Custom CSS classes for styling overrides */
  className?: string;
}

/**
 * Combine our custom props with the native attributes of 'div'.
 * We use 'div' as the baseline for standard HTML attributes.
 */
export type ContainerProps = ContainerBaseProps &
  Omit<ComponentPropsWithRef<'div'>, keyof ContainerBaseProps | 'as'>;
