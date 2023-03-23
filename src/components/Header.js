import Logo from './Logo';
import Nav from './Nav';
import Icons from './Icons';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <div className='header__logo'>
                    <Logo />
                </div>
                <div className='header__nav'>
                    <Nav />
                </div>
                <div className='header__icons'>
                    <Icons />
                </div>
            </div>
        </header>
    )
}

export default Header;