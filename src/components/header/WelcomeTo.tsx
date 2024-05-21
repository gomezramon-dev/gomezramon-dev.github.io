const WelcomeTo = () => {
  const newWidth = Math.round(1134 * 1.25);
  const newHeight = Math.round(557 * 1.25);
  const xOffset = (newWidth - 1134) / 2;
  const yOffset = (newHeight - 557) / 2;

  return (
    <svg
      className="absolute z-30 mx-auto my-auto"
      width={newWidth}
      height={newHeight}
      viewBox={`0 0 ${newWidth} ${newHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="curve"
        fill="none"
        d={`M ${Math.round(302.897 + xOffset)} ${Math.round(19.6574 + yOffset)}
        C ${Math.round(401.897 + xOffset)} ${Math.round(61.1574 + yOffset)} ${Math.round(609.397 + xOffset)} ${Math.round(54.1573 + yOffset)} ${Math.round(699.897 + xOffset)} ${Math.round(37.6574 + yOffset)}
        C ${Math.round(790.397 + xOffset)} ${Math.round(21.1574 + yOffset)} ${Math.round(825.5 + xOffset)} ${Math.round(145 + yOffset)} ${Math.round(900 + xOffset)} ${Math.round(126 + yOffset)}
        C ${Math.round(974.5 + xOffset)} ${Math.round(107 + yOffset)} ${Math.round(1182 + xOffset)} ${Math.round(167 + yOffset)} ${Math.round(1123 + xOffset)} ${Math.round(407 + yOffset)}
        C ${Math.round(1064 + xOffset)} ${Math.round(647 + yOffset)} ${Math.round(755.526 + xOffset)} ${Math.round(532 + yOffset)} ${Math.round(712 + xOffset)} ${Math.round(499 + yOffset)}
        C ${Math.round(668.474 + xOffset)} ${Math.round(466 + yOffset)} ${Math.round(677 + xOffset)} ${Math.round(506 + yOffset)} ${Math.round(635.5 + xOffset)} ${Math.round(532 + yOffset)}
        C ${Math.round(594 + xOffset)} ${Math.round(558 + yOffset)} ${Math.round(275.897 + xOffset)} ${Math.round(544.157 + yOffset)} ${Math.round(275.897 + xOffset)} ${Math.round(544.157 + yOffset)}
        C ${Math.round(275.897 + xOffset)} ${Math.round(544.157 + yOffset)} ${Math.round(104 + xOffset)} ${Math.round(539.833 + yOffset)} ${Math.round(69 + xOffset)} ${Math.round(513 + yOffset)}
        C ${Math.round(34 + xOffset)} ${Math.round(486.167 + yOffset)} ${Math.round(65.3968 + xOffset)} ${Math.round(429.5 + yOffset)} ${Math.round(27.8968 + xOffset)} ${Math.round(350 + yOffset)}
        C ${Math.round(-9.60315 + xOffset)} ${Math.round(270.5 + yOffset)} ${Math.round(-10.5 + xOffset)} ${Math.round(151 + yOffset)} ${Math.round(37 + xOffset)} ${Math.round(81 + yOffset)}
        C ${Math.round(84.5 + xOffset)} ${Math.round(11 + yOffset)} ${Math.round(203.897 + xOffset)} ${Math.round(-21.8426 + yOffset)} ${Math.round(302.897 + xOffset)} ${Math.round(19.6574 + yOffset)}
        Z`}
      />
      <text className="text-[64px] fill-white tracking-title">
        <textPath href="#curve">
          welcome to...
          <animate attributeName="startOffset" from="0%" to ="100%" begin="0s" dur="10s" repeatCount="indefinite" restart="always"/>
        </textPath>
      </text>
    </svg>
  );
};

export default WelcomeTo;
