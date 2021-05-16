import { useState, useEffect } from 'react';
import imgApi from './services/images-api';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Section from './components/Section';
import Modal from './components/Modal';
import Button from './components/Button';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [srcImageModal, setSrcImageModal] = useState('');
  const [tagsImageModal] = useState('');

  const fetchImages = async () => {
    try {
      const options = {
        query,
        currentPage,
        perPage,
      };
      setIsLoading(true);
      const imgs = await imgApi.fetchImages(options);
      const newImages = imgs.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        }),
      );

      setImages(prev => [...prev, ...newImages]);
      setCurrentPage(prev => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query !== '') {
      setImages([]);
      setCurrentPage(1);
      fetchImages();
    }
  }, [query]);

  useEffect(() => {
    if (currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [currentPage]);

  const onSubmit = q => {
    setQuery(q);
  };

  const onToggleModal = e => {
    setShowModal(prev => !prev);
  };

  const handleOpenModal = srcBigImage => {
    console.log('Modal');
    setShowModal(prev => !prev);
    setSrcImageModal(srcBigImage);
  };

  const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

  return (
    <>
      <Searchbar onSubmit={onSubmit}></Searchbar>
      {error && <h1 className="Error">{error}</h1>}

      <ImageGallery images={images} onModal={handleOpenModal}></ImageGallery>
      {isLoading && (
        <Loader
          type="Circles"
          color="#3f51b5"
          height={200}
          width={200}
          timeout={3000}
          className="Loader"
        />
      )}
      <Section>
        {shouldRenderLoadMoreButton && (
          <Button className="Button" onClick={fetchImages}></Button>
        )}
      </Section>

      {showModal && (
        <Modal
          imgModal={srcImageModal}
          tagsModal={tagsImageModal}
          onToggleModal={onToggleModal}
        />
      )}
    </>
  );
};

export default App;
