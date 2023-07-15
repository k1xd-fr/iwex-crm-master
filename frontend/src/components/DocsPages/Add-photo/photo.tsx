import Image from "next/image";

const PhotoGallery: React.FC<{ photos: string[] }> = ({ photos }) => {
  return (
    <div>
      <h2>Uploaded Photos:</h2>
      {photos.map((photoUrl, index) => (
        <Image key={index} src={photoUrl} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGallery;
