import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import BottomMenu from './components/bottomMenu/BottomMenu';
import Gallery from './components/Gallery/Gallery';
import PriceList from './components/PriceList/PriceList';

const App = () => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [canSwipe, setCanSwipe] = useState(true);
  const minSwipeDistance = 70;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    console.log(distance)
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if ((isLeftSwipe || isRightSwipe) && canSwipe) {
      console.log('swipe', isLeftSwipe ? 'left' : 'right');
      setShowNavbar(!isLeftSwipe);
      setOpen(!isLeftSwipe);
    }
  };

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} isOpen={isOpen} setOpen={setOpen} />
      <section style={{ marginTop: '60px' }} id='top-section'>
        <Home />
      </section>
      <section style={{ marginTop: '60px' }} id='gallery-section'>
        <Gallery changeCanSwipe={setCanSwipe}/>
      </section>
      <section style={{ marginTop: '60px' }} id='price-section'>
        <PriceList />
      </section>
      <section style={{ marginTop: '60px' }} id='info-section'>
        <Info />
      </section>
      <BottomMenu />
    </div>
  );
};

export default App;
