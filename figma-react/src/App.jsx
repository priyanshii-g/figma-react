import './index.css';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import ImageBreak from './components/ImageBreak';
import LatestNews from './components/LatestNews'; 
import RegionalResults from './components/RegionalResults';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <WhatWeDo />
      <ImageBreak />
      <LatestNews /> 
      <RegionalResults />
      <Footer />
    </div>
  );
}

export default App;