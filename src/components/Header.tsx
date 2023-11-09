import React, { useState } from 'react'
import Image from 'next/image'
import rocket from '../../public/Logo.svg'
import { PlusCircle } from 'lucide-react'

const Header = () => {
  return (
    <>
      <header className="bg-header-bg h-52 min-w-full flex flex-col justify-center relative items-center">
        <Image
          src={rocket}
          alt="rocket logo"
          className="self-center items-center"
        />
        <form className="flex justify-center gap-2 absolute bottom-[calc(-3.5rem/2)] font-normal min-w-[40rem]">
          <input
            type="text"
            name="addtask"
            id="addtask"
            placeholder="Adicione uma nova tarefa"
            className="flex-1 rounded-md bg-my-input border-x-zinc-700 p-2 text-gray-400 hover:selection:bg-slate-400"
          />
          <button className="text-slate-100 bg-my-blueDark rounded-md p-2 flex gap-2 items-center">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
    </>
  )
}

export default Header
