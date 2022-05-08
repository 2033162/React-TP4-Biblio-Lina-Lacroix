import PropTypes from 'prop-types'
import Button from './Button'


const HeaderUpdate = ({onUpdate, showUpdate}) => {

    return (
        <header className='header2'>
            <Button color={showUpdate ? 'red' : 'green'}
                    text={showUpdate ? 'Close' : 'Update'} onClick={onUpdate}/>
        </header>
    )
}

HeaderUpdate.defaultProps = {
    title: 'Trask Tracker',
}

HeaderUpdate.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HeaderUpdate