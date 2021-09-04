import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const UIInfiniteScroll = ({ fetchMore }) => {
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "10px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default UIInfiniteScroll;

UIInfiniteScroll.propTypes = {
  fetchMore: PropTypes.func,
};
