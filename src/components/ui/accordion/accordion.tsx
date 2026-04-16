'use client';

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import styles from './accordion.module.css';

function Accordion(props: AccordionPrimitive.Root.Props) {
  return <AccordionPrimitive.Root data-slot="accordion" className={styles.root} {...props} />;
}

function AccordionItem(props: AccordionPrimitive.Item.Props) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={styles.item} {...props} />;
}

function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionPrimitive.Trigger.Props & { className?: string }) {
  return (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={clsx(styles.trigger, className)}
        {...props}
      >
        {children}

        <ChevronDownIcon data-slot="accordion-trigger-icon" className={styles.iconDown} />

        <ChevronUpIcon data-slot="accordion-trigger-icon" className={styles.iconUp} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  children,
  className,
  ...props
}: AccordionPrimitive.Panel.Props & { className?: string }) {
  return (
    <AccordionPrimitive.Panel data-slot="accordion-content" className={styles.panel} {...props}>
      <div className={clsx(styles.content, className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
