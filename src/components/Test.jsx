import {memo, useEffect} from "react";

const Test = (props) => {

  useEffect(() => {
    console.log('test')
  }, []);

  return (
    <div>Тест</div>
  )
}
export {Test}