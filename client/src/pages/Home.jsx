import React from 'react';
import Hero from '../components/Hero/Hero';
import CategorySection from '../components/CategorySection/CategorySection';
import ProductSection from '../components/ProductSection/ProductSection';
import FoundationFinder from '../components/FoundationFinder/FoundationFinder';

const Home = ({ onOpenCameraModal }) => {
  return (
    <main>
      <Hero />
      <div className="container">
        <CategorySection />
        <ProductSection />
      </div>
      <FoundationFinder onOpenCameraModal={onOpenCameraModal} />
    </main>
  );
};

export default Home;