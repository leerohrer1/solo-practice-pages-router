import Path from "@/components/path";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const pathname = router.pathname;

  function loadAboutPage() {
    router.push("/about");
  }

  return (
    <>
      <Path path={pathname} />
      <button className="btn" onClick={loadAboutPage}>
        About Page
      </button>
      <h1>Contact</h1>
      <p>This is where contact info could go.</p>
    </>
  );
}
