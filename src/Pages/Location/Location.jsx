import Map from '../../components/Map';
import './Location.css'

const Location = () => {
  return (
    <>
      <div className="container mt-4 ">
        <div className="row ">
          <div className="col">
            <h3 className="headertag">What is your location ?</h3>
            <p className='paraghraph mt-2 mb-4'>We need your location to show available <br /> outlets and products</p>
          </div>
          {/* <div className="col"> */}
            <Map/>
          {/* </div> */}
          <div className="col d-flex justify-content-center mt-4">
            <button className='accessbtn'>Allow location access</button>
          </div>
        </div>
        <div className="col col d-flex justify-content-center mt-3">
          <p className='ptag'><b>Enter location manually</b> </p>
        </div>
      </div>
    </>
  );
};

export default Location;
