
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import RecentTransactions from "@/components/RecentTransactions";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddTransactionDialog from "@/components/AddTransactionDialog";

const Transactions = () => {
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
          <h1 className="text-3xl font-bold tracking-tight">{t('transactions')}</h1>
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
        
        <RecentTransactions />
      </div>
      
      <AddTransactionDialog 
        isOpen={isAddTransactionOpen} 
        onClose={() => setIsAddTransactionOpen(false)}
        type={transactionType}
      />
    </Layout>
  );
};

export default Transactions;
