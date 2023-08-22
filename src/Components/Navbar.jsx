import '../index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='nav-icons'>
                <button><Link to = {'/'}>Home </Link></button>
                <button><Link to = {'/create'}>Add New Blog</Link></button>
            </nav>
        </>
    )
}

export default Navbar
