import './style.css'

const FooterInfo = ({titulo,item1,item2,item3,item4}) => {
  return (
    <div className='footer-info'>
    <h3>{titulo}</h3>
    <ul>
      <li><a href="">{item1}</a></li>
      <li><a href="">{item2}</a></li>
      <li><a href="">{item3}</a></li>
      <li><a href="">{item4}</a></li>
    </ul>
  </div>
  )
}

export default FooterInfo