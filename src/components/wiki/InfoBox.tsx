import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

interface InfoBoxProps {
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
}

const InfoBox = ({
  title = "Cat",
  image = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop",
  scientificName = "Felis catus",
  conservation = "Domesticated",
  taxonomy = {
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Mammalia",
    order: "Carnivora",
    family: "Felidae",
    genus: "Felis",
    species: "F. catus",
  },
  characteristics = {
    length: "46-63 cm",
    weight: "4-5 kg",
    lifespan: "12-18 years",
    diet: "Carnivorous",
    habitat: "Domestic/Urban",
  },
}: InfoBoxProps) => {
  return (
    <Card className="w-[300px] p-4 bg-[#F8F9FA] border border-[#a2a9b1] text-sm">
      <div className="text-center font-serif mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="italic">{scientificName}</p>
      </div>

      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover rounded"
        />
        <p className="text-xs text-gray-600 mt-1 text-center">A domestic cat</p>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2">Conservation status</h3>
        <p>{conservation}</p>
      </div>

      <Separator className="my-4" />

      <div className="mb-4">
        <h3 className="font-bold mb-2">Scientific classification</h3>
        <table className="w-full">
          <tbody>
            {Object.entries(taxonomy).map(([key, value]) => (
              <tr key={key} className="border-b border-gray-200 last:border-0">
                <td className="py-1 font-medium capitalize">{key}:</td>
                <td className="py-1 italic">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Separator className="my-4" />

      <div>
        <h3 className="font-bold mb-2">Characteristics</h3>
        <table className="w-full">
          <tbody>
            {Object.entries(characteristics).map(([key, value]) => (
              <tr key={key} className="border-b border-gray-200 last:border-0">
                <td className="py-1 font-medium capitalize">{key}:</td>
                <td className="py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default InfoBox;
