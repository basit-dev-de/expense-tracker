
import { useTranslation } from "react-i18next";
import { useGetStocksQuery } from "@/store/api/marketApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatPercentage } from "@/utils/formatters";

const StockList = () => {
  const { t } = useTranslation();
  const { data: stocks, isLoading } = useGetStocksQuery({});

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('stocks')}</CardTitle>
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
        <CardTitle>{t('stocks')}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('symbol')}</TableHead>
              <TableHead>{t('price')}</TableHead>
              <TableHead>{t('change')}</TableHead>
              <TableHead className="hidden md:table-cell">{t('volume')}</TableHead>
              <TableHead className="hidden md:table-cell">{t('marketCap')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocks?.map((stock) => (
              <TableRow key={stock.symbol}>
                <TableCell className="font-medium">{stock.symbol}</TableCell>
                <TableCell>{formatCurrency(stock.price)}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={stock.changePercent >= 0 ? 
                    "text-green-500 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800" : 
                    "text-red-500 border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800"
                  }>
                    {stock.changePercent >= 0 ? "+" : ""}{formatPercentage(stock.changePercent)}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{stock.volume}</TableCell>
                <TableCell className="hidden md:table-cell">{stock.marketCap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StockList;
