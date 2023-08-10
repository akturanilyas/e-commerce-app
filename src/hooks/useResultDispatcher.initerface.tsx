import { ResultType } from '@/enums/common.enum';

export type ResultItem = {
  type: ResultType;
  title?: string;
  message: string;
};
