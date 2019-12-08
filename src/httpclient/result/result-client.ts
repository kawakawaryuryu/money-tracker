import axios from 'axios';
import { ResultsResponse } from '@/types/http/result/result-response';

export async function getResults(month: string): Promise<ResultsResponse> {
  const response = await axios.get<ResultsResponse>('/api/v1/results', {
    params: {
      month
    }
  });
  return response.data;
}
