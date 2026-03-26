import { Box, Text, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const dashMove = keyframes`
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -45; }
`;

const gridMove = keyframes`
  from { transform: translateY(0px); }
  to { transform: translateY(50px); }
`;

const WavyLine = ({ top, duration, color }) => (
  <Box
    position="absolute"
    top={top}
    left={0}
    right={0}
    height="100px"
    zIndex="-1"
    overflow="hidden"
    style={{ transform: "translateZ(0)" }}
  >
    <Box
      as="svg"
      width="100%"
      height="100%"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
    >
      <path
        d="M-5,50 C150,0 350,100 500,50 C650,0 850,100 1005,50"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeDasharray="15 30"
        style={{
          animation: `${dashMove} ${duration}s linear infinite`,
        }}
      />
    </Box>
  </Box>
);

const GridBackground = () => {
  const cols = Array.from({ length: 22 }, (_, i) => i * 50);
  const rows = Array.from({ length: 16 }, (_, i) => i * 50);

  return (
    <Box
      position="absolute"
      bottom="-20%"
      left="-50%"
      w="200%"
      h="60%"
      overflow="hidden"
      opacity="0.2"
      style={{
        transform: "perspective(500px) rotateX(60deg)",
        willChange: "transform",
      }}
    >
      <Box
        as="svg"
        position="absolute"
        top="-100%"
        left="0"
        w="100%"
        h="200%"
        style={{
          animation: `${gridMove} 1.5s linear infinite`,
          willChange: "transform",
        }}
      >
        {cols.map((x) => (
          <line
            key={`c-${x}`}
            x1={`${x}`}
            y1="0"
            x2={`${x}`}
            y2="100%"
            stroke="rgba(79,209,197,0.5)"
            strokeWidth="1"
          />
        ))}
        {rows.map((y) => (
          <line
            key={`r-${y}`}
            x1="0"
            y1={`${y}`}
            x2="100%"
            y2={`${y}`}
            stroke="rgba(79,209,197,0.5)"
            strokeWidth="1"
          />
        ))}
      </Box>
    </Box>
  );
};

export default function BackgroundDecorations() {
  const jpChars = [
    { char: "技術", x: "10%", y: "20%", delay: 0 },
    { char: "情熱", x: "80%", y: "15%", delay: 2 },
    { char: "未来", x: "20%", y: "70%", delay: 4 },
    { char: "創造", x: "85%", y: "60%", delay: 1 },
  ];

  const shapes = [
    { type: "cube", x: "15%", y: "30%", size: "60px", color: "cyan.400" },
    { type: "donut", x: "75%", y: "40%", size: "80px", color: "purple.400" },
    { type: "pyramid", x: "50%", y: "85%", size: "50px", color: "pink.400" },
  ];

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-2"
      overflow="hidden"
      pointerEvents="none"
      bg="#0a0a12"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        height: "100%",
        width: "100%",
        contain: "strict",
      }}
    >
      <GridBackground />
      <WavyLine top="20%" duration={10} color="rgba(213, 63, 140, 0.5)" />
      <WavyLine top="60%" duration={15} color="rgba(183, 63, 213, 0.5)" />
      {jpChars.map((item, i) => (
        <MotionText
          key={i}
          position="absolute"
          left={item.x}
          top={item.y}
          fontSize="4xl"
          fontWeight="bold"
          color="whiteAlpha.100"
          fontFamily="'Noto Sans JP', sans-serif"
          style={{ transform: "translateZ(0)" }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, delay: item.delay, repeat: Infinity }}
        >
          {item.char}
        </MotionText>
      ))}
      {shapes.map((shape, i) => (
        <MotionBox
          key={`shape-${i}`}
          position="absolute"
          left={shape.x}
          top={shape.y}
          w={shape.size}
          h={shape.size}
          border="2px solid"
          borderColor={shape.color}
          boxShadow={`0 0 20px ${shape.color}`}
          borderRadius={shape.type === "donut" ? "full" : "lg"}
          style={{ transform: "translateZ(0)" }}
          animate={{ rotate: 360, y: [0, 30, 0] }}
          transition={{
            rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          _after={{
            content: '""',
            position: "absolute",
            top: "20%",
            left: "20%",
            right: "20%",
            bottom: "20%",
            border: "1px solid",
            borderColor: "whiteAlpha.500",
            borderRadius: "inherit",
          }}
        />
      ))}
    </Box>
  );
}
