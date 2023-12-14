import { Container, Card} from 'react-bootstrap';
const AdminHomeScreen = () => {
    return (
      <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h2 className='text-center mb-4'>Welcome Admin 🎉</h2>
          <img
            src={'https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966'} 
            alt='image'
            style={{
              width: '400px',
              height: '230px',
            }}
            className=""
          />
       
        </Card>
      </Container>
    </div>
    );
  };
  
  export default AdminHomeScreen;