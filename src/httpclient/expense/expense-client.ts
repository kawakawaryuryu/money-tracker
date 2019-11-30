import axios from 'axios';
import { ExpensesResponse } from '@/types/http/expense/expense-response';

export async function getExpenses(): Promise<ExpensesResponse> {
  const response = await axios.get<ExpensesResponse>('/api/v1/expenses');
  return response.data;
}
