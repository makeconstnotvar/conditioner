import {Link} from "@reach/router";

const Menu  = props =>{
  return(
    <div className='flex flex-col  gap-20 p-20 sidebar'>
      <Link to='/'>Главная</Link>
      <Link to='/conditioner'>Кондиционер</Link>
      <Link to='/persons'>Персонажи</Link>
    </div>
  )
}
export {Menu}