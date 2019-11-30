export interface ExpensesResponse {
  expenses: ExpenseResponse[];
}

interface ExpenseResponse {
  id: string;
  amount: number;
  date: string;
  content: string;
}
