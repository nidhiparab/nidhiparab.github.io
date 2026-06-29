import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import './banner.css';

import my from '../assets/my.jpeg';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

const CONTENT_BLOCKS = [
  {
    title: null,
    text: "hi! i’m nidhi i'm a work in progress. i'm drawn to systems that evolve under pressure, whether in technology, markets, or people. i’m deeply interested in how ideas move from abstraction to impact: how products are shaped, how decisions compound over time, and how thoughtful engineering can influence the way people work and think. my work naturally sits at the intersection of engineering, research, and execution, where curiosity matters as much as technical depth.",
  },

  {
    title: null,
    text: 'beyond engineering, i spend a significant amount of time exploring emerging technology, simplifying difficult concepts, and engaging with communities that are excited about the future of ai and software. i enjoy bringing people together through conversations, events, and shared ideas, and i value environments where ambitious individuals challenge each other to grow. at the core of everything i do is a long-term mindset: building meaningful work, staying endlessly curious, and continuously evolving with the systems i choose to be part of.',
  },

];

const BANNER_SCROLL_VH = 200;

function Banner() {
  const wrapperRef = useRef(null);
  const lastCursorSpawnRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorImage, setCursorImage] = useState(null);

  const expandProgress = clamp(scrollProgress / 0.45, 0, 1);
  const splitProgress = clamp((scrollProgress - 0.3) / 0.45, 0, 1);
  const showCursorEffect = scrollProgress < 0.06 && splitProgress < 0.05;
  const showAllContent = expandProgress >= 0.95;

  const visibleBlocks = showAllContent ? CONTENT_BLOCKS : [CONTENT_BLOCKS[0]];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }

      const scrolled = -rect.top;
      const progress = clamp(scrolled / scrollableDistance, 0, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!showCursorEffect) {
        setCursorImage(null);
        return;
      }

      const now = Date.now();
      if (now - lastCursorSpawnRef.current < 280) return;
      lastCursorSpawnRef.current = now;

      const rect = e.currentTarget.getBoundingClientRect();
      setCursorImage({
        id: now,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [showCursorEffect]
  );

  const handleMouseLeave = () => {
    setCursorImage(null);
  };

  useEffect(() => {
    if (!showCursorEffect) {
      setCursorImage(null);
    }
  }, [showCursorEffect]);

  const bannerStyle = {
    '--expand-progress': expandProgress,
    '--split-progress': splitProgress,
  };

  return (
    <div
      className="banner-scroll-wrapper"
      ref={wrapperRef}
      style={{ height: `${BANNER_SCROLL_VH}vh` }}
    >
      <div
        className="banner"
        style={bannerStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Container className="banner-container">
          <div className="banner-inner">
          <div
            className={[
              'banner-content',
              isLoaded ? 'text-reveal' : '',
              splitProgress > 0.35 ? 'banner-content--split' : 'banner-content--intro',
            ].filter(Boolean).join(' ')}
          >
            {visibleBlocks.map((block, index) => (
              <div
                key={block.title ?? 'intro'}
                className={[
                  'content-block',
                  showAllContent && index > 0 ? 'content-block--revealed' : '',
                  !showAllContent && index === 0 ? 'content-block--latest' : '',
                ].filter(Boolean).join(' ')}
              >
                {block.title && <h2>{block.title}</h2>}
                <p>{block.text}</p>
              </div>
            ))}
          </div>

          <div className="banner-photo">
            <img src={my} alt="Featured" className="banner-photo-img" />
          </div>
          </div>
        </Container>

        {showCursorEffect && cursorImage && (
          <img
            key={cursorImage.id}
            src={my}
            alt=""
            className="cursor-follow-image"
            style={{
              left: `${cursorImage.x}px`,
              top: `${cursorImage.y}px`,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Banner;
