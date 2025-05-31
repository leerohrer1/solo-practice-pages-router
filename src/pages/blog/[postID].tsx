import { useRouter } from "next/router";

export default function PostId() {
  const router = useRouter();

  return <h1>You are viewing post: {router.query.postId}</h1>;
}
