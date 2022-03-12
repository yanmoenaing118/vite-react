import SvgLines from "react-mt-svg-lines";

export default function Arrow2a() {
  return (
    <div>
      <SvgLines animate={true} duration={400}>
        <svg width="167.918px" height="21.691px">
          <g>
            <polyline
              fill="none"
              stroke="#808080"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="
              16.846,20.191 7.5,10.846 16.846,1.5 	"
            />
          </g>
        </svg>
      </SvgLines>
    </div>
  );
}
