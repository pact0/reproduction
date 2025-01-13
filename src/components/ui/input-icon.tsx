import type { LucideIcon } from "lucide-react";
import { forwardRef, useState } from "react";

import { Input } from "./input";
import { cn } from "@/lib/utils";
import { LongInputHover } from "./long-input-hover";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;

  iconOnlyOnHover?: boolean;

  startImage?: React.ReactNode;
  endImage?: React.ReactNode;

  onEndIconClick?: () => void;
  onStartIconClick?: () => void;

  wrapperClassName?: string;

  w?: number;
  h?: number;
}

const InputIcon = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onEndIconClick,
      onStartIconClick,
      wrapperClassName,
      className,
      iconOnlyOnHover = false,
      type,
      startIcon,
      endIcon,
      startImage,
      endImage,
      w = 18,
      h = 18,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const StartIcon = startIcon;
    const EndIcon = endIcon;

    // Helper for hover effect
    const iconHoverClasses =
      "transform scale-110 transition-transform duration-200";
    const iconBaseClasses = "text-muted-foreground peer-focus:text-gray-900";
    const iconClasses = iconOnlyOnHover
      ? `${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-200`
      : "opacity-100";

    return (
      <div
        className={cn("relative w-full", wrapperClassName)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {StartIcon && (
          <div
            onClick={onStartIconClick}
            className={cn(
              "absolute left-1.5 top-1/2 -translate-y-1/2 transform",
              iconClasses,
            )}
          >
            <StartIcon
              width={w}
              height={h}
              className={cn(iconBaseClasses, isHovered && iconHoverClasses)}
            />
          </div>
        )}

        {startImage && (
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 transform">
            {startImage}
          </div>
        )}

        <Input
          type={type}
          className={cn(
            startIcon || startImage ? "pl-8" : "",
            endIcon || endImage ? "pr-8" : "",
            className,
          )}
          ref={ref}
          {...props}
        />

        {EndIcon && (
          <div
            onClick={onEndIconClick}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 transform",
              iconClasses,
            )}
          >
            <EndIcon
              className={cn(iconBaseClasses, isHovered && iconHoverClasses)}
              width={w}
              height={h}
            />
          </div>
        )}
      </div>
    );
  },
);

InputIcon.displayName = "InputIcon";

export { InputIcon };
