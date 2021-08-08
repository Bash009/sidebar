import React from 'react'

const list = ({ e, bgcolor }) => {
  return (
    <div
      style={{
        display: 'grid',

        border: '2px solid black',
        width: '30px',
        padding: '10px',
        margin: '5px',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: `${bgcolor}`,
      }}
      //   onClick={changeColour}
    >
      {e}
    </div>
  )
}

export default list
