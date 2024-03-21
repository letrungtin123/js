import clsxm from '@/utils/clsxm'

interface IStatusProps {
  status: string
  className?: string
}
export const Status = ({ status, className }: IStatusProps) => {
  return <div className={clsxm(className)}>{status}</div>
}
