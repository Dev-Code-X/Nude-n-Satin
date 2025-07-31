'use client';
import { useRef, useEffect } from 'react';
import smartcrop from 'smartcrop';

type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export default function SmartImage({ src = '', alt = '', className = '', ...rest }: SmartImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current || !src) return;
    const img = new Image();
    img.src = src as string;
    img.onload = () => {
      smartcrop.crop(img, { width: 100, height: 100 }).then(result => {
        const crop = result.topCrop;
        const x = crop.x + crop.width / 2;
        const y = crop.y + crop.height / 2;
        const posX = (x / img.width) * 100;
        const posY = (y / img.height) * 100;
        if (imgRef.current) {
          imgRef.current.style.objectPosition = `${posX}% ${posY}%`;
        }
      }).catch(() => { /* ignore errors */ });
    };
  }, [src]);

  return <img ref={imgRef} src={src} alt={alt} className={`object-cover object-center ${className}`} {...rest} />;
}