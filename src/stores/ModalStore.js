import {action, observable} from "mobx";

export class ModalStore {
  @observable accessor isVisible = false;
  component = () => null;
  props = null;

  @action show(comp, props) {
    this.isVisible = true
    this.component = comp;
    this.props = props;
  }

  hide() {
    this.isVisible = false
  }
}
