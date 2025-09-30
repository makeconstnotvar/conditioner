
const Status = props => {
  return <span className="status">{props.isOn ? 'on' : 'off'}</span>
}

export { Status }