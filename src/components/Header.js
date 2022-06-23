import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e)
    }
  return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick}/>

        </header>
  )
}

Header.defaultProps = {
    title : "This is a default props for header."
}

Header.propTypes = {
    title : PropTypes.string,
}

export default Header
