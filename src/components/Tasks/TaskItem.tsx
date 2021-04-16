import { PropsWithChildren } from 'react'

export default function TaskItem({
  value,
}: PropsWithChildren<Partial<TaskItemProps>>) {
  return (
    <>
      <p>{value}</p>
    </>
  )
}

interface TaskItemProps {
  value: string
}
