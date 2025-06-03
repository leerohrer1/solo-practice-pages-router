import Path from "@/components/path";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const pathname = useRouter().pathname;

  return (
    <>
      <header>
        <ul>
          <Link href={`/about`}>About</Link>{" "}
          <Link href={`/contact`}>Contact</Link>{" "}
          <Link href={`/authors`}>Other Authors</Link>{" "}
          <Link href={`/blog`}>My Posts</Link>
        </ul>
      </header>
      <Path path={pathname} />
      <h1>Welcome to this Blog</h1>
    </>
  );
}
