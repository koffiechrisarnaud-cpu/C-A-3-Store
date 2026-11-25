// Contenu du site « Glow Naturel ».
// Modifier ce fichier ne change QUE le site Glow Naturel.
export const glow = {
  slug: "glow",
  name: "Glow Naturel",
  theme: "white", // orange, white ou indigo
  whatsappText: "Bonjour, je souhaite avoir plus d’informations sur le guide Glow Naturel.",

  // Texte de l’accueil (il présente le produit marqué « featured »)
  hero: {
    eyebrow: "Beauté et bien-être au naturel",
    title: "50 recettes naturelles pour révéler ton éclat",
    lead: "Des recettes simples à faire à la maison, avec des ingrédients du quotidien : masques, boissons, gommages et plus encore.",
    cta: "Acheter le guide",
    note: "Ebook numérique · 3 500 FCFA",
  },

  // Section « tous les produits » : elle s’affiche toute seule dès qu’il y a 2 produits ou plus
  productsTitle: "Tous les produits",
  productsText: "Choisis le guide qui te correspond.",

  // Liste des produits. Pour en ajouter un : copie un bloc { ... }, colle-le à la suite, puis change les textes.
  // Image de couverture : mets le fichier dans public/covers/ puis écris par exemple cover: "/covers/glow-1.jpg"
  products: [
    {
      id: "glow-50-recettes",
      title: "Glow Naturel : 50 recettes naturelles",
      description: "Un guide de 50 recettes simples pour prendre soin de toi au naturel.",
      price: "3 500 FCFA",
      url: "https://pusgfhxt.mychariow.com",
      cover: "",
      badge: "", // facultatif, ex. "Nouveau"
      featured: true, // le produit mis en avant dans l’accueil
    },
  ],

  // Sections facultatives : supprime un bloc pour le retirer du site
  features: {
    title: "Ce que tu trouveras dedans",
    text: "Un guide pratique, facile à suivre, pour prendre soin de toi simplement.",
    items: [
      { title: "50 recettes simples", text: "Des recettes faciles à faire à la maison, avec des ingrédients que tu connais déjà." },
      { title: "Beauté et bien-être", text: "Masques, gommages, boissons et eaux infusées, comme le masque miel-yaourt, le bissap frais ou le gommage lèvres sucre-miel." },
      { title: "Pas à pas", text: "Des étapes claires à suivre, même si tu débutes." },
    ],
  },

  final: {
    title: "Envie de prendre soin de toi au naturel ?",
    text: "Découvre les 50 recettes du guide Glow Naturel.",
    cta: "Acheter le guide",
  },
};
