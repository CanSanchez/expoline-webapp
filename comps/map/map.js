import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import styles from '../../styles/styles.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import { polyline } from 'leaflet'

export default function Map() {

    const position = [49.28594, -123.11129];

    const purpleOption = { color: 'purple' }
    const redOption = { color: 'red' }

    const trainIcon = L.icon ({
        iconUrl: '/metro.png',
        iconSize:     [40, 40], // size of the icon
        iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
        popupAnchor:  [10, -20] // point from which the popup should open relative to the iconAnchor
    })

    const polyline = [
// Waterfront to King George
    [49.28524524981317, -123.11434751643503],
    [49.285581150633966, -123.12012245876285],
    [49.28276795358473, -123.1164699145821],
    [49.28010484687972, -123.11012142014103],
    [49.273374980784865, -123.10037145876296],
    [49.262721001091556, -123.06927941643552],
    [49.24844626535717, -123.05598167410812],
    [49.24436337925635, -123.04537402992739],
    [49.23855530902799, -123.0317256145831],
    [49.22991271599505, -123.01265107225555],
    [49.22593989446889, -123.00385127225569],
    [49.220193228996386, -122.98845204229738],
    [49.21254265709066, -122.95914504342],
    [49.200068725477024, -122.94922489130668],
    [49.20159918383558, -122.91263972992837],
    [49.204943945073374, -122.90607708574763],
    [49.204575904842045, -122.87402738018886],
    [49.1991136014707, -122.85066387225632],
    [49.18971392944762, -122.84792071458409],
    [49.1829310367517, -122.84473292807587],
// Waterfront to Production-Way
    [49.224860238697396, -122.88949270294468],
    [49.23268213068468, -122.88456287225554],
    [49.24875892482227, -122.89717730665],
    [49.25367827613695, -122.91868207173422]
]

    const stations = [
        {
            name: 'Waterfront',
            point: [49.28594, -123.11129]
        },
        {
            name: 'Burrard',
            point: [49.28250, -123.11865]
        },
        {
            name: 'Granville',
            point: [49.28276795358473, -123.1164699145821]
        },
        {
            name: 'Stadium-Chinatown',
            point: [49.28010484687972, -123.11012142014103]
        },
        {
            name: 'Main Street–Science World',
            point: [49.28010484687972, -123.11012142014103]
        },
        {
            name: 'Commercial-Broadway',
            point: [49.262721001091556, -123.06927941643552]
        },
        {
            name: 'Nanaimo',
            point: [49.24844626535717, -123.05598167410812]
        },
        {
            name: '29th Avenue',
            point: [49.24436337925635, -123.04537402992739]
        },
        {
            name: 'Joyce-Collingwood',
            point: [49.23855530902799, -123.0317256145831]
        },
        {
            name: 'Patterson',
            point: [49.22991271599505, -123.01265107225555]
        },
        {
            name: 'Metrotown',
            point: [49.22593989446889, -123.00385127225569]
        },
        {
            name: 'Royal Oak',
            point: [49.220193228996386, -122.98845204229738]
        },
        {
            name: 'Edmonds',
            point: [49.21254265709066, -122.95914504342]
        },
        {
            name: '22nd Street',
            point: [49.200068725477024, -122.94922489130668]
        },
        {
            name: 'New Westminster',
            point: [49.20159918383558, -122.91263972992837]
        },
        {
            name: 'Columbia',
            point: [49.204943945073374, -122.90607708574763]
        },
        {
            name: 'Scott Road',
            point: [49.204575904842045, -122.87402738018886]
        },
        {
            name: 'Gateway',
            point: [49.1991136014707, -122.85066387225632]
        },
        {
            name: 'Surrey Central',
            point: [49.18971392944762, -122.84792071458409]
        },
        {
            name: 'King George',
            point: [49.1829310367517, -122.84473292807587]
        },
        {
            name: 'Sapperton',
            point: [49.1829310367517, -122.84473292807587]
        },
        {
            name: 'Braid',
            point: [49.23268213068468, -122.88456287225554]
        },
        {
            name: 'Lougheed Town Centre',
            point: [49.24875892482227, -122.89717730665]
        },
        {
            name: 'Production Way-University',
            point: [49.25367827613695, -122.91868207173422]
        }
        
    ]
    
    return (
        
        <MapContainer className={styles.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        {stations && stations.length > 0 && stations.map( station =>(
            <Marker position={station.point} icon={trainIcon}>
                <Popup>
                    SkyTrain Expo Line: <br />
                    <br/>
                    {station.name} station.
                </Popup>
            </Marker>
        ))}
            <Polyline pathOptions={purpleOption} positions={polyline}/>
        </MapContainer>
    )
}


