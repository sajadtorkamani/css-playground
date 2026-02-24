import React from 'react'
import { cn } from '@/lib/utils'

export function PageContainer({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('p-4', className)} {...props} />
}
