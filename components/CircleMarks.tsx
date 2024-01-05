import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({ iconUrl: "/images/lollipop.png" })


// const multiPolyline: [number, number][][] = [
//     [
//         [49.182773, -122.844662],
//         [49.189640, -122.847880],
//         [49.199108, -122.850621],
//     ],
//     [
//         [49.25299, -123.00800],
//         [49.25555, -123.03300],
//         [49.25777, -123.07400],
//     ]
// ]

const redOptions = { color: 'red' }
const purpleOptions = { color: 'purple' }
const fillBlueOptions = { color: 'blue' }

const CircleMarks = () => {
    return (
        <>
            <CircleMarker center={[49.182773, -122.844662]} pathOptions={redOptions} radius={15}>
                <Popup>King George Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.189640, -122.847880]} pathOptions={redOptions} radius={15}>
                <Popup>Surrey Central Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.199108, -122.850621]} pathOptions={redOptions} radius={15}>
                <Popup>Gateway Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.204293, -122.875145]} pathOptions={redOptions} radius={15}>
                <Popup>Scott Road Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.204743, -122.906321]} pathOptions={redOptions} radius={15}>
                <Popup>Columbia Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.201357, -122.912797]} pathOptions={redOptions} radius={15}>
                <Popup>New Westminister Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.200067, -122.949116]} pathOptions={redOptions} radius={15}>
                <Popup>22nd Street Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.212037, -122.959170]} pathOptions={redOptions} radius={15}>
                <Popup>Edmonds Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.220071, -122.988404]} pathOptions={redOptions} radius={15}>
                <Popup>Royal Oak Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.225845, -123.003956]} pathOptions={redOptions} radius={15}>
                <Popup>Metrotown Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.229786, -123.012688]} pathOptions={redOptions} radius={15}>
                <Popup>Patterson Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.238397, -123.031815]} pathOptions={redOptions} radius={15}>
                <Popup>Joyce Collingwood Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.244179, -123.045854]} pathOptions={redOptions} radius={15}>
                <Popup>29th Avenue Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.248313, -123.055918]} pathOptions={redOptions} radius={15}>
                <Popup>Nanaimo Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.261829, -123.069062]} pathOptions={redOptions} radius={15}>
                <Popup>Commercial Broadway Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.273128, -123.100430]} pathOptions={redOptions} radius={15}>
                <Popup>Main Street Science World Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.279342, -123.109325]} pathOptions={redOptions} radius={15}>
                <Popup>Stadium Chinatown Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.283213, -123.116049]} pathOptions={redOptions} radius={15}>
                <Popup>Granville Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.285594, -123.119787]} pathOptions={redOptions} radius={15}>
                <Popup>Burrad Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.286160, -123.112194]} pathOptions={redOptions} radius={15}>
                <Popup>Waterfront Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.265797, -123.079035]} pathOptions={purpleOptions} radius={15}>
                <Popup>VCC Clark Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.261829, -123.069062]} pathOptions={purpleOptions} radius={15}>
                <Popup>Commercial Broadway Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.258895, -123.045325]} pathOptions={purpleOptions} radius={15}>
                <Popup>Renfrew Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.260664, -123.033030]} pathOptions={purpleOptions} radius={15}>
                <Popup>Rupert Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.265009, -123.013443]} pathOptions={purpleOptions} radius={15}>
                <Popup>Gilmore Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.266382, -123.001686]} pathOptions={purpleOptions} radius={15}>
                <Popup>Brentwood Town Centre Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.264713, -122.981938]} pathOptions={purpleOptions} radius={15}>
                <Popup>Holdom Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.259159, -122.964038]} pathOptions={purpleOptions} radius={15}>
                <Popup>Sperling Burnaby Lake Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.254628, -122.939067]} pathOptions={purpleOptions} radius={15}>
                <Popup>Lake City Way Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.253392, -122.918176]} pathOptions={purpleOptions} radius={15}>
                <Popup>Production Way University Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.248438, -122.896854]} pathOptions={purpleOptions} radius={15}>
                <Popup>Lougheed Town Centre Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.261326, -122.889924]} pathOptions={purpleOptions} radius={15}>
                <Popup>Burquitlam Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.277906, -122.845453]} pathOptions={purpleOptions} radius={15}>
                <Popup>Moody Centre Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.277166, -122.827977]} pathOptions={purpleOptions} radius={15}>
                <Popup>Inlet Centre Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.274880, -122.800928]} pathOptions={purpleOptions} radius={15}>
                <Popup>Coquitlam Central Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.280369, -122.794007]} pathOptions={purpleOptions} radius={15}>
                <Popup>Lincoln Station</Popup>
            </CircleMarker>

            <CircleMarker center={[49.285452, -122.791716]} pathOptions={purpleOptions} radius={15}>
                <Popup>Lafarge Lake Douglas Station</Popup>
            </CircleMarker>
        </>
    )
}

export default CircleMarks;