import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
};

type Posts = {
  array: Post[];
};

export default function Latest({ array }: Posts) {
  const latest = array[array.length - 1];

  return (
    <>
      <h2>Enjoy the latest post</h2>
      <Link href={`/blog/${latest.id}`}>{latest.title}</Link>
      <p>{latest.content}</p>
    </>
  );
}
