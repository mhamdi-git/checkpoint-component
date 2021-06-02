
import './App.css';
import Adresse from './component/profile/Adresse'
import FullName from './component/profile/FullName';
import ProfilePhotos from './component/profile/ProfilePhotos';
function App() {
  return (
    <div className="App">
      <legend><h1>Vos coordonnées :</h1></legend>
      <ProfilePhotos />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
