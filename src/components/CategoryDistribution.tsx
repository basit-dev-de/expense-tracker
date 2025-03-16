
import { useTranslation } from "react-i18next";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CategoryDistribution = () => {
  const { t } = useTranslation();

  // Placeholder data
  const data = [
    { name: "food", value: 350, color: "#f59e0b" },
    { name: "transport", value: 250, color: "#3b82f6" },
    { name: "housing", value: 450, color: "#10b981" },
    { name: "entertainment", value: 150, color: "#8b5cf6" },
    { name: "other", value: 278.15, color: "#6b7280" },
  ];

  // Create chart config for colors
  const chartConfig = data.reduce((config, item) => {
    return {
      ...config,
      [item.name]: {
        label: t(item.name),
        color: item.color,
      },
    };
  }, {});

  return (
    <div className="h-[300px] w-full">
      <ChartContainer
        config={chartConfig}
        className="h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}
            </Pie>
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="flex flex-col">
                        <span className="font-bold text-muted-foreground">
                          {t(data.name)}
                        </span>
                        <span className="font-bold">${data.value}</span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default CategoryDistribution;
