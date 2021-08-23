import React, { Component, useState } from 'react';
import './App.css'

function App() {

    const [ result, setResult ] = useState([]);
    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ country, setCountry ] = useState("");

    function addPerson(e) {
        e.preventDefault();
        
        const id = Math.floor(Math.random() * 9999)
        const newPersonObject = { id, name, address, city, country };
        setResult([newPersonObject, ...result])
    }

    return (
        <div className="App">
            <h1>Where is this person located?</h1>

            <form className="loginform" onSubmit={addPerson}>
                <input 
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    name="name"
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Enter address"
                    value={address}
                    name="address"
                    onChange={e => setAddress(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    name="city"
                    onChange={e => setCity(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Enter country"
                    value={country}
                    name="country"
                    onChange={e => setCountry(e.target.value)}
                />
                <button 
                    type="submit" 
                    disabled={
                        name.length === 0 || 
                        address.length === 0 || 
                        city.length === 0 || 
                        country.length === 0 
                    }
                >
                        Look it up
                </button>
            </form>
            {result.map(res => {
                return (
                    <div className="card" >
                        <div key={res.id}>
                            <p>{res.name}</p>
                            <p>{res.address}</p>
                            <p>{res.city}</p>
                            <p>{res.country}</p>
                        </div>
                        <iframe
                            width="200"
                            height="150"
                            style={{border: 0}}
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps/embed/v1/place?key=API-KEY&q=${res.address},${res.city}+${res.country}&zoom=18`}>
                        </iframe>
                    </div>
                )
            })}
        </div>
    )
}



// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div onClick={() => alert("Hi!")}>Kunstgemüse</div>;

// function App() {
//     const center = {
//       lat: 52.520389,
//       lng: 13.460917
//     };
//     const zoom = 18;
  

//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '250px', width: '300px' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "API-KEY" }}
//           defaultCenter={center}
//           defaultZoom={zoom}
//         >
//           <AnyReactComponent
//             lat={52.520389}
//             lng={13.460917}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
// }

export default App;