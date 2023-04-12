import { type NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Select from "react-select";
import Header from "~/components/Header";

interface Data {
  value: string | null;
  label: string | null;
}

const selectorData : Data[] = [
  {value: "machine", label: "Машина"},
  {value: "toothpick", label: "Зубочистка"},
  {value: "microphone", label: "Микрофон"},
  {value: "telephone", label: "Телефон"},
]
const Task2 : NextPage = () => {
  const [selectedItem,setSelectedItem] = useState<Data | null>(null)
  function onChangeHandler(e: Data | null) {
    setSelectedItem(e)
  }

   return (
    <>
      <Head>
        <title>Task2</title>
        <meta name="description" content="task2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-10 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Тестовое задание 2 <span className="text-[hsl(280,100%,70%)]">SPBUME</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <label className='text-white'>{selectedItem?.label ? (
              `Вы выбрали : ${selectedItem.label}`
            ) : (
              'Вы ничего не выбрали.'
              )}</label>
            <Select options={selectorData} className='w-64' placeholder='Выбрать товар' onChange={(e)=>onChangeHandler(e)}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Task2