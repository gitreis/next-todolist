import React from 'react'
import Task from './Task'
import { myTasks } from '@/app/page'

interface Props {
  tasks: myTasks[]
}

const Tasks = ({ tasks }: Props) => {
  const quantity = tasks.length
  return (
    <section className="mt-5 flex-1 max-w-[40rem] text-gray-100">
      <header className="flex mt-20 justify-between align-middle">
        <div className="flex gap-2 items-center">
          <p className="text-my-blue font-bold">Tarefas criadas</p>
          <span className="bg-gray-600 text-gray-200 font-bold rounded-full px-3 py-1">
            {quantity}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-my-purpleDark font-bold">Concluídas</p>
          <span className="bg-gray-600 text-gray-200 font-bold rounded-full px-3 py-1">
            de {quantity}
          </span>
        </div>
      </header>
      <div className="flex flex-col">
        {tasks.map((task) => (
          <Task key={task.id} tasks={task} />
        ))}
      </div>
    </section>
  )
}

export default Tasks