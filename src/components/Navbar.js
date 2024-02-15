import logo from '../images/logo.svg';
import navlogo from '../images/logo512.png'
import logosmall from '../images/React-small.png'
function Navbar(props)
{
  console.log(props)
  return (
    <nav>
      <img src= {props.img} className='nav--icon'/>
      <h3 className='nav--logo-text'>{props.logotext}</h3>
      <h4 className='nav--project-title'>{props.title}</h4>
    </nav>
  )
    
}
export default Navbar