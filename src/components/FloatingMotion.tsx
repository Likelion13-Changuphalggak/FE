import React from "react";
import s from "./styles/FloatingMotion.module.scss";

import IMG1 from "../assets/images/floating/floating1.webp";
import IMG2 from "../assets/images/floating/floating2.webp";
import IMG3 from "../assets/images/floating/floating3.webp";
import IMG4 from "../assets/images/floating/floating4.webp";
import CHAR from "../assets/images/floating/character.webp";

interface FloatingProps {
  mirrored: boolean;
}

const FloatingMotion: React.FC<FloatingProps> = ({ mirrored = false }) => {
  return (
    <div
      className={s.wrapper}
      style={{ transform: mirrored ? "scaleX(-1)" : "none" }}
    >
      <div className={s.floatingWrapper}>
        <img
          src={IMG1}
          alt="floating1"
          className={`${s.floatingImage} ${s.img1}`}
          fetchPriority="high"
        />
        <img
          src={IMG2}
          alt="floating2"
          className={`${s.floatingImage} ${s.img2}`}
        />
        <img
          src={IMG3}
          alt="floating3"
          className={`${s.floatingImage} ${s.img3}`}
        />
        <img
          src={IMG4}
          alt="floating4"
          className={`${s.floatingImage} ${s.img4}`}
        />
      </div>
      <div className={s.characterWrapper}>
        <img src={CHAR} alt="character" className={s.characterImage} />
      </div>
    </div>
  );
};

export default FloatingMotion;
