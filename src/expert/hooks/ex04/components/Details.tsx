import React from "react";
import useImageDetails from "../hooks/useImageDetails";

interface Props {
  url?: string;
}

export default function Details({ url }: Props): JSX.Element {
  const image = useImageDetails(url);

  return (
    <div className="Details">
      {image && (
        <>
          <div className="Image-info">
            <div className="Image-top">
              <span className="Image-top-username">{image.username}</span>
              <span>{new Date(image.date).toLocaleDateString()}</span>
            </div>
            <div className="Image-description">{image.description}</div>
            <div className="Image-keywords">
              {image.keywords.map((k) => `#${k}`).join(", ")}
            </div>
          </div>

          <img
            src={image.imageUrl}
            alt={image.description}
            width="900"
            height={900 / 1.5}
          />
        </>
      )}
    </div>
  );
}
