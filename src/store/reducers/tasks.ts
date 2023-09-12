import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Tarefa 1',
      enums.Priority.URGENT,
      enums.Status.PENDING,
      'Descrição 1',
      1
    ),
    new Task(
      'Tarefa 2',
      enums.Priority.IMPORTANT,
      enums.Status.DONE,
      'Descrição 2',
      2
    ),
    new Task(
      'Tarefa 3',
      enums.Priority.NORMAL,
      enums.Status.PENDING,
      'Descrição 3',
      3
    )
  ],
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { removeTask } = tasksSlice.actions

export default tasksSlice.reducer
