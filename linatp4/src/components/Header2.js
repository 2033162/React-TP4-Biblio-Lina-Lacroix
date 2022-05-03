import PropTypes from 'prop-types'
import Button from './Button'


const Header2 = ({title, onAdd, showAdd}) => {

    return (
        <header className='header2'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header2.defaultProps = {
    title: 'Trask Tracker',
}

Header2.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header2