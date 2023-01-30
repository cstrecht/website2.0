import projectpokedex from "./assets/projectpokedex.png";
import projectrickandmorty from "./assets/projectrickandmorty.png";
import projectmakeup from "./assets/projectmakeup.png";

const projects = [
  {
    id: 1,
    name: "Pokédex App",
    alt: "Pokédex App",
    description:
      "A search application for the Pokémon franchise, offering access to information on all Pokémon through an infinite scroll interface and replicas of their cards.The data utilized is sourced from the open RESTful API - PokéAPI. Gotta catch 'em all!",
    background: "h-60 w-96 mx-6 bg-pastel-yellow relative rounded-md",
    scrollFade: "fade-left",
    href: "https://pokedex-cstrecht.vercel.app/",
    image: projectpokedex,
  },
  {
    id: 2,
    name: "Rick & Morty Wikipedia",
    alt: "Rick & Morty App",
    description:
      'A responsive "Rick & Morty" information search tool, utilizing the publicly accessible "Rick and Morty API". Easily find characters, episodes, and relevant details, with filtering and pagination options for a seamless user experience.',
    background: "h-60 w-96 mx-6 bg-pastel-blue relative rounded-md",
    scrollFade: "fade-right",
    href: "https://rick-and-morty-wiki-cstrecht.vercel.app/",
    image: projectrickandmorty,
  },
  {
    id: 3,
    name: "The Makeup Store.",
    alt: "The Makeup Store",
    description: "Coming soon...",
    background: "h-60 w-96 mx-6 bg-pastel-pink relative rounded-md",
    scrollFade: "fade-left",
    href: "",
    image: projectmakeup,
  },
];
export default projects;
