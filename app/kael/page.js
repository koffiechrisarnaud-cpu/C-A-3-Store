import StoreSite from "../components/StoreSite";
import { kael } from "../../data/sites/kael";

export const metadata = {
  title: "Kael Média – Passer de l’idée à l’action en 7 jours (PDF gratuit)",
  description: "Télécharge gratuitement la checklist en 6 étapes et le plan de 7 jours pour passer de l’idée à l’action.",
};

export default function Page() {
  return <StoreSite site={kael} />;
}
