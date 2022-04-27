import Image, { StaticImageData } from "next/image";

type CardProps = {
  src?: string | StaticImageData;
  alt?: string;
};
function Card(props: CardProps) {
  const { src, alt } = props;
  return (
    <div className={`border-2 border-slate-200 rounded-b-2xl`}>
      {src && <Image src={src} alt={alt} className={`rounded-t-2xl`}></Image>}
    </div>
  );
}

export default Card;
