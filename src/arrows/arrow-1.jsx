import SvgLines from "react-mt-svg-lines";

import { motion } from "framer-motion";

export default function Arrow1() {
  return (
    <div>
      <motion.svg width="114.432px" height="233.833px">
        <motion.path
          fill="none"
          stroke="#808080"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="
                M109.434,231 C50.32,231.603,10,170.85,8.5,120.902 c0,0,0,-90.432,100.432,-111.432 "
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: {
              duration: 2
            }
          }}
        />
      </motion.svg>
    </div>
  );
}
