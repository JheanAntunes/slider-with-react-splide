export const TypographyH1 = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'h1'>) => (
  <h1 className={className} {...restProps}>
    {children}
  </h1>
)
