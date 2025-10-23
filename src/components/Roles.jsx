import {useStores} from "../hooks/useStores.js";
import {observer} from "mobx-react-lite";

const Roles = observer(props => {
  const {$user} = useStores();
  let isVisible = false;

  for (let key in props){
    if(key === $user.role)
      isVisible = true;
  }

  if (isVisible)
    return props.children

  return null
})

export {Roles}