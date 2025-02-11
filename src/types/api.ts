export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export enum ApiErrorType {
  Validation = 'VALIDATION_ERROR',
  Authentication = 'AUTH_ERROR',
  NotFound = 'NOT_FOUND',
  Server = 'SERVER_ERROR'
}

export class ApiError extends Error {
  constructor(
    public readonly type: ApiErrorType,
    public readonly details: Record<string, unknown>
  ) {
    super(`API Error: ${type}`);
    this.name = 'ApiError';
  }
}
