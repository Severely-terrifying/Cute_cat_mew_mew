import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const popularBreeds = [
  { name: "Persian", count: 80 },
  { name: "Maine Coon", count: 67 },
  { name: "Siamese", count: 62 },
  { name: "British Shorthair", count: 51 },
  { name: "Ragdoll", count: 43 },
];

const lifespanData = [
  { name: "Indoor", value: 14 },
  { name: "Outdoor", value: 8 },
  { name: "Mixed", value: 12 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const CatCharts = () => {
  return (
    <div className="w-full space-y-6 max-w-full">
      <h2 className="text-2xl font-serif mb-6">Cat Statistics</h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-[#F8F9FA] p-4 rounded border border-[#a2a9b1]">
          <h3 className="text-lg font-serif mb-4">Most Popular Cat Breeds</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={popularBreeds}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#36A2EB"
                name="Population (millions)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#F8F9FA] p-4 rounded border border-[#a2a9b1]">
          <h3 className="text-lg font-serif mb-4">
            Average Cat Lifespan (Years)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={lifespanData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}y`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {lifespanData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CatCharts;
