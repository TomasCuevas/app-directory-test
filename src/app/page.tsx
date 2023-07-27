import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <h1>Hola</h1>
      <ul>
        <li>
          <Link href="/users">Usuarios</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
