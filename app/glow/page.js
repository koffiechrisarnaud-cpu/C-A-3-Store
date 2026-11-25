import StoreSite from "../components/StoreSite";
import { glow } from "../../data/sites/glow";

export const metadata = {
  title: "Glow Naturel – 50 recettes naturelles pour prendre soin de toi",
  description: "Un guide de 50 recettes simples de beauté et de bien-être au naturel : masques, gommages, boissons et eaux infusées.",
};

export default function Page() {
  return <StoreSite site={glow} />;
}
