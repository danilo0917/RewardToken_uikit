import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg"width="128" height="128" viewBox="0 0 128 128" fill="none" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <circle fill="#001a83" cx="512" cy="512" r="512" />
            <polygon fill="#ff3f36"
              points="936.76 483.5 958.08 462.18 891.2 462.18 891.2 504.65 957.9 504.65 936.76 483.5" />
            <path fill="#ff2eb9"
              d="M532.46,524.63V714.3a87.69,87.69,0,0,0,87.69-87.69V436.93A87.69,87.69,0,0,0,532.46,524.63Z" />
            <path fill="#f80"
              d="M410.28,285.7V626.61A87.7,87.7,0,0,0,498,714.3V373.39A87.69,87.69,0,0,0,410.28,285.7Z" />
            <path fill="#a63bff"
              d="M288.11,373.39V714.3a87.69,87.69,0,0,0,87.69-87.69V285.7h0A87.69,87.69,0,0,0,288.11,373.39Z" />
            <path fill="#178bff" d="M165.93,437.65v189a87.7,87.7,0,0,0,87.7,87.69v-189A87.7,87.7,0,0,0,165.93,437.65Z" />
            <path fill="#00a35a"
              d="M774.39,394.87V568.3c37.38,0,79.43-63.65,79.43-63.65V462.18S814.11,394.87,774.39,394.87Z" />
            <path fill="#40c42b"
              d="M676.9,436.93h-24v87.7h23v5.09a37.67,37.67,0,0,0,37.66,37.67h25.46V394.87H714.56a37.66,37.66,0,0,0-37.66,37.66Z" />
          </g>
        </g>
      </svg>
    </Svg>
  );
};

export default Icon;
