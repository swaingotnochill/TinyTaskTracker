import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {

  return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'}onClick={onAdd} text={showAdd ? 'Close' : 'Add Task'}/>

        </header>
  )
}

Header.defaultProps = {
    title : "Tiny Task Tracker"
}

Header.propTypes = {
    title : PropTypes.string,
}

export default Header
