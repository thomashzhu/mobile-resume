export type Content = {
  id: number;
  title: string;
  organization: string;
  fromDate: string;
  toDate: string;
  location: string;
  summary?: string;
  descriptions: string[];
};
