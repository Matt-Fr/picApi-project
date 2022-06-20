import React from "react";

const Photo = ({
  likes,
  urls: { regular },
  alt_description,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className="imageContainer">
      <img src={regular} alt={alt_description} className="image" />
      <div className="imageContainer-info">
        <h4>{name}</h4>
        <a href={portfolio_url} target="_blank" rel="noreferrer">
          <img src={medium} alt={name} />
        </a>
      </div>
    </article>
  );
};

export default Photo;
