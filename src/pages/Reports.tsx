
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyChart from "@/components/MonthlyChart";
import CategoryDistribution from "@/components/CategoryDistribution";

const Reports = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">{t('reports')}</h1>
        
        <Tabs defaultValue="expenses">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="expenses">{t('expenses')}</TabsTrigger>
              <TabsTrigger value="income">{t('income')}</TabsTrigger>
              <TabsTrigger value="savings">{t('savings')}</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="expenses" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>{t('monthlySpending')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <MonthlyChart />
                </CardContent>
              </Card>
              
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>{t('categoryBreakdown')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CategoryDistribution />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="income" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('incomeReport')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  {t('comingSoon')}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="savings" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('savingsReport')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  {t('comingSoon')}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Reports;
