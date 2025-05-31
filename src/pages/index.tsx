import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        {" "}
        <ul>
          {" "}
          <Link href={`/about`}>About</Link>
          {" "}
          <Link href={`/contact`}>Contact</Link>
          {" "}
          <Link href={`/authors`}>Other Authors</Link>
          {" "}
          <Link href={`/blog`}>My Posts</Link>
        </ul>
      </header>
      <h1>Welcome to this Blog</h1>
    </>
  );
}
