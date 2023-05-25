import React, { useEffect, useState } from 'react'
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, alt, hast, className }) => {
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.onload = e => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const base64Data = canvas.toDataURL('image/jpeg');
            setImgSrc(base64Data);
        }
        img.src = src;
    }, [src])


    return (
        imgSrc ? <img className={className} src={imgSrc} alt={alt} />
            : <Blurhash
                hash={hast}
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                style={{ display: 'block' }}
                punch={1}
            />
    )
}

export default ImageComponent