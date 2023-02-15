
import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='d-flex'>
      <Spinner animation="border" role="status" style={{ color: "pink" }}>
        <span className="visually-hidden img">Cargando...</span>
      </Spinner>
      <h1 className='ms-3'>Generating new image</h1>
    </div>
  );
}

export default Loader