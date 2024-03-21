import clsxm from '@/utils/clsxm'

interface ILabelProps {
  children: string
  htmlFor: string
  className: string
}

export const Label = ({ children, htmlFor, className }: ILabelProps) => {
  return (
    <Label htmlFor={htmlFor} className={clsxm('text-xl font-medium text-red', className)}>
      {children}
    </Label>
  )
}
