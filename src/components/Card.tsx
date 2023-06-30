import Link from "next/link";

const Card = ({
  videoTitle,
  videoFileName,
  tambnailFileName,
}: {
  videoTitle: string;
  videoFileName: string;
  tambnailFileName: string;
}) => {
  return (
    <Link href={`playvideo/${videoFileName}`}>
      <img
        src={`http://localhost:4000/api/gettambnail?tambnailName=${tambnailFileName}`}
        alt="img"
        width={300}
        height={300}
      />
      <h1>{videoTitle}</h1>
    </Link>
  );
};
export default Card;
