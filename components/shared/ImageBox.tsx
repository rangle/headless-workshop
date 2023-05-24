import { urlForImage } from '../../sanity/lib/sanity.image'
import Image from 'next/image'

interface ImageBoxProps {
  image?: { asset?: any } | string
  alt?: string
  width?: number
  height?: number
  size?: string
  className?: string
}

export default function ImageBox({
  image,
  alt = '',
  width = 3500,
  height = 2000,
  size = '100vw',
  className,
}: ImageBoxProps) {
  const imageUrl =
    typeof image === 'string'
      ? image
      : urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <Image
      className={className}
      alt={alt}
      width={width}
      height={height}
      sizes={size}
      src={imageUrl}
    />
  )
}
