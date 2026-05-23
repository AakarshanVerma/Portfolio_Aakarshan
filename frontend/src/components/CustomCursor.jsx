import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const trailRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    // Check if the device is mobile/touch-based
    const checkDevice = () => {
      const mobileQuery = window.matchMedia('(max-width: 1024px) or (pointer: coarse)');
      setIsMobile(mobileQuery.matches);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    // Track mouse moves
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Setup hover listeners for interactive items
    const updateHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, select, .project-card, .skill-category, .google-form-link, .resume-button, .contact-button');
      
      const addHover = () => setIsHovered(true);
      const removeHover = () => setIsHovered(false);

      interactives.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });

      return () => {
        interactives.forEach((el) => {
          el.removeEventListener('mouseenter', addHover);
          el.removeEventListener('mouseleave', removeHover);
        });
      };
    };

    const cleanupHover = updateHoverListeners();

    // Create a mutation observer to re-apply hover handlers if the DOM updates
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cleanupHover();
      observer.disconnect();
    };
  }, [isMobile, isVisible]);

  // Interpolated trailing effect for the cursor ring
  useEffect(() => {
    if (isMobile) return;

    const animateTrail = () => {
      const dx = position.x - trailRef.current.x;
      const dy = position.y - trailRef.current.y;

      // Adjust speed of the trail following (0.15 is smooth inertia)
      trailRef.current.x += dx * 0.15;
      trailRef.current.y += dy * 0.15;

      setTrailPosition({ x: trailRef.current.x, y: trailRef.current.y });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      <div
        className={`custom-cursor-dot ${isHovered ? 'custom-cursor-hover-dot' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div
        className={`custom-cursor-ring ${isHovered ? 'custom-cursor-hover-ring' : ''}`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`
        }}
      />
    </>
  );
};

export default CustomCursor;
