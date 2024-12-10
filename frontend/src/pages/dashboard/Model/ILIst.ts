export interface IList {
  _id: string;
  name: string;
  location: string;
  certificates?: string[] | null;
  creditRating: string;
  numberOfEmployees: number;
  revenue: number;
  exportTransactionTurnover: number;
  exportingToCountries?: string[] | null;
  transactionsHistory?: string[] | null;
}
