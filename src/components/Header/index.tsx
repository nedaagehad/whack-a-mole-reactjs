import Score from '../Score'
import "./utils/styles.css"
import {ReactComponent as Logo} from "../../assets/images/whack-a-mole.svg"
import Timer from '../Timer'

const Header = () => {
  return (
    <div className='header'>
        <Score />
        <Logo />
        <Timer />
    </div>
  )
}

export default Header