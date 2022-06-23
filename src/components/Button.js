import PropTypes from 'prop-types'
const Button = (props) => {
  return (
       <button onClick={props.onClick}
        style={{backgroundColor: props.color}} className='btn'>Adding a button </button>
  )
}

Button.defaultProps = {
    color : 'steelblue',
    title : 'Add',
}

Button.propTypes = {
    title : PropTypes.string,
    onClick: PropTypes.func,

}

export default Button
