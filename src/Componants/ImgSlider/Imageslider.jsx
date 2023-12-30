import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";

const Imageslider = ({ url, limit = 5, page = 1 }) => {
  const [images, setimages] = useState([]);
  const [curruntslide, setcurruntslide] = useState(0);
  const [errormsg, seterrormsg] = useState(null);
  const [loading, setloading] = useState(false);

  const fetchimges = async (geturl) => {
    try {
      setloading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setimages(data);
        setloading(false);
      }
    } catch (error) {
      seterrormsg(error.massage);
      setloading(false);
    }
  };

  function handlePrevious() {
    setcurruntslide(curruntslide === 0 ? images.length - 1 : curruntslide - 1);
  }

  function handleNext() {
    setcurruntslide(curruntslide === images.length - 1 ? 0 : curruntslide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchimges(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return (
      <>
        <div>loading.....</div>
      </>
    );
  }

  if (errormsg !== null) {
    return (
      <>
        <div>somthing went wrong {errormsg}</div>
      </>
    );
  }
  return (
    <div className="container flex justify-center items-center relative h-[450px] w-[600px]">
      <FaArrowLeft className="arrow arrow-left" onClick={handlePrevious} />
      {images && images.length
        ? images.map((items, i) => (
            <img
              key={items.id}
              src={items.download_url}
              alt={items.author}
              className={
                curruntslide === i ? "current-image" : "hide-current-image"
              }
            />
          ))
        : null}

      <FaArrowRight onClick={handleNext} className="arrow arrow-right" />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  curruntslide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setcurruntslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Imageslider;
