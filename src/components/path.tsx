interface PathProps {
  path: string[] | string | undefined;
}

export default function Path({ path }: PathProps) {
  if (!path) return <p>Path unknown</p>;

  return (
    <div>
      <p>Path: {Array.isArray(path) ? path.join(" > ") : path}</p>
    </div>
  );
}
