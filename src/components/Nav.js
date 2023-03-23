import { NavLink } from 'react-router-dom';

const Nav = () => {
    const links = ['Home', 'Products', 'Users', 'Cart']
    const activeClassName = 'nav__link--active';

    return (
        <nav className="nav">
            <ul className="nav__list">
                {links.map((link, index) => (
                    <li key={index} className="nav__item">
                        <NavLink to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                            className={({ isActive }) =>
                                isActive ? `nav__link ${activeClassName}` : 'nav__link'
                            }
                        >{link}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;