type ServiceRespErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';
type ServiceRespSuccesType = 'SUCCESSFUL' | 'DELETED';

export type ServiceRespError = {
  status: ServiceRespErrorType,
  message: string
};

export type ServiceRespSucess<Type> = {
  status: ServiceRespSuccesType,
  message: Type,
};

export type ServiceResponse<Type> = ServiceRespError | ServiceRespSucess<Type>;