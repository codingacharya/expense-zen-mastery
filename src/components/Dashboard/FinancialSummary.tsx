
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, DollarSign } from "lucide-react";

interface FinancialSummaryProps {
  balance: number;
  income: number;
  expenses: number;
}

export const FinancialSummary: React.FC<FinancialSummaryProps> = ({ 
  balance, 
  income, 
  expenses 
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="stat-card card-hover">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${balance.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Available funds
          </p>
        </CardContent>
      </Card>
      
      <Card className="stat-card card-hover">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Income</CardTitle>
          <ArrowUpIcon className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">${income.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Total income this month
          </p>
        </CardContent>
      </Card>
      
      <Card className="stat-card card-hover">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Expenses</CardTitle>
          <ArrowDownIcon className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">${expenses.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Total expenses this month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
