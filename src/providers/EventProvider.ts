import { EventEmitter } from 'fbemitter';
import { IAddListener, IEmit, IRemoveListener } from './EventProvider.interface';

class EventProvider {
  eventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  public addListener({ eventName, callback }: IAddListener) {
    this.eventEmitter.addListener(eventName, callback);
  }

  public emit({ eventName, payload }: IEmit) {
    this.eventEmitter.emit(eventName, payload);
  }

  public removeAllListeners({ eventName }: IRemoveListener) {
    this.eventEmitter.removeAllListeners(eventName);
  }
}

const eventProvider = new EventProvider();

Object.freeze(eventProvider);

export default eventProvider;
