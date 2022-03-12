import SvgLines from "react-mt-svg-lines";
import { motion } from "framer-motion";
export default function Arrow2() {
  return (
    <div>
      <motion.svg width="167.918px" height="21.691px">
        <g>
          <motion.path
            fill="none"
            stroke="#808080"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M157.418,10.846l-147.918-0"
            
            initial={{
              pathLength: 0
            }}
            animate={{
              pathLength: 1,
              transition: {
                delay: 2,
                duration: 1
              }
            }}
          />
        </g>
      </motion.svg>
    </div>
  );
}
