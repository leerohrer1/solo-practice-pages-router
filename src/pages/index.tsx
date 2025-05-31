import NavBar from "@/components/nav-bar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { slug } = (useRouter()).query;

  return (
    <>
      <header>
        {" "}
        <ul>
          {" "}
          <Link href={`/about`}>About</Link>{" "}
          <Link href={`/contact`}>Contact</Link>{" "}
          <Link href={`/authors`}>Other Authors</Link>{" "}
          <Link href={`/blog`}>My Posts</Link>
        </ul>
      </header>
      <NavBar slug={slug} />
      <h1>Welcome to this Blog</h1>
    </>
  );
}
