import {Menu} from "./Menu.jsx";
import {ModalPlaceholder} from './ModalPlaceholder.jsx'
const Layout = props => {
  return (
    <div className='flex h-100'>
      <Menu/>
      <div className='p-20'>{props.children}</div>
      <ModalPlaceholder/>
    </div>
  )
}
export {Layout}