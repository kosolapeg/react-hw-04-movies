import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onModal }) => {
  return (
    <ul className="ImageGallery" images={images}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onModal={onModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
