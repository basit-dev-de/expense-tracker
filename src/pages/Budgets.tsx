
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Budgets = () => {
  const { t } = useTranslation();
  
  // Placeholder data
  const budgets = [
    { category: "food", allocated: 500, spent: 350, color: "#f59e0b" },
    { category: "transport", allocated: 300, spent: 250, color: "#3b82f6" },
    { category: "housing", allocated: 800, spent: 450, color: "#10b981" },
    { category: "entertainment", allocated: 200, spent: 150, color: "#8b5cf6" },
    { category: "shopping", allocated: 300, spent: 78, color: "#ec4899" },
    { category: "utilities", allocated: 250, spent: 200, color: "#6366f1" },
  ];
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">{t('budgets')}</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {budgets.map((budget) => {
            const percentage = Math.round((budget.spent / budget.allocated) * 100);
            let statusColor = "bg-emerald-500";
            
            if (percentage > 90) {
              statusColor = "bg-rose-500";
            } else if (percentage > 75) {
              statusColor = "bg-amber-500";
            }
            
            return (
              <Card key={budget.category}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">
                    {t(budget.category)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">
                      ${budget.spent.toFixed(2)} {t('of')} ${budget.allocated.toFixed(2)}
                    </span>
                    <span className="text-sm font-medium">{percentage}%</span>
                  </div>
                  <Progress value={percentage} className={statusColor} />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-muted-foreground">
                      ${(budget.allocated - budget.spent).toFixed(2)} {t('remaining')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Budgets;
