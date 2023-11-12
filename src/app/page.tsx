'use client'
'use transpilePackages'
import Header from '@/components/Header'
import Tasks from '@/components/Tasks'
import { useState } from 'react'

export interface myTasks {
  id: string
  title: string
  isComplete: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<myTasks[]>([
    {
      id: '01',
      title: 'Comer pizza com os amigos.',
      isComplete: false,
    },
  ])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isComplete: false,
      },
    ])
  }
  return (
    <main className="flex min-w-full flex-col items-center justify-between">
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} />
    </main>
  )
}
