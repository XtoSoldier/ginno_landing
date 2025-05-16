import Turnstile from 'react-turnstile'
import PropTypes from 'prop-types'
const SITE_KEY = import.meta.env.VITE_SITE_KEY

const TurnstileComponent = ({ setToken }) => {
  return (
    <Turnstile
      style={{ margin: '0 auto' }}
      sitekey={SITE_KEY}
      refreshExpired={'auto'}
      onVerify={token => {
        setToken(token)
      }}
    />
  )
}
TurnstileComponent.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default TurnstileComponent
