import Link from "next/link";
import { authors } from "../..";
import { useRouter } from "next/router";

export default function AuthorsPosts() {
  const router = useRouter();
  const author = authors.filter(
    (author) => author.id === router.query.authorId
  )[0];

  return (
    <>
      <h1>{author.name}&apos;s Blog Posts</h1>
      <ul>
        {author.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/authors/${author.id}/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
