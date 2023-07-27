import type { NextPage } from "next";

//* INTERFACES *//
import { IData } from "@/interfaces/user.interfaces";
import Link from "next/link";

const getUsers = async () => {
  const body = await fetch("https://reqres.in/api/users");
  const { data } = await body.json();

  return data as IData[];
};

const UsersPage: NextPage = async () => {
  const data = await getUsers();

  return (
    <main className="w-4/5 mx-auto my-10">
      <Link
        href="/"
        className="font-bold p-2 hover:bg-slate-300 duration-200 rounded-md"
      >
        <span>⬅️ Volver</span>
      </Link>
      <section className="flex flex-col gap-3 mt-5">
        {data.map((user) => (
          <article
            key={user.id}
            className="rounded-md bg-slate-300 p-2 hover:scale-[1.01] duration-200 hover:bg-slate-600 group"
          >
            <Link
              href={`/users/${user.id}`}
              className="flex items-center gap-2"
            >
              <img
                src={user.avatar}
                alt={user.email}
                className="w-[50px] rounded-full mr-3"
              />
              <h3 className="font-bold group-hover:text-white">
                {user.first_name} {user.last_name}
              </h3>
              <h4 className="font-medium underline group-hover:text-white">
                {user.email}
              </h4>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default UsersPage;
