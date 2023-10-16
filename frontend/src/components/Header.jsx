import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
    const { userInfo } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <header>
            <Navbar  variant='dark' expand='lg' collapseOnSelect style={{background:'#000000'}}>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><h2>MERN</h2></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
  {userInfo ? (
    <>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <img
              src={userInfo.imageUrl} 
              alt={userInfo.name}
              style={{
                width: '40px', 
                height: '40px',
                borderRadius: '50%', 
              }}
            />
          </div>
        </div>
      <NavDropdown title={userInfo.name} id='username'>
          <div>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
          </div>

        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
      </NavDropdown>
    </>
  ) : (
    <>
      <LinkContainer to='/login'>
        <Nav.Link>
          <FaSignInAlt /> Sign In
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to='register'>
        <Nav.Link>
          <FaSignOutAlt /> Sign Up
        </Nav.Link>
      </LinkContainer>
    </>
  )}
</Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    );
};

export default Header;