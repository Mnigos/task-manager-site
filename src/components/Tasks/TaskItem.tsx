import React from 'react'

import { Item } from './TaskItem.styles'
interface TaskItemProps {
  value: string
}

export default function TaskItem({ value }: TaskItemProps) {
  return (
    <>
      <Item>{value}</Item>
    </>
  )
}
