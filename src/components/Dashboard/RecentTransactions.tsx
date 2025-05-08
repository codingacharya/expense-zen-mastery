
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CATEGORY_ICONS, 
  CATEGORY_LABELS,
  ExpenseCategory, 
  Transaction 
} from "@/data/initialData";
import { format } from "date-fns";

interface RecentTransactionsProps {
  transactions: Transaction[];
  limit?: number;
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({ 
  transactions,
  limit = 5  
}) => {
  const recentTransactions = transactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <a href="#" className="text-sm text-primary hover:underline">
          View all
        </a>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => {
            const category = transaction.category as ExpenseCategory;
            const formattedDate = format(new Date(transaction.date), 'MMM dd');
            
            return (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {CATEGORY_ICONS[category]}
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {transaction.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {CATEGORY_LABELS[category]} · {formattedDate}
                    </p>
                  </div>
                </div>
                <div className={`text-sm font-medium ${transaction.isExpense ? 'text-red-500' : 'text-green-500'}`}>
                  {transaction.isExpense ? '-' : '+'} ${transaction.amount.toFixed(2)}
                </div>
              </div>
            );
          })}
          
          {recentTransactions.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No recent transactions
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
