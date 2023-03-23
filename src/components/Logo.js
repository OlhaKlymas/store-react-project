import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Image from './Image';

const Logo = () => {
    return (
        <div className='logo'>
            <Link to='/'>
                <Image 
                    src={logo}
                    alt='logo'
                    classes='logo__img'
                />
            </Link>
        </div>
    )
}

export default Logo;