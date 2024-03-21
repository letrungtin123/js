import clsxm from '@/utils/clsxm'

interface FormGroupProps {
  children: React.ReactNode
  className?: string
}
export const GormGroup = ({ children, className }: FormGroupProps) => {
  return <div className={clsxm(`flex flex-col gap-2`, className)}>{children}</div>
}
