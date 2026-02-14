import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-poppins transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 outline-none [&_svg]:pointer-events-none md:text-base ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90  leading-normal",
        ghost:
          "text-primary text-base [&_svg_path]:fill-primary leading-6 font-medium",
        outline:
          "text-black/40 font-medium bg-white border border-black/8 leading-6 hover:text-primary",
        none: "text-none bg-transparent",
      },
      size: {
        default: "px-4 py-3 md:px-6 md:py-4 has-[>svg]:px-3",
        xs: "p-2",
        sm: "h-8 rounded gap-1.5 px-4 py-2 has-[>svg]:px-2.5 md:py-[20px]",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        none: "p-0",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
