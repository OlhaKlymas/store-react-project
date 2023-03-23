import { useState } from 'react';
import imagePlaceholder from '../images/image-placeholder.jpg';

const Image = (props) => {
    const [currentImage, setCurrentImage] = useState(props.src);

    return (
        <img 
            src={currentImage || props.src}
            alt={props.alt}
            className={props.classes}
            onError={() => setCurrentImage(imagePlaceholder)}
        />
    )
}

export default Image;