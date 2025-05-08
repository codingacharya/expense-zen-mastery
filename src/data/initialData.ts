
export type ExpenseCategory = 
  | 'housing' 
  | 'food' 
  | 'transportation' 
  | 'utilities' 
  | 'healthcare' 
  | 'entertainment' 
  | 'personal' 
  | 'education' 
  | 'savings' 
  | 'other';

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  category: ExpenseCategory;
  date: string;
  isExpense: boolean;
}

export interface Budget {
  category: ExpenseCategory;
  limit: number;
  spent: number;
}

export const CATEGORY_LABELS: Record<ExpenseCategory, string> = {
  housing: 'Housing',
  food: 'Food & Dining',
  transportation: 'Transportation',
  utilities: 'Utilities',
  healthcare: 'Healthcare',
  entertainment: 'Entertainment',
  personal: 'Personal',
  education: 'Education',
  savings: 'Savings',
  other: 'Other'
};

export const CATEGORY_ICONS: Record<ExpenseCategory, string> = {
  housing: '🏠',
  food: '🍔',
  transportation: '🚗',
  utilities: '💡',
  healthcare: '🏥',
  entertainment: '🎬',
  personal: '👤',
  education: '📚',
  savings: '💰',
  other: '📦'
};

export const initialTransactions: Transaction[] = [
  {
    id: '1',
    amount: 1200,
    description: 'Monthly Rent',
    category: 'housing',
    date: '2025-05-01',
    isExpense: true
  },
  {
    id: '2',
    amount: 85.75,
    description: 'Grocery Shopping',
    category: 'food',
    date: '2025-05-03',
    isExpense: true
  },
  {
    id: '3',
    amount: 45.50,
    description: 'Gas Station',
    category: 'transportation',
    date: '2025-05-04',
    isExpense: true
  },
  {
    id: '4',
    amount: 120.30,
    description: 'Electricity Bill',
    category: 'utilities',
    date: '2025-05-05',
    isExpense: true
  },
  {
    id: '5',
    amount: 60.00,
    description: 'Doctor Visit',
    category: 'healthcare',
    date: '2025-05-06',
    isExpense: true
  },
  {
    id: '6',
    amount: 25.99,
    description: 'Movie Night',
    category: 'entertainment',
    date: '2025-05-07',
    isExpense: true
  },
  {
    id: '7',
    amount: 34.50,
    description: 'Haircut',
    category: 'personal',
    date: '2025-05-07',
    isExpense: true
  },
  {
    id: '8',
    amount: 3000,
    description: 'Monthly Salary',
    category: 'other',
    date: '2025-05-01',
    isExpense: false
  },
  {
    id: '9',
    amount: 500,
    description: 'Monthly Transfer to Savings',
    category: 'savings',
    date: '2025-05-02',
    isExpense: true
  },
  {
    id: '10',
    amount: 199.99,
    description: 'Online Course',
    category: 'education',
    date: '2025-05-08',
    isExpense: true
  },
];

export const initialBudgets: Budget[] = [
  { category: 'housing', limit: 1500, spent: 1200 },
  { category: 'food', limit: 500, spent: 85.75 },
  { category: 'transportation', limit: 200, spent: 45.5 },
  { category: 'utilities', limit: 300, spent: 120.3 },
  { category: 'healthcare', limit: 150, spent: 60 },
  { category: 'entertainment', limit: 200, spent: 25.99 },
  { category: 'personal', limit: 150, spent: 34.5 },
  { category: 'education', limit: 300, spent: 199.99 },
  { category: 'savings', limit: 800, spent: 500 },
  { category: 'other', limit: 200, spent: 0 },
];

export function getCategoryColor(category: ExpenseCategory): string {
  return {
    housing: '#4361ee',
    food: '#3a86ff',
    transportation: '#38b000',
    utilities: '#ff9e00',
    healthcare: '#ef476f',
    entertainment: '#8338ec',
    personal: '#ff006e',
    education: '#fb5607',
    savings: '#118ab2',
    other: '#6c757d'
  }[category];
}
