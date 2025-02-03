import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown, ExternalLink } from "lucide-react";
import CatCharts from "./CatCharts";

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface MainContentProps {
  title?: string;
  introduction?: string;
  sections?: Array<{
    id: string;
    title: string;
    content: string;
    charts?: boolean;
  }>;
  tableOfContents?: TableOfContentsItem[];
  references?: Array<{
    id: string;
    text: string;
    url: string;
  }>;
}

const MainContent = ({
  title = "Domestic cat",
  introduction = "The domestic cat (Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",
  sections = [
    {
      id: "taxonomy",
      title: "Taxonomy",
      content:
        "The domestic cat is a member of the family Felidae, a family that had a common ancestor about 10–12 million years ago.",
    },
    {
      id: "etymology",
      title: "Etymology",
      content:
        "The origin of the English word cat (Old English catt) and its counterparts in other Germanic languages.",
    },
  ],
  tableOfContents = [
    { id: "taxonomy", title: "Taxonomy", level: 1 },
    { id: "etymology", title: "Etymology", level: 1 },
  ],
  references = [
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
  ],
}: MainContentProps) => {
  return (
    <div className="bg-white w-full p-6 font-serif">
      {/* Article Header */}
      <div className="border-b border-gray-200 pb-3">
        <div className="mb-4">
          <h1 className="text-[2.8em] font-normal font-serif border-0">
            {title}
          </h1>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="my-4 p-4 bg-[#F8F9FA] border border-gray-200 rounded">
        <Collapsible defaultOpen>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Contents</h2>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <nav className="mt-2">
              <ol className="list-none">
                {tableOfContents.map((item, index) => (
                  <li
                    key={item.id}
                    className={`pl-${item.level * 4} py-1 text-blue-600 hover:underline cursor-pointer`}
                  >
                    {index + 1}. {item.title}
                  </li>
                ))}
              </ol>
            </nav>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Main Content */}
      <ScrollArea className="h-full">
        <div className="space-y-6">
          {/* Introduction */}
          <p className="text-lg leading-7">{introduction}</p>

          {/* Sections */}
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-8">
              <h2 className="text-2xl font-serif mb-4">{section.title}</h2>
              <p className="text-base leading-7">{section.content}</p>
              {section.charts && <CatCharts />}
            </section>
          ))}

          {/* References */}
          <section id="references" className="mt-12">
            <Separator className="my-4" />
            <h2 className="text-2xl font-serif mb-4">References</h2>
            <ol className="list-decimal list-inside space-y-2">
              {references.map((ref) => (
                <li key={ref.id} className="text-sm">
                  {ref.text}
                  <a
                    href={ref.url}
                    className="inline-flex items-center ml-2 text-blue-600 hover:underline"
                  >
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
};

export default MainContent;
