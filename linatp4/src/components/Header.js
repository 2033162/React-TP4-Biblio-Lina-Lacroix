import PropTypes from 'prop-types'
import Button from './Button'
import {Link} from "react-router-dom";


const Header = ({title}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Link to='/clients'><Button color={'blue'}
                          text={'Clients'}/>
            </Link>
            <Link to='/documents'><Button color={'green'}
                                        text={'Documents'}/>
            </Link>
        </header>
    )
}

Header.defaultProps = {
    title: 'Trask Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header