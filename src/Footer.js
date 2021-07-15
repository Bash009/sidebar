import React from 'react'
import './App.css'
import { Avatar, Badge } from '@material-ui/core'
import MessageRoundedIcon from '@material-ui/icons/MessageRounded'
import { tt } from './Trainers'

const Footer = ({ id }) => {
  return (
    <div
      style={{
        display: 'flex',
        lineHeight: '5px',
      }}
    >
      <div style={{ margin: '5px 5px', flex: '0' }}>
        <Badge
          variant='dot'
          color='secondary'
          style={{
            padding: '2px',
            marginRight: '1px',
            zIndex: '1',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Avatar
            src={tt[id].img}
            style={{
              position: 'relative',
              zIndex: '-1',
              right: '-5px',
              bottom: '-6px',
            }}
          />
        </Badge>
      </div>
      <div
        style={{
          margin: '20px 5px',

          flex: '2',
          textAlign: 'left',
        }}
      >
        <p style={{ fontWeight: 'bold' }}>{tt[id].name}</p>
        <p>{tt[id].desg}</p>
      </div>
      <div style={{ color: 'gray', margin: '20px 5px', flex: '0.5' }}>
        <MessageRoundedIcon />
      </div>
    </div>
  )
}

export default Footer
