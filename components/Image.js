import Image from 'next/image'

const ImageComponent = ({src,height,width,alt}) => 
    <Image
    src={src}
    height={height}
    width={width}
    alt={alt}
    
    ></Image>


export default ImageComponent