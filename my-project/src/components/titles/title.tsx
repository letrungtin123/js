import clsxm from '@/utils/clsxm'

interface ITitleProps {
  title: string
  className?: string
}
export const Title1 = ({ title, className }: ITitleProps) => {
  return <h1 className={clsxm(`font-medium text-[20px]`, className)}>{title}</h1>
}
