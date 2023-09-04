import { useEffect, useState } from "react";
import preloadImg from "./preloadImage.gif";

export const Img = ({ className, src, alt }) => {
    const [url, setUrl] = useState(preloadImg);
    useEffect(() => {
        fetch(src)
            .then((response) => response.blob())
            .then((image) => {
                setUrl(URL.createObjectURL(image));
            })
            .catch((error) => {
                console.error("Error loading image:", error);
            });
    }, [src]);

    return <img className={className} src={url} alt={alt} />;
};
