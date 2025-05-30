type Post = {
  id: number;
  title: string;
  content: string;
};

interface LatestProps {
  array: Post[];
}

export default function Latest({ array }: LatestProps) {
  const latest = array[array.length - 1];

  return (
    <>
      <h2>Enjoy the latest post</h2>
      <h3>{latest.title}</h3>
      <p>{latest.content}</p>
    </>
  );
}
