import NavBar from '@/components/nav-bar';
import { useRouter } from 'next/router';

export default function Docs() {
  const { slug } = (useRouter()).query;

  return <NavBar slug={slug} />;
}
