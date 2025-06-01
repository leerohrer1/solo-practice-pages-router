import NavBar from "@/components/nav-bar";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const { slug } = router.query;

  function loadAboutPage() {
    router.push("/about");
  }

  return (
    <>
      <NavBar slug={slug} />
      <button className="btn" onClick={loadAboutPage}>About Page</button>
      <h1>Contact</h1>
      <p>This is where contact info could go.</p>
    </>
  );
}
