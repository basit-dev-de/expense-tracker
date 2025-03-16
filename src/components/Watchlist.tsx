
import { useTranslation } from "react-i18next";
import { useGetCryptoQuery, useGetCommoditiesQuery } from "@/store/api/marketApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatPercentage } from "@/utils/formatters";

interface WatchlistProps {
  type: "crypto" | "commodities";
}

const Watchlist = ({ type }: WatchlistProps) => {
  const { t } = useTranslation();
  const { data: cryptoData, isLoading: cryptoLoading } = useGetCryptoQuery({}, { skip: type !== "crypto" });
  const { data: commoditiesData, isLoading: commoditiesLoading } = useGetCommoditiesQuery({}, { skip: type !== "commodities" });

  const data = type === "crypto" ? cryptoData : commoditiesData;
  const isLoading = type === "crypto" ? cryptoLoading : commoditiesLoading;

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t(type)}</CardTitle>
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
        <CardTitle>{t(type)}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('symbol')}</TableHead>
              <TableHead>{t('price')}</TableHead>
              <TableHead>{t('change')}</TableHead>
              <TableHead className="hidden md:table-cell">{t('volume')}</TableHead>
              {type === "crypto" && <TableHead className="hidden md:table-cell">{t('marketCap')}</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.symbol}>
                <TableCell className="font-medium">{item.symbol}</TableCell>
                <TableCell>{formatCurrency(item.price)}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={item.changePercent >= 0 ? 
                    "text-green-500 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800" : 
                    "text-red-500 border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800"
                  }>
                    {item.changePercent >= 0 ? "+" : ""}{formatPercentage(item.changePercent)}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{item.volume}</TableCell>
                {type === "crypto" && <TableCell className="hidden md:table-cell">{item.marketCap}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Watchlist;
