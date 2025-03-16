
import { useTranslation } from "react-i18next";
import { useGetNewsQuery } from "@/store/api/marketApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketNews = () => {
  const { t } = useTranslation();
  const { data: news, isLoading } = useGetNewsQuery({});

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('latestNews')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center p-6">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('latestNews')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {news?.map((item) => (
            <div key={item.id} className="border-b pb-4 last:border-0 last:pb-0">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <span>{item.source}</span>
                <span>•</span>
                <span>{item.timestamp}</span>
              </div>
              <p className="mt-2 text-sm">{item.snippet}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketNews;
