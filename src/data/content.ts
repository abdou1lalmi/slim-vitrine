/** Données et copies centrales de la vitrine SLIM.
 *  Faits vérifiés : hamoud-boualem.com, Wikipédia (Slim boisson / Hamoud Boualem),
 *  fil @slimofficielle (légendes bilingues FR/AR, hashtags famille/partage/gazouz). */

export const IG_URL = "https://www.instagram.com/slimofficielle/";
export const IG_HANDLE = "@slimofficielle";

/* ── Saveurs officielles de la gamme Slim ── */
export type Flavor = {
  id: string;
  num: string;
  name: string;
  nameAr: string;
  liquid: string;
  deep: string;
  tint: string;
  note: string;
};

export const FLAVORS: Flavor[] = [
  {
    id: "citron",
    num: "01",
    name: "Citron",
    nameAr: "ليمون",
    liquid: "#ffd84d",
    deep: "#d9a914",
    tint: "#f7edc4",
    note: "L'originale. « Le citron qui prime » — le slogan de 1950 n'a pas pris une ride.",
  },
  {
    id: "orange",
    num: "02",
    name: "Orange",
    nameAr: "برتقال",
    liquid: "#ee7a24",
    deep: "#c85c0e",
    tint: "#fae2ca",
    note: "Anciennement « Crush », sous licence dans les années 1980. Devenue un classique à part entière.",
  },
  {
    id: "pomme",
    num: "03",
    name: "Pomme",
    nameAr: "تفاح",
    liquid: "#9bbe3f",
    deep: "#75931f",
    tint: "#ebf0cf",
    note: "Le vert qui tranche sur toutes les tables, du déjeuner au match du vendredi.",
  },
  {
    id: "ananas",
    num: "04",
    name: "Ananas",
    nameAr: "أناناس",
    liquid: "#eec253",
    deep: "#c79a26",
    tint: "#f7eccb",
    note: "Le soleil des tropiques passé par la Méditerranée. Servi glacé, c'est mieux.",
  },
  {
    id: "fraise",
    num: "05",
    name: "Fraise",
    nameAr: "فراولة",
    liquid: "#d8504f",
    deep: "#a93336",
    tint: "#f7dbd6",
    note: "La préférée des plus jeunes — et de tous ceux qui ne l'avouent pas.",
  },
  {
    id: "litchi",
    num: "06",
    name: "Litchi",
    nameAr: "ليتشي",
    liquid: "#e88ba0",
    deep: "#bd5f76",
    tint: "#f9e2e8",
    note: "La nouvelle vague de la maison : florale, douce, taillée pour l'apéro d'été.",
  },
];

/* ── Piliers de contenu du compte ── */
export const PILLARS = [
  {
    num: "01",
    title: "Fraîcheur quotidienne",
    body: "Produits sous tous les angles, gouttelettes, couleurs franches : le gazouz comme objet de désir.",
    tag: "#fresh #gazouz",
  },
  {
    num: "02",
    title: "Culture DZ",
    body: "Paysages, langue, gestes d'ici : le compte célèbre l'Algérie autant que la boisson qu'elle a adoptée.",
    tag: "#TasteOfAlgeria #dzair",
  },
  {
    num: "03",
    title: "Famille & partage",
    body: "Slim se boit à plusieurs — table du vendredi, pique-nique, mariage. Toujours la bouteille au centre.",
    tag: "#famille #partage",
  },
  {
    num: "04",
    title: "Nouveautés & éditions",
    body: "Nouvelles saveurs, nouveaux formats, temps forts de saison : les abonnés sont servis en premier.",
    tag: "#slim #since1950",
  },
] as const;

/* ── Galerie curated (visuels de démonstration) ── */
export type GalleryPost = {
  id: string;
  scene: "bottle" | "glass" | "pattern" | "table";
  flavorIndex: number;
  span?: string;
  ratio: string;
  alt: string;
  caption: string;
  tag: string;
};

export const GALLERY: GalleryPost[] = [
  {
    id: "p01",
    scene: "bottle",
    flavorIndex: 0,
    ratio: "aspect-[4/5]",
    alt: "Visuel de démonstration : bouteille Slim Citron sur fond jaune avec tranches d'agrume",
    caption: "Live, discover and drink Slim ! عيشوا، اكتشفوا و اشربوا سليم !",
    tag: "#gazouz",
  },
  {
    id: "p02",
    scene: "glass",
    flavorIndex: 1,
    ratio: "aspect-[4/5]",
    alt: "Visuel de démonstration : verre d'Slim Orange avec glaçons et paille",
    caption: "Bien fraîche, comme à la maison.",
    tag: "#famille",
  },
  {
    id: "p03",
    scene: "pattern",
    flavorIndex: 2,
    span: "md:col-span-2",
    ratio: "aspect-[4/5] md:aspect-[8/5]",
    alt: "Visuel de démonstration : motif géométrique inspiré des tuiles algériennes en vert pomme",
    caption: "Le goût de l'Algérie, génération après génération.",
    tag: "#TasteOfAlgeria",
  },
  {
    id: "p04",
    scene: "table",
    flavorIndex: 3,
    ratio: "aspect-[4/5]",
    alt: "Visuel de démonstration : trois verres d'Slim Ananas alignés sur une nappe",
    caption: "Vendredi, table pleine.",
    tag: "#partage",
  },
  {
    id: "p05",
    scene: "bottle",
    flavorIndex: 4,
    ratio: "aspect-[4/5]",
    alt: "Visuel de démonstration : duo de bouteilles Slim Fraise sur fond rose",
    caption: "La douceur, version gazouz.",
    tag: "#slim",
  },
  {
    id: "p06",
    scene: "glass",
    flavorIndex: 5,
    ratio: "aspect-[4/5]",
    alt: "Visuel de démonstration : canette Slim Litchi avec condensation",
    caption: "Nouvelle vague, même maison.",
    tag: "#since1950",
  },
  {
    id: "p07",
    scene: "pattern",
    flavorIndex: 0,
    ratio: "aspect-[4/5]",
    alt: "Visuel de démonstration : motif zellige jaune citron",
    caption: "Le citron qui prime, depuis 1950.",
    tag: "#citron",
  },
  {
    id: "p08",
    scene: "table",
    flavorIndex: 2,
    span: "md:col-span-2",
    ratio: "aspect-[4/5] md:aspect-[8/5]",
    alt: "Visuel de démonstration : grande tablée estivale avec plusieurs bouteilles Slim Pomme",
    caption: "L'été ne demande pas la permission.",
    tag: "#dz #algeria",
  },
];

/* ── Frise historique ── */
export const TIMELINE = [
  {
    year: "1878",
    text: "Youcef Hammoud ouvre sa limonaderie à Alger. La maison qui donnera naissance à Slim est née.",
  },
  {
    year: "1889",
    text: "Sa limonade décroche une médaille d'or à l'Exposition universelle de Paris, « hors concours ».",
  },
  {
    year: "1950",
    text: "Naissance de Slim et de son slogan culte : « Slim, le citron qui prime ». L'aventure prend son envol.",
  },
  {
    year: "Aujourd'hui",
    text: "Six saveurs, tous les formats — verre, PET, canette — et toujours la même place : au centre de la table algérienne.",
  },
] as const;

/* ── Bandeau défilant ── */
export const TICKER_ITEMS = [
  "Gazouz depuis 1950",
  "عيشوا، اكتشفوا و اشربوا سليم",
  "Le citron qui prime",
  "Taste of Algeria",
  "Bien frais, bien froid",
  "Six saveurs",
] as const;
