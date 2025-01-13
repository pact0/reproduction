import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { cn } from "@/lib/utils";

interface Props {
  initialValue: string;
  hoverValue?: string;
  w?: number;
  className?: string;
}

const LongInputHover = ({
  initialValue,
  w = 150,
  className,
  hoverValue = initialValue,
}: Props) => {
  return (
    <div
      className={cn("flex items-center justify-center text-center", className)}
    >
      <HoverCard>
        <HoverCardTrigger
          className={`max-w-[${w}px] overflow-hidden text-ellipsis whitespace-nowrap bg-transparent text-center`}
        >
          {initialValue}
        </HoverCardTrigger>
        <HoverCardContent className="w-fit text-center">
          {hoverValue}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

LongInputHover.displayName = "LongInputHover";

export { LongInputHover };
