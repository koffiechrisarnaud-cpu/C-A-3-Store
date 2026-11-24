// Contenu du site « Kael Média ».
// Modifier ce fichier ne change QUE le site Kael Média.
export const kael = {
  slug: "kael",
  name: "Kael Média",
  theme: "orange", // orange, white ou indigo
  whatsappText: "Bonjour, je souhaite avoir plus d’informations sur Kael Média.",

  // Texte de l’accueil (il présente le produit marqué « featured »)
  hero: {
    eyebrow: "Ressource gratuite",
    title: "Passer de l’idée à l’action en 7 jours",
    lead: "Une checklist simple en 6 étapes et un plan jour par jour pour arrêter de réfléchir et enfin commencer à avancer.",
    cta: "Obtenir gratuitement",
    note: "PDF gratuit · 4 pages · à lire sur ton téléphone",
  },

  // Section « tous les produits » : elle s’affiche toute seule dès qu’il y a 2 produits ou plus
  productsTitle: "Tous les produits",
  productsText: "Choisis le produit qui correspond à ton besoin.",

  // Liste des produits. Pour en ajouter un : copie un bloc { ... }, colle-le à la suite, puis change les textes.
  // Image de couverture : mets le fichier dans public/covers/ puis écris par exemple cover: "/covers/kael-1.jpg"
  products: [
    {
      id: "idee-action-7-jours",
      title: "Passer de l’idée à l’action en 7 jours",
      description: "Une checklist en 6 étapes et un plan de 7 jours, en PDF.",
      price: "Gratuit",
      url: "https://osvjvqtb.mychariow.co",
      cover: "",
      badge: "", // facultatif, ex. "Nouveau" (« Gratuit » s’affiche tout seul pour un produit gratuit)
      featured: true, // le produit mis en avant dans l’accueil
    },
  ],

  // Sections facultatives : supprime un bloc pour le retirer du site
  features: {
    title: "Ce que tu reçois",
    text: "Un guide court, concret, fait pour être appliqué tout de suite.",
    items: [
      { title: "Une checklist en 6 étapes", text: "Six étapes claires à cocher une par une, pour savoir exactement quoi faire." },
      { title: "Un plan de 7 jours", text: "Un plan jour par jour pour transformer ton idée en actions concrètes en une semaine." },
      { title: "Pensé pour ton téléphone", text: "Un PDF au format vertical, facile à lire et à suivre où que tu sois." },
    ],
  },

  days: {
    title: "Un plan clair, jour après jour",
    text: "Sept jours pour passer de l’idée à l’action, sans te perdre.",
    count: 7,
  },

  final: {
    title: "Prêt à passer à l’action ?",
    text: "Télécharge le PDF gratuit et commence maintenant.",
    cta: "Obtenir gratuitement",
  },
};
