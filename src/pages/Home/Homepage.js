import "./homepage.css"
import { Brands, Hero } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function Homepage() {
  useDocumentTitle("Watches World")
  return (
    <>
      <Hero />
      <Brands />
    </>
  );
}
