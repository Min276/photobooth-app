import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface IProps {
  children: any;
  className?: string;
}

const AnimationFrame: FunctionComponent<IProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className && className}
    //   initial={{ scale: 0.8, opacity: 0 }}
    //   whileInView={{
    //     scale: 1,
    //     opacity: 1,
    //     transition: { delay: 0.4, duration: 0.5 },
    //   }}
    layout
    // animate={{ opacity: 1 }}
    // transition={{
    //   opacity: { ease: "linear" },
    //   layout: { delay: 0.4, duration: 0.9 }
    // }}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationFrame;