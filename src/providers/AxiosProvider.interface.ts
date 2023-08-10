import { ApiErrorUseCase } from '@/enums/error.enum';

export type ApiError = {
  id?: string;
  errorLabel: string;
  errorTitle?: string;
  useCase: ApiErrorUseCase;
  statusCode: number;
};
