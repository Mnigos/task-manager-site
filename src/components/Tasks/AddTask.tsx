import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'

import { FormWrapper } from './AddTask.styles'

import { Button } from 'components/items/Button'
import { Input } from 'components/items/Input'
import { Label } from 'components/items/Label'
import { TasksContext } from 'providers/TasksProvider'

const initialFormState = { name: '' }

export default function TaskItem() {
  const [formValues, setFormValues] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState('')
  const { addTask } = useContext(TasksContext)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmitTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formValues.name) return setErrorMessage('Cannot add empty task')

    addTask(formValues)
    setFormValues(initialFormState)
  }

  return (
    <FormWrapper onSubmit={handleSubmitTask}>
      <Label as="label" size="l" htmlFor="add-task">
        Add Task
      </Label>
      <div>
        <Input
          type="text"
          id="add-task"
          placeholder="Task Name"
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
        />
        <Button type="submit">Add</Button>
      </div>
      <Label color="error">{errorMessage}</Label>
    </FormWrapper>
  )
}
