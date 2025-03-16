
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { indexData } from "@/data/mockData";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const MarketOverview = () => {
  const { t } = useTranslation();

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{t('marketOverview')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(indexData).map(([index, data]) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="text-sm font-medium">{index}</span>
              <span className="text-2xl font-bold">{data.value.toLocaleString()}</span>
              <div className="flex items-center">
                {data.changePercent >= 0 ? (
                  <Badge variant="outline" className="text-green-500 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +{data.change.toFixed(2)} (+{data.changePercent.toFixed(2)}%)
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                    {data.change.toFixed(2)} ({data.changePercent.toFixed(2)}%)
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
