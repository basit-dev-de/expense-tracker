
import { useTranslation } from "react-i18next";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  TrendingDown, 
  TrendingUp, 
  DollarSign, 
  CreditCard 
} from "lucide-react";

const ExpenseSummary = () => {
  const { t } = useTranslation();
  
  // Placeholder data - in a real app this would come from your state/API
  const summaryData = {
    balance: 2546.85,
    income: 4025.00,
    expenses: 1478.15,
    pending: 350.00
  };
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            {t('balance')}
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${summaryData.balance.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            +2.5% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            {t('income')}
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-emerald-500">
            +${summaryData.income.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            +12.2% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            {t('expense')}
          </CardTitle>
          <TrendingDown className="h-4 w-4 text-rose-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-rose-500">
            -${summaryData.expenses.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            -4.5% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            {t('pending')}
          </CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${summaryData.pending.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            3 pending transactions
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseSummary;
