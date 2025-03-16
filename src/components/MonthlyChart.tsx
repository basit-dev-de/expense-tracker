import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MonthlyChart = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"expense" | "income">("expense");

  // Placeholder data
  const data = [
    {
      name: "Jan",
      expense: 1200,
      income: 2400,
    },
    {
      name: "Feb",
      expense: 1600,
      income: 2400,
    },
    {
      name: "Mar",
      expense: 1000,
      income: 2000,
    },
    {
      name: "Apr",
      expense: 1400,
      income: 2400,
    },
    {
      name: "May",
      expense: 1800,
      income: 3000,
    },
    {
      name: "Jun",
      expense: 1200,
      income: 2500,
    },
    {
      name: "Jul",
      expense: 1478.15,
      income: 4025,
    },
    {
      name: "Aug",
      expense: 1978.15,
      income: 3025,
    },
    {
      name: "Sept",
      expense: 2478.15,
      income: 5025,
    },
    {
      name: "Oct",
      expense: 1478.15,
      income: 4025,
    },
    {
      name: "Nov",
      expense: 3002.15,
      income: 6025,
    },
    {
      name: "Dec",
      expense: 2000.15,
      income: 8723,
    },
  ];

  const chartConfig = {
    expense: {
      color: "#ef4444",
      theme: {
        light: "#ef4444",
        dark: "#ef4444",
      },
    },
    income: {
      color: "#10b981",
      theme: {
        light: "#10b981",
        dark: "#10b981",
      },
    },
  };

  return (
    <div className="h-[300px] w-full">
      <ChartContainer
        config={chartConfig}
        className="h-full"
        style={{ aspectRatio: "auto" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar
              dataKey={activeTab}
              fill={`var(--color-${activeTab})`}
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default MonthlyChart;
