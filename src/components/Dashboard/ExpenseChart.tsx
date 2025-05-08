
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ExpenseCategory, Budget, CATEGORY_LABELS, getCategoryColor } from "@/data/initialData";

interface ExpenseChartProps {
  budgets: Budget[];
}

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ budgets }) => {
  const data = budgets.map(budget => ({
    name: CATEGORY_LABELS[budget.category as ExpenseCategory],
    value: budget.spent,
    color: getCategoryColor(budget.category as ExpenseCategory)
  })).filter(item => item.value > 0);

  // Get total expenses
  const totalExpenses = data.reduce((sum, item) => sum + item.value, 0);

  // Calculate percentage for each category
  const dataWithPercentage = data.map(item => ({
    ...item,
    percentage: ((item.value / totalExpenses) * 100).toFixed(1)
  }));

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataWithPercentage}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
                labelLine={false}
              >
                {dataWithPercentage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`$${value.toFixed(2)}`, "Amount"]}
                labelFormatter={(name) => `${name}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {dataWithPercentage.map((entry, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 mr-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <div className="flex justify-between w-full">
                <span className="text-xs">{entry.name}</span>
                <span className="text-xs font-medium ml-1">{entry.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
