import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";
import { useRouter } from "next/router";
import Header from "~/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="SPBUME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Тестовое задание <span className="text-[hsl(280,100%,70%)]">SPBUME</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">

          </div>
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  console.log(sessionData);


  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {sessionData?.user?.image && (
        <Image
          src={sessionData.user.image}
          alt={sessionData.user.name ?? ''}
          width={128}
          height={128}
          className='rounded-full'
        />
      )
      }
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Вы вошли как {sessionData.user?.name}</span>}
        {sessionData && (
          <div className='text-sm'>
            <h2>Данные:</h2>
            <ul>
              {sessionData.user?.email && (
                <li>Email: <span className='text-green-200'>{sessionData.user.email}</span></li>
              )}
              {sessionData.user?.id && (
                <li>Id: <span className='text-green-200'>{sessionData.user.id}</span></li>
              )}
              {sessionData.user?.image && (
                <li>Image URL: <div onClick={()=> {void router.push(sessionData?.user?.image ?? '')}} className='text-green-200 cursor-pointer truncate max-w-sm'>{sessionData.user.image}</div></li>
              )}
            </ul>
          </div>
        )}
      </p>
      <button
        className="rounded-md bg-white/10 px-20 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Выйти" : "Войти"}
      </button>
    </div>
  );
};
