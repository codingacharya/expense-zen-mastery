
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Budget, ExpenseCategory, CATEGORY_ICONS, CATEGORY_LABELS } from "@/data/initialData";

interface BudgetGoalsProps {
  budgets: Budget[];
}

export const BudgetGoals: React.FC<BudgetGoalsProps> = ({ budgets }) => {
  // Sort budgets to show those closest to limit first
  const sortedBudgets = [...budgets]
    .filter(budget => budget.limit > 0)
    .sort((a, b) => (b.spent / b.limit) - (a.spent / a.limit));

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Budget Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedBudgets.map((budget) => {
            const percentage = Math.min(Math.round((budget.spent / budget.limit) * 100), 100);
            const category = budget.category as ExpenseCategory;
            
            let statusColor = "bg-green-500";
            if (percentage > 90) statusColor = "bg-red-500";
            else if (percentage > 75) statusColor = "bg-yellow-500";
            
            return (
              <div key={budget.category} className="space-y-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>{CATEGORY_ICONS[category]}</span>
                    <span className="text-sm font-medium">{CATEGORY_LABELS[category]}</span>
                  </div>
                  <div className="text-sm font-medium">
                    ${budget.spent.toFixed(0)} / ${budget.limit.toFixed(0)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={percentage} className="h-2" />
                  <span className="text-xs text-muted-foreground w-9">{percentage}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
