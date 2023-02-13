import projectpokedex from "./assets/projects/projectpokedex.png";
import projectrickandmorty from "./assets/projects/projectrickandmorty.png";
import projectmakeup from "./assets/projects/projectmakeup.png";
import projectcheckout from "./assets/projects/projectcheckout.png";
import projectwebsite from "./assets/projects/projectwebsite.png";

const projects = [
  {
    id: 1,
    name: "Pokédex App",
    alt: "Pokédex App",
    description:
      "A search application for the Pokémon franchise, offering access to information on all Pokémon through an infinite scroll interface and replicas of their cards.The data utilized is sourced from the open RESTful API - PokéAPI. Gotta catch 'em all!",
    background:
      "mx-auto h-52 w-80 sm:h-60 sm:w-96 xl:h-80 xl:w-[530px] 2xl:h-[400px] 2xl:w-[685px] md:mx-6 bg-pastel-yellow relative rounded-md",
    scrollFade: "fade-right",
    demo: "https://pokedex-cstrecht.vercel.app/",
    repo: "https://github.com/cstrecht/pokedex",
    image: projectpokedex,
  },
  {
    id: 2,
    name: "Rick & Morty Wikipedia",
    alt: "Rick & Morty App",
    description:
      'A responsive "Rick & Morty" information search tool, utilizing the publicly accessible "Rick and Morty API". Easily find characters, episodes, and relevant details, with filtering and pagination options for a seamless user experience.',
    background:
      "mx-auto h-52 w-80 sm:h-60 sm:w-96 xl:h-80 xl:w-[530px] 2xl:h-[400px] 2xl:w-[685px] md:mx-6 bg-pastel-blue relative rounded-md",
    scrollFade: "fade-right",
    demo: "https://rick-and-morty-wiki-cstrecht.vercel.app/",
    repo: "https://github.com/cstrecht/rick-and-morty-wiki",
    image: projectrickandmorty,
  },
  {
    id: 3,
    name: "Store Checkout",
    alt: "Store Checkout",
    description:
      "E-commerce platform with user-friendly input fields and client-side validation for accurate customer information. Optimized for all devices for seamless shopping experience.",
    background:
      "mx-auto h-52 w-80 sm:h-60 sm:w-96 xl:h-80 xl:w-[530px] 2xl:h-[400px] 2xl:w-[685px] md:mx-6 bg-pastel-lilac relative rounded-md",
    scrollFade: "fade-right",
    demo: "https://steevanz-store-checkout-cstrecht.vercel.app/",
    repo: "https://github.com/cstrecht/steevanz-store-checkout",
    image: projectcheckout,
  },
  {
    id: 4,
    name: "This Website",
    alt: "My Website",
    description:
      "My personal portfolio website serves as a platform to highlight my skills, experiences, and projects. It acts as a tool for showcasing my professional identity and abilities to the world :)",
    background:
      "mx-auto h-52 w-80 sm:h-60 sm:w-96 xl:h-80 xl:w-[530px] 2xl:h-[400px] 2xl:w-[685px] md:mx-6 bg-pastel-green relative rounded-md",
    scrollFade: "fade-right",
    demo: "",
    repo: "https://github.com/cstrecht/website2.0",
    image: projectwebsite,
  },

  {
    id: 5,
    name: "The Makeup Store.",
    alt: "The Makeup Store",
    description: "Coming soon...",
    background:
      "mx-auto h-52 w-80 sm:h-60 sm:w-96 xl:h-80 xl:w-[530px] 2xl:h-[400px] 2xl:w-[685px] md:mx-6 bg-pastel-pink relative rounded-md",
    scrollFade: "fade-right",
    image: projectmakeup,
  },
];
export default projects;
