import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      title: 'Tarefa 1',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING,
      description: 'Descrição 1',
      id: 1
    },
    {
      title: 'Tarefa 2',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.DONE,
      description: 'Descrição 2',
      id: 2
    },
    {
      title: 'Tarefa 3',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDING,
      description: 'Descrição 3',
      id: 3
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    }
  }
})

export const { removeTask, editTask } = tasksSlice.actions

export default tasksSlice.reducer
