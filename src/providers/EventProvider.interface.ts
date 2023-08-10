export interface IAddListener {
  eventName: string;
  callback: (payload?: Record<string, unknown>) => void;
}

export interface IEmit {
  eventName: string;
  payload?: Record<string, unknown>;
}

export interface IRemoveListener {
  eventName: string;
}
