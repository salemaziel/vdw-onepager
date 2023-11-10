import React from 'react'
import PropTypes from 'prop-types'


const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">{new Date().getFullYear()} © Via Del Web
        {" "}
        {/*<a href="/privacy">Privacy</a>*/}</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
