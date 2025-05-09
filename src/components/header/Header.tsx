/* eslint-disable react-refresh/only-export-components */
import React, { useMemo } from 'react';
import WelcomeTo from './WelcomeTo';
import HeaderVisuals from './HeaderVisuals';
import useScale from '../../hooks/useScale';
import { download } from '../../assets';
import cv from '../../../public/KapidevResume.pdf';

const Header: React.FC = () => {
  const scale = useScale(1920);
  const style = useMemo(
    () => ({ transform: `scale(${scale})` }),
    [scale],
  );

  return (
    <div
      style={style}
      className="flex min-h-screen horizontal-padding w-full items-center justify-center relative"
    >
      <WelcomeTo />
      <HeaderVisuals />
      <a
        className="flex gap-4 no-underline hover:text-hover"
        target="_blank"
        rel="noopener noreferrer"
        href={cv}
        download="KapidevResume.pdf"
      >
        <button className="w-[236px] h-[52px] translate-y-[720%] flex items-center justify-center gap-4 border-2 border-secondary bg-white text-secondary filter drop-shadow(-2px 4px #241F23) rounded-lg text-lg tracking-links hover:bg-hover">
          Get Resume
          <img src={download} alt="download" />
        </button>
      </a>
    </div>
  );
};

export default React.memo(Header);

