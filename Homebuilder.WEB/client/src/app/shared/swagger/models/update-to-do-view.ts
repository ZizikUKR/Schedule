/* tslint:disable */
export interface UpdateToDoView {
  id?: number;
  toDo?: string;
  description?: string;
  information?: string;
  isComppleted?: boolean;
  state?: 'None' | 'HighPrice' | 'Medium' | 'Final';
}
