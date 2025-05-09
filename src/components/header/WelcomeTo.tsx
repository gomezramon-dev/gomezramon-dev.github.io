/* eslint-disable react-refresh/only-export-components */
import React from 'react';

// Precompute SVG path and dimensions to avoid recalculations on re-renders
const SCALE = 0.75;
const BASE_WIDTH = 1134;
const BASE_HEIGHT = 557;
const NEW_WIDTH = Math.round(BASE_WIDTH * SCALE);
const NEW_HEIGHT = Math.round(BASE_HEIGHT * SCALE);
const X_OFFSET = (NEW_WIDTH - BASE_WIDTH) / 2;
const Y_OFFSET = (NEW_HEIGHT - BASE_HEIGHT) / 2;
const PATH_D = `M ${Math.round(302.897 + X_OFFSET)} ${Math.round(
  19.6574 + Y_OFFSET,
)}
C ${Math.round(401.897 + X_OFFSET)} ${Math.round(
  61.1574 + Y_OFFSET,
)} ${Math.round(609.397 + X_OFFSET)} ${Math.round(
  54.1573 + Y_OFFSET,
)} ${Math.round(699.897 + X_OFFSET)} ${Math.round(
  37.6574 + Y_OFFSET,
)}
C ${Math.round(790.397 + X_OFFSET)} ${Math.round(
  21.1574 + Y_OFFSET,
)} ${Math.round(825.5 + X_OFFSET)} ${Math.round(
  145 + Y_OFFSET,
)} ${Math.round(900 + X_OFFSET)} ${Math.round(
  126 + Y_OFFSET,
)}
C ${Math.round(974.5 + X_OFFSET)} ${Math.round(
  107 + Y_OFFSET,
)} ${Math.round(1182 + X_OFFSET)} ${Math.round(
  167 + Y_OFFSET,
)} ${Math.round(1123 + X_OFFSET)} ${Math.round(
  407 + Y_OFFSET,
)}
C ${Math.round(1064 + X_OFFSET)} ${Math.round(
  647 + Y_OFFSET,
)} ${Math.round(755.526 + X_OFFSET)} ${Math.round(
  532 + Y_OFFSET,
)} ${Math.round(712 + X_OFFSET)} ${Math.round(
  499 + Y_OFFSET,
)}
C ${Math.round(668.474 + X_OFFSET)} ${Math.round(
  466 + Y_OFFSET,
)} ${Math.round(677 + X_OFFSET)} ${Math.round(
  506 + Y_OFFSET,
)} ${Math.round(635.5 + X_OFFSET)} ${Math.round(
  532 + Y_OFFSET,
)}
C ${Math.round(594 + X_OFFSET)} ${Math.round(
  558 + Y_OFFSET,
)} ${Math.round(275.897 + X_OFFSET)} ${Math.round(
  544.157 + Y_OFFSET,
)} ${Math.round(275.897 + X_OFFSET)} ${Math.round(
  544.157 + Y_OFFSET,
)}
C ${Math.round(275.897 + X_OFFSET)} ${Math.round(
  544.157 + Y_OFFSET,
)} ${Math.round(104 + X_OFFSET)} ${Math.round(
  539.833 + Y_OFFSET,
)} ${Math.round(69 + X_OFFSET)} ${Math.round(
  513 + Y_OFFSET,
)}
C ${Math.round(34 + X_OFFSET)} ${Math.round(
  486.167 + Y_OFFSET,
)} ${Math.round(65.3968 + X_OFFSET)} ${Math.round(
  429.5 + Y_OFFSET,
)} ${Math.round(27.8968 + X_OFFSET)} ${Math.round(
  350 + Y_OFFSET,
)}
C ${Math.round(-9.60315 + X_OFFSET)} ${Math.round(
  270.5 + Y_OFFSET,
)} ${Math.round(-10.5 + X_OFFSET)} ${Math.round(
  151 + Y_OFFSET,
)} ${Math.round(37 + X_OFFSET)} ${Math.round(
  81 + Y_OFFSET,
)}
C ${Math.round(84.5 + X_OFFSET)} ${Math.round(
  11 + Y_OFFSET,
)} ${Math.round(203.897 + X_OFFSET)} ${Math.round(
  -21.8426 + Y_OFFSET,
)} ${Math.round(302.897 + X_OFFSET)} ${Math.round(
  19.6574 + Y_OFFSET,
)}
Z`;

/**
 * Static SVG header text animation component.
 */
const WelcomeTo: React.FC = () => (
  <svg
    className="absolute inset-0 mx-auto my-auto z-20 overflow-visible"
    style={{ overflow: 'visible' }}
    width={NEW_WIDTH}
    height={NEW_HEIGHT}
    viewBox={`0 0 ${NEW_WIDTH} ${NEW_HEIGHT}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path id="curve" fill="none" d={PATH_D} />
    <text className="text-[64px] fill-white tracking-title">
      <textPath href="#curve">
        welcome to...
        <animate
          attributeName="startOffset"
          from="0%"
          to="100%"
          begin="0s"
          dur="10s"
          repeatCount="indefinite"
          restart="always"
        />
      </textPath>
    </text>
  </svg>
);

export default React.memo(WelcomeTo);
