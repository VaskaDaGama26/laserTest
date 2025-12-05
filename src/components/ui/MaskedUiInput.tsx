// MaskedUiInput.tsx
import React from "react";
import { MaskedInput } from "react-hook-mask";
import { cn } from "./utils";

interface MaskedUiInputProps
  extends Omit<React.ComponentProps<typeof MaskedInput>, "value" | "onChange"> {
  value: string;
  onChange: (v: string) => void;
  keepMask?: boolean; // ← делаем необязательным
}

export function MaskedUiInput({
  className,
  maskGenerator,
  keepMask,
  value,
  onChange,
  ...props
}: MaskedUiInputProps) {
  return (
    <MaskedInput
      {...props}
      maskGenerator={maskGenerator}
      keepMask={keepMask}
      value={value}
      onChange={onChange}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
    />
  );
}
