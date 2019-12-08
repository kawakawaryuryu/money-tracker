export interface ResultsResponse {
  results: ResultResponse[];
}

export interface ResultResponse {
  id: string;
  date: string;
  totalExpense: number;
  expenseGoal: number;
  balance: number;
}
