import React from "react";
import Link from "next/link";

const Header : React.FC = () => {
  return (
    <nav className='absolute left-0 right-0 top-5'>
      <ul className='flex px-2 justify-center space-x-4 text-lg font-bold text-white'>
        <li className='hover:scale-105 easy-out duration-100'><Link href='/'>Задание 1</Link></li>
        <li>-</li>
        <li className='hover:scale-105 easy-out duration-100'><Link href='/task2'>Задание 2</Link></li>
      </ul>
    </nav>
  );
};

export default Header;