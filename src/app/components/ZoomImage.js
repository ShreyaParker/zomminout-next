import { useState } from 'react';
import Image from 'next/image';


const ZoomImage = ({ src, alt }) => {
    const [zoomed, setZoomed] = useState(false);
    const [positionX, setPositionX] = useState(0);
    const handleMouseMove = (e) => {
        setPositionX(e.nativeEvent.offsetX);
    };
    const toggleZoom = () => {
        setZoomed(!zoomed);
    };

    return (
        <div className={`relative overflow-hidden ${zoomed ? 'zoom-in' : 'zoom-out'}`}>
            <div className="flex justify-center" onMouseMove={handleMouseMove} onClick={toggleZoom}>
                <Image
                    src={src}
                    alt={alt}
                    width={500}
                    height={600}
                    className={`transition-transform duration-500 ease-in-out transform ${zoomed ? 'scale-150' : ''}`}
                    style={{transformOrigin: `${positionX}px center`}}
                />
            </div>
        </div>
    );
};

export default ZoomImage;
