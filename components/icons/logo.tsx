import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    // rotate: -180,
  },
  animate: {
    opacity: 1,
    // rotate: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
}

const A = {
  initial: {
    opacity: 0,
    pathLength: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    // rotate: 180,
    transition: {
      type: 'tween',
      duration: 1.5,
      delay: 1.5,
    },
  },
}

const Logo = () => (
  <motion.svg
    variants={variants}
    initial="initial"
    animate="animate"
    style={{ stroke: '#94d2bd' }}
    width="79"
    height="68"
    viewBox="0 0 79 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      variants={pathVariants}
      d="M42.9588 9.93616L72.0347 59.9908C73.5837 62.6575 71.6598 66 68.5759 66H10.4241C7.34021 66 5.41631 62.6575 6.96532 59.9908L36.0412 9.93618C37.5831 7.28171 41.4169 7.28171 42.9588 9.93616Z"
      stroke="#cfac51"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      variants={A}
      d="M52.4329 54.7671C52.5038 55.0152 52.5392 55.2456 52.5392 55.4582C52.5392 55.6354 52.4684 55.8304 52.3266 56.043C52.2203 56.2557 52.0785 56.4329 51.9013 56.5747C51.5468 56.8582 51.157 57 50.7316 57C49.881 57 49.3139 56.6456 49.0304 55.9367L46.4253 49.3443H31.9114L29.3063 55.9367C29.0582 56.6456 28.562 57 27.8177 57C27.038 57 26.4886 56.681 26.1696 56.043C26.0633 55.8304 26.0101 55.6354 26.0101 55.4582C26.0101 55.2456 26.0456 55.0152 26.1165 54.7671L35.8456 30.9494C36.519 29.1063 37.3342 28.0785 38.2911 27.8658C38.5747 27.7949 38.8937 27.7595 39.2481 27.7595C39.9924 27.7595 40.5418 27.9013 40.8962 28.1848C41.5696 28.7873 42.1367 29.7089 42.5975 30.9494L52.4329 54.7671ZM32.9747 46.5797H45.4152C45.4152 46.5797 38.2911 35.1702 39.1949 30.7899C40.0987 26.4095 32.9747 46.5797 32.9747 46.5797Z"
      stroke="#cfac51"
      fill="#cfac51"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
)

export default Logo
