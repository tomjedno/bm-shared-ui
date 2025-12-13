import React from "react";

const variantClass = {
  primary: "btn btn-primary",
  ghost: "btn btn-ghost",
  danger: "btn btn-danger",
  success: "btn btn-success",
  subtle: "btn btn-subtle",
  tonal: "btn btn-tonal",
  outline: "btn btn-outline",
};

const sizeClass = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const { block, ...other } = rest; // umožníme <Button block />
  const classes = [
    variantClass[variant] || variantClass.primary,
    sizeClass[size] || sizeClass.md,
    block ? "btn-block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...other}>
      {children}
    </button>
  );
}

export default Button;
