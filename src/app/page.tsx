import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="mx-auto my-10 w-4/5">
      <ul>
        <li>
          <Link
            href="/users"
            className="hover:bg-slate-300 p-2 font-bold pl-4 items-center w-auto rounded-md group text-black duration-300 hover:pr-4 pr-0"
          >
            <span>Lista de usuarios</span>
            <span className="transform-gpu transition-transform -translate-x-3 group-hover:inline-block group-hover:translate-x-1 opacity-0 group-hover:opacity-100 duration-300 -z-10">
              ➡️
            </span>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
