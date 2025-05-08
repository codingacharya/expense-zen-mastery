
import DashboardLayout from "@/layouts/DashboardLayout";
import { ExpenseProvider, useExpense } from "@/context/ExpenseContext";
import { FinancialSummary } from "@/components/Dashboard/FinancialSummary";
import { ExpenseChart } from "@/components/Dashboard/ExpenseChart";
import { BudgetGoals } from "@/components/Dashboard/BudgetGoals";
import { RecentTransactions } from "@/components/Dashboard/RecentTransactions";
import { ExpenseForm } from "@/components/ExpenseForm";

const Dashboard = () => {
  const { transactions, budgets, totalBalance, totalIncome, totalExpenses } = useExpense();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Track your finances and keep an eye on your spending.
        </p>
      </div>

      <FinancialSummary 
        balance={totalBalance} 
        income={totalIncome} 
        expenses={totalExpenses}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ExpenseChart budgets={budgets} />
            <BudgetGoals budgets={budgets} />
          </div>
          <RecentTransactions transactions={transactions} />
        </div>
        <div>
          <ExpenseForm />
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <ExpenseProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ExpenseProvider>
  );
};

export default Index;
