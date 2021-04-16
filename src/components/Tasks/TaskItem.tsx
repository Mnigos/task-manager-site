import React from 'react'
interface TaskItemProps {
  value: string
}

export default function TaskItem({ value }: TaskItemProps) {
  return (
    <>
      <p>{value}</p>
    </>
  )
}
