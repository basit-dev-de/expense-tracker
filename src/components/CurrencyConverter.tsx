
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetForexQuery } from "@/store/api/marketApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/utils/formatters";

const currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY"];

const CurrencyConverter = () => {
  const { t } = useTranslation();
  const { data: rates } = useGetForexQuery({});
  
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    // Simple direct conversion (in a real app, you'd use proper forex rates)
    // This is just a demo approximation
    const exchangeRate = fromCurrency === "USD" && toCurrency === "EUR" ? 0.92 :
                         fromCurrency === "EUR" && toCurrency === "USD" ? 1.09 : 1.0;
    
    setResult(parseFloat(amount) * exchangeRate);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('currencyConverter')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">{t('amount')}</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>{t('from')}</Label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder={t('from')} />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label>{t('to')}</Label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder={t('to')} />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button onClick={handleConvert} className="mt-2">
            {t('convert')}
          </Button>
          
          {result !== null && (
            <div className="mt-4">
              <div className="text-sm font-medium">{t('result')}</div>
              <div className="text-2xl font-bold">
                {formatCurrency(result, toCurrency)}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
