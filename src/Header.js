import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeartbeat,faClock } from '@fortawesome/free-solid-svg-icons'
import { ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({ val, text, color, icon, variant, now }) => {
  return (
    <div
      style={{ flexDirection: 'column', lineHeight: '1vw', flexWrap: 'wrap' }}
    >
      <div>
        <h1 style={{ fontSize: '3vw', fontFamily: 'Montserrat,sans-serif' }}>
          {val}
        </h1>
      </div>

      <div>
        <span
          style={{
            padding: '6px',
            border: '1px solid',
            borderRadius: '8px',
            marginRight: '4px',
            color: `white`,
            backgroundColor: `${color}`,
            cursor: 'pointer',
          }}
        >
          <FontAwesomeIcon icon={icon} />
        </span>
        <span> {text}</span>
      </div>
      <div style={{ marginTop: '1vw' }}>
        <ProgressBar
          variant={variant}
          now={parseInt(now)}
          style={{ height: '3px' }}
        />
      </div>
    </div>
  )
}

export default Header
