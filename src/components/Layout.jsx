import {Menu} from "./Menu.jsx";

const Layout = props => {
  return (
    <div className='flex h-100'>
      <Menu/>
      <div className='p-20'>{props.children}</div>
    </div>
  )
}
export {Layout}