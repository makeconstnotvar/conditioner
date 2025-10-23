import {Fragment} from "react";
import {useStores} from "../hooks/useStores.js";
import {observer} from "mobx-react-lite";

const Dialog = observer(props => {
  const {$modal} = useStores();
  let Component = $modal.component;

  const hide = () => {
    $modal.isVisible = false;
  }

  return (
    <Fragment>
      <div className={`modal-backdrop ${$modal.isVisible ? 'show' : 'hide'}`} onClick={hide}/>
      <div className={`modal ${$modal.isVisible ? 'show' : ''}`} tabIndex="-1" onClick={hide}>
        <div className="modal-dialog">
          <Component {...$modal.props}/>
        </div>
      </div>


    </Fragment>
  )
})
export {Dialog}