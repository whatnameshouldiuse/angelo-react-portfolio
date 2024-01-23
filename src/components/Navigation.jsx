import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const currentPage = useLocation().pathname;

    return (
        <nav>
            <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                About
            </Link>
            <Link
                to="/portfolio"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </Link>
            <Link
                to="/contact"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </Link>
            <Link
                to="/resume"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </Link>
        </nav>
    );
}

export default Navigation;