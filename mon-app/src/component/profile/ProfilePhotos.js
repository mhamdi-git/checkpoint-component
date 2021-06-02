import React from 'react'
import photoProfil from './photoProfil.jpg'

function ProfilePhotos() {
 return (
  <div>
   <label for="image"><h2>Votre photo de profil:</h2></label>
   <img src={photoProfil} className="image-profil" alt="img" />
  </div>
 )
}

export default ProfilePhotos
