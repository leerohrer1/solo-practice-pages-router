import Link from "next/link";
import { authors } from "../../index";
import { useParams } from "next/navigation";

export default function AuthorPostId() {
  const { authorId, postId } = useParams();
  console.log("useparams", useParams());

  const author = authors.find(
    (author) => String(author.id) === String(authorId)
  );

  if (!author) {
    console.log('author', author)
    return <p>Author not found.</p>;
  }

  const post = author.posts?.find((post) => String(post.id) === String(postId));

  if (!post) {
        console.log('post', post)

    return <p>Post not found.</p>;
  }

  return (
    <>
      <h1>The Blog of {author.name}</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link href={`/authors/${author.id}/posts`}>See Other Posts</Link>
    </>
  );
}
