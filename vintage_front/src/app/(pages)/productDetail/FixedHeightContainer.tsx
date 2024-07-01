import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const FixedHeightContainer: React.FC<Props> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 right-0 left-0 min-h-full h-full w-full overflow-hidden",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default FixedHeightContainer;
