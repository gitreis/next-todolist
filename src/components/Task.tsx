import React from 'react'
import { Trash2 } from 'lucide-react'
import { myTasks } from '@/app/page'

interface Props {
  tasks: myTasks
}

const Task = ({ tasks }: Props) => {
  return (
    <div className="flex bg-my-input rounded-md border-[1px] border-gray-600 p-4 mt-6 justify-between gap-2 items-center">
      <button className="bg-gray-600 p-2 bg-transparent border-my-blue border-2 rounded-full mr-2">
        <div></div>
      </button>
      <p className="mr-4">{tasks.title}</p>
      <button className="bg-transparent p-2 rounded-md">
        <Trash2 size={20} />
      </button>
    </div>
  )
}

export default Task
