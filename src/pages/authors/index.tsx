import Link from "next/link";

export default function Authors() {
  return (
    <>
      <h1>Authors Page</h1>
      {authors.map((author) => (
        <li key={author.id}>
          {" "}
          <Link href={`/authors/${author.id}/posts`}>{author.name}</Link>
          <p>Author&apos;s interests: {author.interests}</p>
        </li>
      ))}
    </>
  );
}

export const authors = [
  {
    id: "dave",
    name: "David",
    interests: "being a dad",
    posts: [
      { id: 1, title: "Post One", content: "Really good blog here." },
      { id: 2, title: "Post Two", content: "Really good blog here!" },
      { id: 3, title: "Post Three", content: "Really good blog here?" },
    ],
  },
  {
    id: "otto",
    name: "Otto",
    interests: "coding, soccer, and learning",
    posts: [
      { id: 1, title: "Post One", content: "Really good blog here." },
      { id: 2, title: "Post Two", content: "Really good blog here!" },
      { id: 3, title: "Post Three", content: "Really good blog here?" },
    ],
  },
  {
    id: "tav",
    name: "Tav",
    interests: "being loving, soccer, and lacrosse",
    posts: [
      { id: 1, title: "Post One", content: "Really good blog here." },
      { id: 2, title: "Post Two", content: "Really good blog here!" },
      { id: 3, title: "Post Three", content: "Really good blog here?" },
    ],
  },
];
