import WikiNavBar from "./wiki/WikiNavBar";
import ArticleLayout from "./wiki/ArticleLayout";

import { useState } from "react";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const mainContent = {
    title: "Domestic cat",
    introduction:
      "The domestic cat (Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",
    sections: [
      {
        id: "taxonomy",
        title: "Taxonomy",
        content:
          "The domestic cat is a member of the family Felidae, a family that had a common ancestor about 10–12 million years ago. The genus Felis diverged from other Felidae around 6–7 million years ago.",
      },
      {
        id: "etymology",
        title: "Etymology",
        content:
          "The origin of the English word cat (Old English catt) and its counterparts in other Germanic languages descended from Proto-Germanic *kattōn-, which is first attested in the 6th century.",
      },
      {
        id: "history",
        title: "History",
        content:
          "Cats were first domesticated in the Near East around 7500 BC. It was long thought that cat domestication began in ancient Egypt, where cats were venerated from around 3100 BC.",
      },
      {
        id: "statistics",
        title: "Statistics and Demographics",
        content: "",
        charts: true,
      },
    ],
    tableOfContents: [
      { id: "taxonomy", title: "Taxonomy", level: 1 },
      { id: "etymology", title: "Etymology", level: 1 },
      { id: "history", title: "History", level: 1 },
    ],
    references: [
      {
        id: "ref1",
        text: "Driscoll CA, Menotti-Raymond M, Roca AL, et al. (2007). The Near Eastern origin of cat domestication",
        url: "#",
      },
      {
        id: "ref2",
        text: "Wozencraft, W.C. (2005). Order Carnivora",
        url: "#",
      },
      {
        id: "ref3",
        text: "Linnaeus C (1758). Systema naturae per regna tria naturae: secundum classes, ordines, genera, species, cum characteribus, differentiis, synonymis, locis",
        url: "#",
      },
    ],
  };

  const infoBox = {
    title: "Domestic cat",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop",
    scientificName: "Felis catus",
    conservation: "Domesticated",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Felidae",
      genus: "Felis",
      species: "F. catus",
    },
    characteristics: {
      length: "46-63 cm",
      weight: "4-5 kg",
      lifespan: "12-18 years",
      diet: "Carnivorous",
      habitat: "Domestic/Urban",
    },
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <WikiNavBar
        isExpanded={isExpanded}
        onToggleExpand={() => setIsExpanded(!isExpanded)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />
      <div className="pt-[80px]">
        <ArticleLayout
          mainContent={mainContent}
          infoBox={infoBox}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
}
