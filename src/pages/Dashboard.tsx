
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import ExpenseSummary from "@/components/ExpenseSummary";
import RecentTransactions from "@/components/RecentTransactions";
import MonthlyChart from "@/components/MonthlyChart";
import CategoryDistribution from "@/components/CategoryDistribution";
import AddTransactionDialog from "@/components/AddTransactionDialog";

const Dashboard = () => {
  const { t } = useTranslation();
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<'expense' | 'income'>('expense');
  
  const handleAddTransaction = (type: 'expense' | 'income') => {
    setTransactionType(type);
    setIsAddTransactionOpen(true);
  };
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t('dashboard')}</h1>
            <p className="text-muted-foreground">
              {t('todayDate', { date: format(new Date(), 'MMMM d, yyyy') })}
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => handleAddTransaction('income')}
            >
              {t('addIncome')}
            </Button>
            <Button 
              onClick={() => handleAddTransaction('expense')}
            >
              {t('addExpense')}
            </Button>
          </div>
        </div>

        <ExpenseSummary />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{t('monthlySpending')}</CardTitle>
                <CardDescription>{t('overview')}</CardDescription>
              </div>
              <Tabs defaultValue="expense">
                <TabsList>
                  <TabsTrigger value="expense">{t('expense')}</TabsTrigger>
                  <TabsTrigger value="income">{t('income')}</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <MonthlyChart />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('topCategories')}</CardTitle>
              <CardDescription>
                {t('thisMonth')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CategoryDistribution />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{t('recentTransactions')}</CardTitle>
              <CardDescription>
                {t('yourLatestTransactions')}
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="/transactions">{t('viewAll')}</a>
            </Button>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
      
      <AddTransactionDialog 
        isOpen={isAddTransactionOpen} 
        onClose={() => setIsAddTransactionOpen(false)}
        type={transactionType}
      />
    </Layout>
  );
};

export default Dashboard;
