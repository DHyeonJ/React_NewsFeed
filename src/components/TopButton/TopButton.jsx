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
      if (window.scrollY > 1200) {
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
          <Btn onClick={scrollToTop} type="button">
            ▲
          </Btn>
        </div>
      )}
    </div>
  );
}

export default TopButton;

const Btn = styled.button`
  background-color: #12263a;
  color: white;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
`;

