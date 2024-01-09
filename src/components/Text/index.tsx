import React from "react";

const sizeClasses = {
  txtInterMedium14Blue800: "font-inter font-medium",
  txtInterMedium14Gray800: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular14Gray800: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterMedium32: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium15: "font-inter font-medium",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
