import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import {  Container, Nav } from 'react-bootstrap';
import {GiNotebook} from 'react-icons/gi';
import './css.css';




const Navbar = () => {
  const { isAuth }= useSelector(state => state.auth)

  
    return (
      <header>
      <nav className='navbar navbar-brand bg-primary data-bs-theme-dark'>
        <Container>
          <div>
          <h4 className='text-light'>Note App</h4>
          <Nav.Link href='/' className='text-light'>
            <main>
              <GiNotebook size='2em' color='white'/>
            </main>
          </Nav.Link>
          </div>
          {isAuth ? (
            <div>
              <Nav.Link href='dashboard' className='navbar-light mx-3 text-light'>
                <span>Dashboard</span>
              </Nav.Link>
            </div>
          ) : (
            <div>
              <Nav.Link href='login' className='text-light'>
                Login
              </Nav.Link>

              {/* <Nav.Link href='register' className=' text-light'>
               Register
              </Nav.Link> */}
            </div>
          )}
      </Container>
      </nav>
      </header>
     
    )
  }
  
  export default Navbar