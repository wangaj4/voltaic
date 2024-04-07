import './main.css';
import './Portfolio.css';

import React, {useState, useEffect, Fragment} from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css"


const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38] // size of the icon
  });


function Portfolioselect(){

    const position = [33.9806, -117.3755]

    
    return (
        <Fragment>
            <div className='spacer'/>
            <div className={"centerText"}>
                <Nav.Link as = {Link} to = "western" className = "navbarItem">
                    Western Municipal
                </Nav.Link>
                <Nav.Link as = {Link} to = "glendale" className = "navbarItem">
                    Glendale Water and Power
                </Nav.Link>
                <Nav.Link as = {Link} to = "cucamonga" className = "navbarItem">
                    Cucamonga Valley Water
                </Nav.Link>
                <Nav.Link as = {Link} to = "site4" className = "navbarItem">
                    site4
                </Nav.Link>
                <Nav.Link as = {Link} to = "site5" className = "navbarItem">
                    site5
                </Nav.Link>
            </div>
            <div className='clearBanner'>
                <MapContainer className="markercluster-map" center={position} zoom={9}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                touchZoom={false}
                boxZoom={false}
                dragging={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}  icon={customIcon}>
                        <Popup>
                            Yo it's Riverside
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            
        </Fragment>
        

    );
}

export default Portfolioselect;