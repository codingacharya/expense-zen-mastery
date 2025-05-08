
import React, { createContext, useState, useContext } from 'react';
import { Budget, Transaction, initialBudgets, initialTransactions } from '@/data/initialData';
import { useToast } from "@/components/ui/use-toast";

interface ExpenseContextType {
  transactions: Transaction[];
  budgets: Budget[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  updateBudget: (category: string, limit: number) => void;
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [budgets, setBudgets] = useState<Budget[]>(initialBudgets);
  const { toast } = useToast();

  // Calculate totals
  const totalIncome = transactions
    .filter(t => !t.isExpense)
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.isExpense)
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  
  const totalBalance = totalIncome - totalExpenses;

  // Add a new transaction
  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    
    // If it's an expense, update the corresponding budget
    if (transaction.isExpense) {
      updateBudgetSpending(transaction.category, transaction.amount);
      toast({
        title: "Transaction added",
        description: `$${transaction.amount.toFixed(2)} added to ${transaction.category}`,
      });
    } else {
      toast({
        title: "Income added",
        description: `$${transaction.amount.toFixed(2)} added to your balance`,
      });
    }
  };

  // Update budget spending
  const updateBudgetSpending = (category: string, amount: number) => {
    setBudgets(prev => 
      prev.map(budget => 
        budget.category === category 
          ? { ...budget, spent: budget.spent + amount } 
          : budget
      )
    );
  };

  // Update budget limit
  const updateBudget = (category: string, limit: number) => {
    setBudgets(prev => 
      prev.map(budget => 
        budget.category === category ? { ...budget, limit } : budget
      )
    );
    
    toast({
      title: "Budget updated",
      description: `${category} budget updated to $${limit.toFixed(2)}`,
    });
  };

  return (
    <ExpenseContext.Provider value={{ 
      transactions,
      budgets,
      addTransaction,
      updateBudget,
      totalBalance,
      totalIncome,
      totalExpenses
    }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (context === undefined) {
    throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};
