import './App.css'
import { Avatar, Badge } from '@material-ui/core'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import TuneIcon from '@material-ui/icons/Tune'
import Header from './Header'
import { Button } from 'react-bootstrap'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
// import Background from './Background'
import {
  faHeartbeat,
  faClock,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons'
import Header2 from './Header2'
import Footer from './Footer'
function App() {
  var intFrameHeight = window.innerHeight
  console.log(intFrameHeight)
  const a = ['6:25', '120', '1.84']
  const url1 = `https://i.pinimg.com/originals/c4/0f/c9/c40fc9928eee67fc705acc25d0be5bb3.jpg`
  const url2 = `https://i.pinimg.com/736x/8b/ca/0b/8bca0bad7f0f13778fe69638a2f5cd17.jpg`
  return (
    <div className='App'>
      <div className='sidebar'>
        <div className='column ' style={{ flex: '3' }}>
          <h1>//Body//</h1>
        </div>
        <div
          className='column'
          style={{
            backgroundColor: 'whitesmoke',
            flex: '1',
          }}
        >
          <div className='header1'>
            <div className='header_in' style={{ paddingRight: '2px' }}>
              <Avatar src='https://avatars.githubusercontent.com/u/44644366?v=4' />
            </div>
            <div className='header_in' style={{ paddingLeft: '0px' }}>
              <span
                style={{
                  color: 'black',
                  fontWeight: '20px',
                  lineHeight: '0.5px',
                }}
              >
                <p
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: '10px',
                  }}
                >
                  &nbsp;&nbsp;Floyd Miles
                </p>
                <p style={{ color: 'gray' }}>&nbsp;&nbsp;&nbsp;Free account</p>
              </span>
            </div>
            <div
              className='header_in'
              style={{
                width: '50%',
                marginTop: '10px',
                textAlign: 'right',
              }}
            >
              <span
                style={{
                  border: '1px solid',
                  borderRadius: '8px',
                  padding: '5px',
                  color: 'gray',
                  boxShadow: '10px',
                  cursor: 'pointer',
                }}
              >
                <Badge
                  badgeContent={2}
                  color='secondary'
                  style={{ padding: '2px' }}
                >
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </span>
              <span
                style={{
                  border: '1px solid',
                  borderRadius: '8px',
                  padding: '5px',
                  color: 'gray',
                  boxShadow: '10px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              >
                <Badge style={{ padding: '1px' }}>
                  <TuneIcon />
                </Badge>
              </span>
            </div>
          </div>
          <div className='header2'>
            <span style={{ textAlign: 'left', lineHeight: '1vw' }}>
              <h3 style={{ paddingLeft: '20px', fontSize: '2vw' }}>Health</h3>
            </span>
            <div
              style={{
                display: 'flex',
                padding: '20px',
                paddingTop: '0px',
                justifyContent: 'space-between',
              }}
            >
              <Header
                val={a[0]}
                text='Hours'
                color='#5BC7EB'
                icon={faClock}
                variant='info'
                now='70'
              />
              <div
                style={{
                  borderRight: '1px solid gray',
                  borderColor: 'gray',
                  borderRadius: '5px',
                  boxShadow: '10px',
                }}
              ></div>
              <Header
                val={a[1]}
                text='Bpm'
                color='#ED725C'
                icon={faHeartbeat}
                variant='danger'
                now='100'
              />
              <div
                style={{
                  borderRight: '1px solid gray',
                  borderColor: 'gray',
                  borderRadius: '5px',
                  boxShadow: '10px',
                }}
              ></div>
              <Header
                val={a[2]}
                text='Kcal'
                color='#6EF03E'
                icon={faAppleAlt}
                variant='success'
                now='45'
              />
            </div>
          </div>

          <div className='header3'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',

                padding: '2px 2px',

                borderRadius: '10px',
                boxShadow: '0px 5px #fcde3f',

                backgroundImage: `url(https://img.freepik.com/free-photo/yellow-watercolor-texture-background_1083-163.jpg?size=626&ext=jpg)`,
              }}
            >
              <img
                src='https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png'
                alt='Teachers'
                style={{
                  objectFit: 'contain',
                  width: '30%',
                  marginLeft: '5px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: '10px',
                  marginLeft: '20%',
                }}
              >
                <p
                  style={{
                    fontSize: '1vw',
                    textAlign: 'center',
                  }}
                >
                  Sign up for a personal trainer to imporve your results
                </p>
                <Button
                  variant='warning'
                  style={{
                    width: '60%',
                    fontSize: '1vw',
                    textAlign: 'center',
                    marginLeft: '30px',
                    color: 'white',
                  }}
                  size='sm'
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div className='header4'>
            <span style={{ textAlign: 'left', lineHeight: '1vw' }}>
              <h3 style={{ paddingLeft: '20px', fontSize: '1.5vw' }}>
                Today's training
              </h3>
            </span>

            <Header2 color={url2} id='0' />
            <Header2 color={url1} id='1' />
            <MoreHorizIcon />
          </div>
          <h3
            style={{
              paddingLeft: '20px',
              fontSize: '1.5vw',
              textAlign: 'left',
            }}
          >
            Your trainers
          </h3>
          <div
            className='header5'
            style={{
              backgroundColor: 'white',

              borderRadius: '25px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            <Footer id='0' />
            <Footer id='1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
