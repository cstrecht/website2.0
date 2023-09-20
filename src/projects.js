import projectpokedex from "./assets/projects/projectpokedex.png";
import projectrickandmorty from "./assets/projects/projectrickandmorty.png";
import projectwebsite from "./assets/projects/projectwebsite.png";
import projectzebra from "./assets/projects/projectzebra.png";

const projects = [
  {
    id: 1,
    prideScore: 4,
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
    prideScore: 2,
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
    id: 4,
    prideScore: 5,
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
    prideScore: 3,
    name: "The Adler Typewriter (marketing website)",
    alt: "The Adler Typewriter",
    description:
      "I created this project to showcase the Adler Typewriter, a potential product. Its main goal is to send automated emails to users' inboxes using Resend for API integration and responsive email templates via react.email. Check out the demo!",
    background:
      "mx-auto h-52 w-80 sm:h-60 sm:w-96 xl:h-80 xl:w-[530px] 2xl:h-[400px] 2xl:w-[685px] md:mx-6 bg-pastel-pink relative rounded-md",
    scrollFade: "fade-right",
    demo: "https://zebra-omega.vercel.app/",
    repo: "https://github.com/cstrecht/zebra",
    image: projectzebra,
  },
];
export default projects;
