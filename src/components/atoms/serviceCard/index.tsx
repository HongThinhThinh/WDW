import React, { FC, useEffect, useState } from "react";
import "./index.scss";
import Message from "../message";
import { useTranslation } from "@/components/hooks/useTranslation";

interface indexProps {
  style?: "small" | "large";
  imgFav: "red" | "white";
  imgHref: string;
  title: string;
  ct1: string;
  ct2?: string;
  ct3?: string;
  ct4?: string;
  ct5?: string;
  ct6?: string;
  ct7?: string;
}

const ServiceCard: FC<indexProps> = ({
  style,
  imgFav,
  imgHref,
  title,
  ct1,
  ct2,
  ct3,
  ct4,
  ct5,
  ct6,
  ct7,
}) => {
  const [isFavorite, setIsFavorite] = useState(imgFav === "red");
  const heartImgSrc = isFavorite ? "/heart.svg" : "/whiteheart.svg";

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };
  const t = useTranslation();
  return (
    <div className="card-sevice" style={{ width: "17rem" }}>
      <div className="bigImg">
        <img src={imgHref} className="card-img-top" alt="..." />
      </div>
      <div className="favorite">
        <div className="Ellipse">
          <img src="/Ellipse.svg" alt="" />
        </div>
        <div className="heart">
          <img src={heartImgSrc} alt="" onClick={handleHeartClick} />
        </div>
      </div>
      <div className={`card-body ${style}`}>
        <h5 className="card-title">{title}</h5>
        <ul className="card-text">
          <li>{ct1}</li>
          <li>{ct2}</li>
          <li>{ct3}</li>
          <li>{ct4}</li>
          <li>{ct5}</li>
          <li>{ct6}</li>
          <li>{ct7}</li>
        </ul>
      </div>
      <div className="card-foot">
        <div className="time">
          <img src="./Vector (1).svg" alt="" />
          <h3>{t!["serviceItemTime"]}</h3>
        </div>
        <div className="msg">
          <Message content={t!["serviceItemButtonText"]} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
