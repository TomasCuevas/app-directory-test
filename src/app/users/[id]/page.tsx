import type { Metadata, NextPage } from "next";
import Link from "next/link";

//* SERVICES *//
import { getUserService } from "@/services";

//* INTERFACES *//
interface Props {
  params: { id: string };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const user = await getUserService(params.id);

  return {
    title: `${user.first_name} ${user.last_name} | AppDirectory`,
  };
};

const UserPage: NextPage<Props> = async ({ params }) => {
  const user = await getUserService(params.id);

  return (
    <main className="my-10 mx-auto w-4/5">
      <Link
        href="/users"
        className="font-bold p-2 hover:bg-slate-300 duration-200 rounded-md"
      >
        <span>⬅️ Volver</span>
      </Link>
      <article className="mt-5">
        <Link href={user.avatar} target="_blank">
          <img
            src={user.avatar}
            alt={user.email}
            className="w-32 rounded-full"
          />
        </Link>
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
