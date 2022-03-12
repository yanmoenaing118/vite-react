import SvgLines from "react-mt-svg-lines";
import { motion } from "framer-motion";
export default function Arrow3() {
  return (
    <div>
      
        <motion.svg width="83.563px" height="21.692px">
          <g>
            <motion.path
              fill="none"
              stroke="#808080"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1.5,10.846l73.563-0"
              initial={{ pathLength: 0}}
              animate={{
                pathLength: 1,
                transition: {
                  duration: 1
                }
              }}
            />
          </g>
        </motion.svg>

    </div>
  );
}
