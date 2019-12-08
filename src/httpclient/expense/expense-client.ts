import axios from 'axios';
import { ExpensesResponse } from '@/types/http/expense/expense-response';

export async function getExpenses(
  beginDate?: string,
  endDate?: string
): Promise<ExpensesResponse> {
  const response = await axios.get<ExpensesResponse>('/api/v1/expenses', {
    params: {
      beginDate,
      endDate
    }
  });
  return response.data;
}
