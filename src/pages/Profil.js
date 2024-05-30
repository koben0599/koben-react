import { Button } from 'bootstrap';
import React from 'react';

const Profil = () => {
  return (
    <div className="container mt-5" >
        <img src="img/image1.jpg"  class="rounded mx-auto d-block" alt="..." style={{marginTop: '100px'}}/>
        <div className="d-flex justify-content-between"> 
        <div className="d-flex flex-column align-items-center text-center text-white bg-dark m-3" style={{  borderRadius: '10px',  boxShadow: '5px 5px 5px 5px #888888' ,marginTop: '20px' }}>
  <h1 className="display-4" style={{fontWeight: 'bold'}} >PROFIL</h1>
  <p className="lead" style={{width: '12rem'}}>Etdiant en deuxième année de 
developpement web ,je suis en quête 
d’emploie dans le domaine numérique et 
même dans d’autre domaine si possible .</p>
</div>
<div className="d-flex flex-column align-items-center text-center m-6 " style={{ marginTop: '10px', borderRadius: '10px', boxShadow: '5px 5px 5px 5px #888888'}}>
  <h1 className="display-5 " style={{fontWeight: 'bold', marginTop: '20px'}} >KOUAME ANANI KOBENAN</h1>
  <h1 className="display-4" style={{fontWeight: 'bold'}}>AGE : 24 ANS</h1>
  <h3 className="lead" style={{fontWeight: 'bold'}}>DEVELOPPEUR WEB</h3>
</div>

<div className="d-flex flex-column align-items-center text-center text-white bg-dark m-4"  style={{  borderRadius: '10px', boxShadow: '5px 5px 5px 5px #888888', marginTop: '20px'}}>
<h1 className="display-19" style={{fontWeight: 'bold'}}>CONTACT :</h1>
  <h6 className="lead">+225 0594 695 308</h6>
<h6 className="lead">+225 0758 321 816</h6>
<h1 className="display-19" style={{fontWeight: 'bold'}}>Gmail :</h1>
  <p className="lead">Kobenanemaneul97@gmail.com</p>
  <h1 className="display-19" style={{fontWeight: 'bold'}}>ADRESSE :</h1>
  <p className="lead">Abidjan . CI</p>
</div>


</div>
      

    
    </div>
  );
};

export default Profil;
