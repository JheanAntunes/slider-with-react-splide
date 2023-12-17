import { cn } from '../utils/cn'

export const TypographyH1 = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'h1'>) => (
  <h1 className={cn('text-2xl lg:text-4xl', className)} {...restProps}>
    {children}
  </h1>
)

export const TypographyH2 = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'h2'>) => (
  <h2 className={cn('text-xl lg:text-3xl', className)} {...restProps}>
    {children}
  </h2>
)
