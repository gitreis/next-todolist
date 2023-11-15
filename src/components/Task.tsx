import React from 'react'
import { ChevronDownCircle, Trash2 } from 'lucide-react'
import { myTasks } from '@/app/page'

interface Props {
  tasks: myTasks
  onDelete: (taskId: number) => void
  onComplete: (taskId: number) => void
}

const Task = ({ tasks, onDelete, onComplete }: Props) => {
  return (
    <div className="flex bg-my-input rounded-md border-[1px] border-gray-600 p-4 mt-6 justify-between gap-2 items-center">
      <button
        className="bg-gray-600 bg-transparent border-my-blue border-2 rounded-full w-5 h-5"
        onClick={() => onComplete(tasks.id)}
      >
        {tasks.isComplete ? (
          <ChevronDownCircle className="fill-my-purpleDark rounded-full w-5 h-5" />
        ) : (
          <div />
        )}
      </button>
      <p className="mr-4 text-left">{tasks.title}</p>
      <button
        className="bg-transparent p-2 rounded-md"
        onClick={() => onDelete(tasks.id)}
      >
        <Trash2 size={20} />
      </button>
    </div>
  )
}

export default Task
