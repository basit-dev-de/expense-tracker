
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { 
  ShoppingBag, 
  Home, 
  Coffee, 
  Car, 
  Film, 
  Check, 
  Clock 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Transaction {
  id: string;
  date: Date;
  description: string;
  category: string;
  amount: number;
  type: 'expense' | 'income';
  status: 'completed' | 'pending';
}

const RecentTransactions = () => {
  const { t } = useTranslation();
  
  // Placeholder data
  const transactions: Transaction[] = [
    {
      id: "1",
      date: new Date(2023, 6, 15),
      description: "Grocery Store",
      category: "food",
      amount: 56.45,
      type: "expense",
      status: "completed"
    },
    {
      id: "2",
      date: new Date(2023, 6, 14),
      description: "Salary Payment",
      category: "income",
      amount: 2500.00,
      type: "income",
      status: "completed"
    },
    {
      id: "3",
      date: new Date(2023, 6, 13),
      description: "Coffee Shop",
      category: "food",
      amount: 4.99,
      type: "expense",
      status: "completed"
    },
    {
      id: "4",
      date: new Date(2023, 6, 12),
      description: "Car Insurance",
      category: "transport",
      amount: 175.50,
      type: "expense",
      status: "pending"
    },
    {
      id: "5",
      date: new Date(2023, 6, 10),
      description: "Movie Tickets",
      category: "entertainment",
      amount: 24.00,
      type: "expense",
      status: "completed"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "food":
        return <Coffee className="h-4 w-4" />;
      case "transport":
        return <Car className="h-4 w-4" />;
      case "housing":
        return <Home className="h-4 w-4" />;
      case "entertainment":
        return <Film className="h-4 w-4" />;
      default:
        return <ShoppingBag className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium">{t('date')}</th>
                <th className="h-12 px-4 text-left align-middle font-medium">{t('description')}</th>
                <th className="h-12 px-4 text-left align-middle font-medium">{t('category')}</th>
                <th className="h-12 px-4 text-left align-middle font-medium">{t('amount')}</th>
                <th className="h-12 px-4 text-left align-middle font-medium">{t('status')}</th>
                <th className="h-12 px-4 text-left align-middle font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">{format(transaction.date, "MMM d, yyyy")}</td>
                  <td className="p-4 align-middle">{transaction.description}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(transaction.category)}
                      <span>{t(transaction.category)}</span>
                    </div>
                  </td>
                  <td className={`p-4 align-middle font-medium ${
                    transaction.type === 'expense' ? 'text-rose-500' : 'text-emerald-500'
                  }`}>
                    {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toFixed(2)}
                  </td>
                  <td className="p-4 align-middle">
                    <Badge variant={transaction.status === 'completed' ? "outline" : "secondary"}>
                      <div className="flex items-center gap-1">
                        {transaction.status === 'completed' 
                          ? <Check className="h-3 w-3" /> 
                          : <Clock className="h-3 w-3" />}
                        {t(transaction.status)}
                      </div>
                    </Badge>
                  </td>
                  <td className="p-4 align-middle">
                    <Button variant="ghost" size="sm">{t('edit')}</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
