import SvgLines from "react-mt-svg-lines";

export default function Arrow3a() {
  return (
    <div>
      <SvgLines animate={true} duration={400}>
        <svg width="83.563px" height="21.692px">
          <g>
            <polyline
              fill="none"
              stroke="#808080"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="68.718,1.5 78.063,10.846 68.718,20.192"
            />
          </g>
        </svg>
      </SvgLines>
    </div>
  );
}
