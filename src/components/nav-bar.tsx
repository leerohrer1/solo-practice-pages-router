interface NavBarProps {
  slug: string[] | string | undefined;
}

export default function NavBar({ slug }: NavBarProps) {
  // this is always showing
  if (!slug) return <p>No NavBar</p>;

  return (
    <div>
      <p>Path: {Array.isArray(slug) ? slug.join(' > ') : slug}</p>
    </div>
  );
}
