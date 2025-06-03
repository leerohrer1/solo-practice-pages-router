import Path from "@/components/path";
import { useRouter } from "next/router";

export default function Docs() {
  const { slug } = useRouter().query;

  return <Path path={slug} />;
}
