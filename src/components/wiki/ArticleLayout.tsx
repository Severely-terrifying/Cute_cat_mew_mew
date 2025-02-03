import MainContent from "./MainContent";
import InfoBox from "./InfoBox";

interface ArticleLayoutProps {
  isExpanded?: boolean;
  mainContent?: {
    title?: string;
    introduction?: string;
    sections?: Array<{
      id: string;
      title: string;
      content: string;
      charts?: boolean;
    }>;
    tableOfContents?: Array<{
      id: string;
      title: string;
      level: number;
    }>;
    references?: Array<{
      id: string;
      text: string;
      url: string;
    }>;
  };
  infoBox?: {
    title?: string;
    image?: string;
    scientificName?: string;
    conservation?: string;
    taxonomy?: {
      kingdom?: string;
      phylum?: string;
      class?: string;
      order?: string;
      family?: string;
      genus?: string;
      species?: string;
    };
    characteristics?: {
      length?: string;
      weight?: string;
      lifespan?: string;
      diet?: string;
      habitat?: string;
    };
  };
}

const ArticleLayout = ({
  mainContent,
  infoBox,
  isExpanded = false,
}: ArticleLayoutProps) => {
  return (
    <div className="bg-background min-h-screen">
      <div
        className={`${isExpanded ? "max-w-[1920px]" : "max-w-[1512px]"} mx-auto px-4 py-6 flex gap-8 transition-all duration-300`}
      >
        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <MainContent {...mainContent} />
        </div>

        {/* Right Sidebar */}
        <div className="w-[300px] flex-shrink-0">
          <InfoBox {...infoBox} />
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
