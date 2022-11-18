import { useEffect, useState, useRef } from "react";

const options = {
    center: {
        lat: "123",
        lng: "123"
    },
    zoom: 1
}

const Map = ({ onClick, onIdle, chidlren, style, ...options }) => {

    const ref = useRef(null)
    const [map, setMap] = useState()

    useEffect(() => {
        console.log("useEffect MAP ")
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: { lat: -23.5951056, lng: -46.7221343 },
                zoom: 12
            }))
        }
    }, [ref, map, options])

    return <div ref={ref} style={style}></div>
}

export default Map