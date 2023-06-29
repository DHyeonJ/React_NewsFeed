import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', ShowButtonClick);
    return () => {
      window.removeEventListener('scroll', ShowButtonClick);
    };
  }, []);
  return (
    <div>
      {showButton && (
        <div>
          <button onClick={scrollToTop} type="button">
            ▲
          </button>
        </div>
      )}
    </div>
  );
}

export default TopButton;

// const TopButton = styled.div``;
