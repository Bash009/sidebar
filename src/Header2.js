import React from 'react'
import { f } from './store'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const Header2 = ({ color, id }) => {
  console.log(f)
  return (
    <div className='header3'>
      <div
        style={{
          padding: '2px 2px',

          borderRadius: '10px',
          boxShadow: '0px 5px #ADD8E6',
          backgroundImage: `url(${color})`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            color: `${f[id].c3}`,
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h4>{f[id].head1}</h4>
            <p>Sport Club</p>
            <span
              style={{
                backgroundColor: 'whitesmoke',
                borderRadius: '5px',
                color: 'black',
                textAlign: 'center',
                marginBottom: '2px',
              }}
            >
              {f[id].span_text}
            </span>
          </div>
          <div
            style={{
              lineHeight: '4px',
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            <h4>{f[id].t1}</h4>
            <p>min</p>
            <span>{f[id].c1}</span>
          </div>
          <div
            style={{
              lineHeight: '4px',
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            <h4>{f[id].t2}</h4>
            <p>min</p>
            <span>{f[id].c2}</span>
          </div>
          <div>
            <MoreVertIcon style={{ height: '100%', color: 'white' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header2
