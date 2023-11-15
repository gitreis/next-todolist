'use client'
import Header from '@/components/Header'
import Tasks from '@/components/Tasks'
import { useState } from 'react'

export interface myTasks {
  // Tipagem da tarefa.
  id: number
  title: string
  isComplete: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<myTasks[]>([]) // O useState é um hook que dentro do react é utilizado para adicionar um estado ao componente funcional.

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000), // Utilizada funções básicas do javascript para criar o ID da tarefa como também é utilizada uma função como parâmetro para outra função.
        title: taskTitle,
        isComplete: false,
      },
    ])
  }

  function deletTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  function setCompleteTask(taskId: number) {
    const newTasks2 = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete, // Marca a tarefa como completa ou desmarca para incompleta.
        }
      }
      return task // Retorna a tarefa inalterada se não corresponder ao taskId
    })

    setTasks(newTasks2) // Atualiza o estado com o novo array de tarefas
  }

  return (
    <main className="flex min-w-full flex-col items-center justify-between">
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deletTask} onComplete={setCompleteTask} />
    </main>
  )
}
