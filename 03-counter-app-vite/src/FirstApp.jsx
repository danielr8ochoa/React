import PropTypes from 'prop-types';

export const FirstApp = ({ 
  title,
  subTitle 
}) => {

  return (
    <>
    <h1>{ title }</h1>
    <h4>{subTitle}</h4>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtititle'
}