"use client";

import * as React from "react";
import {
  buttonStyles,
  type ButtonSize,
  type ButtonVariant,
} from "./button-variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/** Interactive button. Use `buttonStyles()` on a `<Link>` for navigation. */
export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonStyles(variant, size, className)} {...props} />
  );
}
