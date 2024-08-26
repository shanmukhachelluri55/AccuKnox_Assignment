import Spinner from 'react-bootstrap/Spinner';
import '../styles/Loader.css'

function Loader(props) {
  return (
    <>
      {
        props.isLoading &&
        <div className='Loader'>
            <Spinner
                as="span"
                animation="grow"
                size="md"
                role="status"
                aria-hidden="true"
                className='LoaderLogo'
            />
            <span className='LoaderText'>
                Loading...
            </span>
        </div>
      }
    </>
  );
}

export default Loader;