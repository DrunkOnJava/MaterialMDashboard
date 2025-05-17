import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../lib/utils';

/**
 * Mark interface for slider ticks/labels
 */
export interface Mark {
  value: number;
  label?: string;
}

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /**
   * Custom class name for the slider
   */
  className?: string;
  /**
   * Whether to show tooltips on thumbs
   * @default false
   */
  showTooltip?: boolean;
  /**
   * Format function for the tooltip content
   * @default value => value.toString()
   */
  formatTooltip?: (value: number) => string;
  /**
   * Marks to display below the slider
   * { value: number, label?: string }
   */
  marks?: Mark[];
  /**
   * Orientation of the slider
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Size of the slider
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Visual variant of the slider
   * @default "default"
   */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      showTooltip = false,
      formatTooltip = value => `${value}`,
      marks = [],
      orientation = 'horizontal',
      size = 'md',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [hoveredThumb, setHoveredThumb] = React.useState<number | null>(null);
    const [isDragging, setIsDragging] = React.useState(false);

    // Size variations
    const sizeStyles = {
      sm: 'h-1.5',
      md: 'h-2',
      lg: 'h-3',
    };

    const thumbSizeStyles = {
      sm: 'h-3.5 w-3.5',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    };
    
    // Calculate the aria values
    const ariaMin = props.min ?? 0;
    const ariaMax = props.max ?? 100;
    const ariaStep = props.step ?? 1;

    // Variant styles
    const trackStyles = {
      default: 'bg-surfaceslightgray-20',
      primary: 'bg-light-themeprimarylight-blue',
      success: 'bg-actionsuccess-light',
      warning: 'bg-actionwarning-light',
      error: 'bg-actionalert-light',
    };

    const rangeStyles = {
      default: 'bg-blackblack-80',
      primary: 'bg-light-themeprimaryblue',
      success: 'bg-actionsuccess',
      warning: 'bg-actionwarning',
      error: 'bg-actionalert',
    };

    const thumbStyles = {
      default: 'border-blackblack-80 bg-white hover:bg-white focus:ring-blackblack-60',
      primary:
        'border-light-themeprimaryblue bg-white hover:bg-white focus:ring-light-themeprimaryblue',
      success: 'border-actionsuccess bg-white hover:bg-white focus:ring-actionsuccess',
      warning: 'border-actionwarning bg-white hover:bg-white focus:ring-actionwarning',
      error: 'border-actionalert bg-white hover:bg-white focus:ring-actionalert',
    };

    // Orientation styles
    const orientationStyles = {
      horizontal: '',
      vertical: 'flex-col h-full',
    };

    // Event handlers for tooltip
    const handleThumbMouseEnter = (index: number) => {
      setHoveredThumb(index);
    };

    const handleThumbMouseLeave = () => {
      if (!isDragging) {
        setHoveredThumb(null);
      }
    };

    const handleThumbMouseDown = (index: number) => {
      setHoveredThumb(index);
      setIsDragging(true);
    };

    const handleThumbMouseUp = () => {
      setIsDragging(false);
      setHoveredThumb(null);
    };

    React.useEffect(() => {
      if (isDragging) {
        const handleMouseUp = () => {
          setIsDragging(false);
          setHoveredThumb(null);
        };

        document.addEventListener('mouseup', handleMouseUp);

        return () => {
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [isDragging]);

    return (
      <div className={cn('w-full', className)}>
        <SliderPrimitive.Root
          ref={ref}
          orientation={orientation}
          className={cn(
            'relative flex touch-none select-none items-center',
            orientationStyles[orientation],
            className
          )}
          onMouseUp={handleThumbMouseUp}
          aria-valuemin={ariaMin}
          aria-valuemax={ariaMax}
          aria-valuenow={props.value?.[0] ?? props.defaultValue?.[0] ?? ariaMin}
          aria-valuetext={formatTooltip(props.value?.[0] ?? props.defaultValue?.[0] ?? 0)}
          aria-orientation={orientation}
          {...props}
        >
          <SliderPrimitive.Track
            className={cn('relative grow rounded-full', sizeStyles[size], trackStyles[variant])}
          >
            <SliderPrimitive.Range
              className={cn('absolute rounded-full', sizeStyles[size], rangeStyles[variant])}
            />
          </SliderPrimitive.Track>

          {props.defaultValue?.map((_, i) => (
            <SliderPrimitive.Thumb
              key={i}
              className={cn(
                'block rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                thumbSizeStyles[size],
                thumbStyles[variant]
              )}
              onMouseEnter={() => handleThumbMouseEnter(i)}
              onMouseLeave={handleThumbMouseLeave}
              onMouseDown={() => handleThumbMouseDown(i)}
            >
              {showTooltip && hoveredThumb === i && (
                <div
                  className={cn(
                    'absolute bottom-full mb-2 -translate-x-1/2 rounded px-2 py-1 text-xs font-medium',
                    'bg-blackblack-80 text-white',
                    'shadow-light-theme-shadow-medium',
                    orientation === 'horizontal'
                      ? 'left-1/2'
                      : 'left-full ml-2 -translate-y-1/2 bottom-auto top-1/2'
                  )}
                >
                  {formatTooltip(props.value?.[i] ?? props.defaultValue?.[i] ?? 0)}
                </div>
              )}
            </SliderPrimitive.Thumb>
          ))}

          {/* Marks */}
          {marks.length > 0 && (
            <div className="absolute w-full flex items-center justify-between pointer-events-none mt-2">
              {marks.map((mark, i) => {
                // Calculate the position as a percentage
                const position =
                  ((mark.value - (props.min || 0)) / ((props.max || 100) - (props.min || 0))) * 100;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center"
                    style={{
                      position: 'absolute',
                      left: `${position}%`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div className="w-0.5 h-1 bg-blackblack-40" />
                    {mark.label && (
                      <span className="text-xs text-blackblack-60 mt-1">{mark.label}</span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </SliderPrimitive.Root>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export { Slider };
