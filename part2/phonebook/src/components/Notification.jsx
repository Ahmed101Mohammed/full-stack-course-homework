const Notification = ({message})=>
{
  if(!message.content)
  {
    return null;
  }

  return (<div className={message.styleClass}>{message.content}</div>)
}

export default Notification