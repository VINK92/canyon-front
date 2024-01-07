import { FC } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface IImg {
  id?: number;
  src: StaticImageData;
  alt: string;
}


interface ImgProps {
  img: IImg;
  width?: number;
  height?: number;
}

export const CustomImage: FC<ImgProps> = ({
  img: { src, alt },
  width = 0,
  height = 0,
}) => <Image src={src} alt={alt} width={width} height={height} />;
