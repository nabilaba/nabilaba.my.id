import { Box, Container, Flex, Heading, Text, HStack, Tag, Icon, Wrap } from "@chakra-ui/react";
import { FaStackOverflow, FaBrain, FaRobot } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function AIPerspective() {
  return (
    <Container maxW="container.lg" py={20}>
      <MotionBox
        p={10}
        bg="linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)"
        borderRadius="2xl"
        border="1px solid"
        borderColor="whiteAlpha.200"
        position="relative"
        overflow="hidden"
        whileHover={{ borderColor: "cyan.500" }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          opacity={0.05}
          backgroundImage="repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #0f0f1a 25%, #0f0f1a 75%, #000 75%, #000)"
          backgroundPosition="0 0, 10px 10px"
          backgroundSize="20px 20px"
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={10}
          position="relative"
          zIndex={1}
        >
          <Box flex={1}>
            <Heading
              size="xl"
              mb={6}
              bgGradient="linear(to-r, cyan.400, white)"
              bgClip="text"
            >
              My Perspective on AI
            </Heading>
            <Text color="gray.300" fontSize="lg" mb={4} lineHeight="tall">
              I view Artificial Intelligence not as a replacement, but as a{" "}
              <Text as="span" color="cyan.400" fontWeight="bold">
                powerful accelerator
              </Text>
              . It helps me build faster, debug smarter, and explore new
              possibilities.
            </Text>
            <Text color="gray.400" mb={6}>
              However, when AI hits a wall (and it often does), that's where
              true engineering begins. I rely on fundamental problem-solving
              skills, deep-diving into documentation, communities like
              StackOverflow, and platforms like GeeksForGeeks to architect
              robust solutions.
            </Text>
            <Wrap spacing={4}>
              <Tag size="lg" colorScheme="orange" borderRadius="full">
                <Icon as={FaStackOverflow} mr={2} /> StackOverflow
              </Tag>
              <Tag size="lg" colorScheme="green" borderRadius="full">
                <Icon as={SiGeeksforgeeks} mr={2} /> GeeksForGeeks
              </Tag>
              <Tag size="lg" colorScheme="purple" borderRadius="full">
                <Icon as={FaBrain} mr={2} /> Critical Thinking
              </Tag>
            </Wrap>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Icon as={FaRobot} w={40} h={40} color="whiteAlpha.100" />
          </Box>
        </Flex>
      </MotionBox>
    </Container>
  );
};