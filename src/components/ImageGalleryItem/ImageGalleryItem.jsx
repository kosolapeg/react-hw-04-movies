const ImageGalleryItem = ({ image, onModal }) => {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onModal(largeImageURL, tags)}
      />
    </li>
  );
};

export default ImageGalleryItem;
