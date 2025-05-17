import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../lib/utils';

type TooltipProps = {
  /**
   * The content to display in the tooltip
   */
  content: React.ReactNode;
  /**
   * The element that triggers the tooltip
   */
  children: React.ReactNode;
  /**
   * The variant of the tooltip
   * @default "default"
   */
  variant?: 'default' | 'info' | 'warning' | 'error' | 'success';
  /**
   * The side of the tooltip
   * @default "top"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The alignment of the tooltip
   * @default "center"
   */
  align?: 'start' | 'center' | 'end';
  /**
   * The delay before showing the tooltip (in ms)
   * @default 200
   */
  delayDuration?: number;
  /**
   * Whether to show an arrow pointing to the trigger
   * @default true
   */
  showArrow?: boolean;
  /**
   * The size of the arrow
   * @default 10
   */
  arrowSize?: number;
  /**
   * Additional classes to apply to the tooltip
   */
  className?: string;
};

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    variant?: 'default' | 'info' | 'warning' | 'error' | 'success';
    showArrow?: boolean;
    arrowSize?: number;
  }
>(({ className, variant = 'default', showArrow = true, arrowSize = 10, ...props }, ref) => {
  // Determine variant styling
  const variantStyles = {
    default: 'bg-blackblack-100 text-white',
    info: 'bg-blue-600 text-white',
    warning: 'bg-actionwarning text-white',
    error: 'bg-actionalert text-white',
    success: 'bg-actionsuccess text-white',
  };

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={5}
      className={cn(
        'z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm',
        variantStyles[variant],
        'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'shadow-light-theme-shadow-medium',
        className
      )}
      {...props}
    >
      {showArrow && (
        <TooltipPrimitive.Arrow
          width={arrowSize * 2}
          height={arrowSize}
          className={cn(
            variant === 'default' && 'fill-blackblack-100',
            variant === 'info' && 'fill-blue-600',
            variant === 'warning' && 'fill-actionwarning',
            variant === 'error' && 'fill-actionalert',
            variant === 'success' && 'fill-actionsuccess'
          )}
        />
      )}
      {props.children}
    </TooltipPrimitive.Content>
  );
});

TooltipContent.displayName = 'TooltipContent';

/**
 * A tooltip component that displays a popup when hovering over a trigger element.
 */
export function Tooltip({
  content,
  children,
  variant = 'default',
  side = 'top',
  align = 'center',
  delayDuration = 200,
  showArrow = true,
  arrowSize = 10,
  className,
}: TooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          variant={variant}
          showArrow={showArrow}
          arrowSize={arrowSize}
          className={className}
        >
          {content}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}

export { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent };
