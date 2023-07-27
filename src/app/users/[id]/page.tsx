import type { NextPage } from "next";
import Link from "next/link";

//* INTERFACES *//
import { IData } from "@/interfaces/user.interfaces";

interface Props {
  params: { id: string };
}

const getUser = async (id: string) => {
  const body = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await body.json();

  return data as IData;
};

const UserPage: NextPage<Props> = async ({ params }) => {
  const user = await getUser(params.id);

  return (
    <main className="my-10 mx-auto w-4/5">
      <Link
        href="/users"
        className="font-bold p-2 hover:bg-slate-300 duration-200 rounded-md"
      >
        <span>⬅️ Volver</span>
      </Link>
      <article className="mt-10">
        <img src={user.avatar} alt={user.email} className="w-40 rounded-full" />
        <div>
          <h1 className="font-bold text-3xl mt-5">
            {user.first_name} {user.last_name}
          </h1>
          <h2 className="font-medium mt-1 text-xl underline">{user.email}</h2>
        </div>
      </article>
    </main>
  );
};

export default UserPage;
