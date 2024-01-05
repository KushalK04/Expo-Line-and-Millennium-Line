import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import CircleMarks from './CircleMarks'

const icon = L.icon({ iconUrl: "/images/lollipop.png" })

const polyline: [number, number][] = [
    [49.182773, -122.844662],
    [49.189640, -122.847880],
    [49.199108, -122.850621],
    [49.204293, -122.875145],
    [49.204743, -122.906321],
    [49.201357, -122.912797],
    [49.200067, -122.949116],
    [49.212037, -122.959170],
    [49.220071, -122.988404],
    [49.225845, -123.003956],
    [49.229786, -123.012688],
    [49.238397, -123.031815],
    [49.244179, -123.045854],
    [49.248313, -123.055918],
    [49.261829, -123.069062],
    [49.273128, -123.100430],
    [49.279342, -123.109325],
    [49.283213, -123.116049],
    [49.285594, -123.119787], 
    [49.286160, -123.112194],
]

const polyline2: [number, number][] = [
    [49.265797, -123.079035],
    [49.261829, -123.069062],
    [49.258895, -123.045325],
    [49.260664, -123.033030],
    [49.265009, -123.013443],
    [49.266382, -123.001686],
    [49.264713, -122.981938],
    [49.259159, -122.964038],
    [49.254628, -122.939067],
    [49.253392, -122.918176],
    [49.248438, -122.896854],
    [49.261326, -122.889924],
    [49.277906, -122.845453],
    [49.277166, -122.827977],
    [49.274880, -122.800928],
    [49.280369, -122.794007],
    [49.285452, -122.791716]


]

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

const center: [number, number] = [49.182773, -122.844662];

const Map = () => {
    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.231068, -122.976107]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://github.com/KushalK04/Expo-Line-and-Millennium-Line.git">By Kushal Kumar</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline pathOptions={redOptions} positions={polyline} />
            <Polyline pathOptions={purpleOptions} positions={polyline2} />

            {/* <Polyline pathOptions={redOptions} positions={multiPolyline} /> */}


            <CircleMarks/>

        </MapContainer>
    )
}

export default Map;