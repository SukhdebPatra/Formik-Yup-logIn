import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Card } from 'react-bootstrap';
const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};
const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDixHM8t4SPWYtJS_DmTd_IFoDCbRyJemU',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }
  return (
    <Card style={{width:'auto',height:'80%'}}>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={16}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  </Card>
  )
}

export default Map
