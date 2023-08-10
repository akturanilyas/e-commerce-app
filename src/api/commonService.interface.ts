export type Post<T> = {
  id?: number | string;
  body: T | Record<string, unknown>;
  mutateParams?: Record<string, unknown>;
};

export type Put<T> = {
  id?: number | string;
  body: T | Record<string, unknown>;
  mutateParams?: Record<string, unknown>;
};

export type Get<T = undefined> = {
  id?: number | string;
  mutateParams?: Record<string, unknown>;
  query?: T | Record<string, unknown>;
};

export type Delete<T = undefined> = {
  id: number | string;
  mutateParams?: Record<string, unknown>;
};
