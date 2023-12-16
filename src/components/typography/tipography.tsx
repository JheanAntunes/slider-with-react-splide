export const TypographyH1 = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'h1'>) => (
  <h1 className={className} {...restProps}>
    {children}
  </h1>
)

export const TypographyH2 = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'h2'>) => (
  <h2 className={className} {...restProps}>
    {children}
  </h2>
)
