/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import {
  mainWindow,
  mouse,
  blackWindow,
  backwardWindow,
  asciiWindow,
  smallBackwardWindow,
  leftWorld,
  rightWorld,
} from '../../assets';

/**
 * Static header visuals separated to avoid re-rendering on parent updates.
 */
const HeaderVisuals: React.FC = () => (
  <>
    <img
      className="absolute z-30 mx-auto my-auto"
      src={mainWindow}
      alt="main window"
    />
    <img
      className="absolute z-[29] mx-auto my-auto translate-y-[-575%] translate-x-[1050%]"
      src={mouse}
      alt="mouse pointer"
    />
    <img
      className="absolute z-[29] mx-auto my-auto translate-y-[32%] translate-x-[-32.25%]"
      src={blackWindow}
      alt="black window"
    />
    <img
      className="absolute z-[28] mx-auto my-auto translate-y-[-21%] translate-x-[-7%]"
      src={backwardWindow}
      alt="backward window"
    />
    <img
      className="absolute z-[29] mx-auto my-auto translate-y-[10%] translate-x-[130%]"
      src={asciiWindow}
      alt="ascii window"
    />
    <img
      className="absolute z-[28] mx-auto my-auto translate-y-[18%] translate-x-[122.5%]"
      src={smallBackwardWindow}
      alt="small backward window"
    />
    <img
      className="absolute z-[27] mx-auto my-auto translate-y-[28%] translate-x-[115%]"
      src={smallBackwardWindow}
      alt="small backward window"
    />
    <img
      className="absolute z-[26] mx-auto my-auto translate-y-[-17%] translate-x-[-85%]"
      src={leftWorld}
      alt="left world"
    />
    <img
      className="absolute z-[26] mx-auto my-auto translate-y-[15%] translate-x-[115%]"
      src={rightWorld}
      alt="right world"
    />
  </>
);

export default React.memo(HeaderVisuals);