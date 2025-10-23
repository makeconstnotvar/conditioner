import {computed, observable} from 'mobx';

export class ConditionStore {
  @observable accessor isSwitched = false;
  @observable accessor isWindow = false;
  @observable accessor isElectric = false;
  @observable accessor isHeating = false;

  @computed get isEnabled() {
    return this.isSwitched && !this.isWindow && this.isElectric && !this.isHeating;
  }
}
