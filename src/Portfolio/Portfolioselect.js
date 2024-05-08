import './Portfolio.css';

import React, {useState, useEffect, Fragment} from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css"


const customIcon = new Icon({
    iconUrl: require("./../img/marker.png"),
    iconSize: [38, 38] // size of the icon
  });


function Portfolioselect(){

    const center = [33.91112419972206, -117.7]
    const western = [33.91112419972206, -117.28997502905078]
    const glendale = [34.14684921579826, -118.24846744665422]
    const cucamonga = [34.112227361556265, -117.57846108898497]

    const navigate = useNavigate();
    const handleClickLocation = (index) => {
        console.log(index);
        switch (index){
            case 0: navigate('western');break;
            case 1: navigate('glendale');break;
            case 2: navigate('cucamonga');break;
            case 3: navigate('western');break;

            

        }
        
    };

    return (
        <Fragment>
            <div className='spacer2'/>
                <div className={"centerSubheader"}>
                    Hover over and click on the locations below, or use easy navigation below the map:
                </div>
                <div className='spacer'/>
                <MapContainer className="markercluster-map" center={center} zoom={9}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                touchZoom={false}
                boxZoom={false}
                dragging={false}>
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={western}  icon={customIcon} eventHandlers={{mouseover: (event) => event.target.openPopup(), click: ()=>{handleClickLocation(0)}}}>
                        <Popup>
                            <Nav.Link as = {Link} to = "western">
                                Western Municipal Water District
                            </Nav.Link>
                        </Popup>
                    </Marker>
               
                    
                    <Marker position={glendale}  icon={customIcon} eventHandlers={{mouseover: (event) => event.target.openPopup(), click: ()=>{handleClickLocation(1)}}}>
                        <Popup>
                            <Nav.Link as = {Link} to = "glendale">
                                Glendale Water and Power
                            </Nav.Link>
                        </Popup>
                    </Marker>
                    <Marker position={cucamonga}  icon={customIcon} eventHandlers={{mouseover: (event) => event.target.openPopup(), click: ()=>{handleClickLocation(2)}}}>
                        <Popup>
                            <Nav.Link as = {Link} to = "cucamonga">
                                Cucamonga Valley Water
                            </Nav.Link>
                        </Popup>
                    </Marker>
                </MapContainer>
            <div className={"centerSubheader"}>
                Easy Navigation:
            </div>
            <div className='spacer'/>
            <div className={"easyDisplay"}>
                <Nav.Link as = {Link} to = "western" className = "easyDisplayItem">
                    Western Municipal Water District
                </Nav.Link>
                <Nav.Link as = {Link} to = "glendale" className = "easyDisplayItem">
                    Glendale Water and Power
                </Nav.Link>
                <Nav.Link as = {Link} to = "cucamonga" className = "easyDisplayItem">
                    Cucamonga Valley Water
                </Nav.Link>
                <Nav.Link as = {Link} to = "site4" className = "easyDisplayItem">
                    Irvine Ranch Water District
                </Nav.Link>
                <Nav.Link as = {Link} to = "site5" className = "easyDisplayItem">
                    Metropolitan Water District
                </Nav.Link>
            </div>
        </Fragment>
        

    );
}

export default Portfolioselect;