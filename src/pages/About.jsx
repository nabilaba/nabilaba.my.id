import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaCode, FaAndroid } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
  return (
    <Container maxW="container.lg" py={20} id="about">
      <Flex direction={{ base: "column", lg: "row" }} align="center" gap={10}>
        <Box flex={1}>
          <Heading
            size="2xl"
            mb={6}
            borderLeft="4px solid"
            borderColor="cyan.400"
            pl={4}
          >
            WHO AM I?
          </Heading>
          <Text fontSize="lg" color="gray.300" mb={4}>
            I am <b>Nabil Aziz Bima Anggita</b>, currently pursuing a degree in{" "}
            <b>Informatika</b> at <b>Surakarta</b>.
          </Text>
          <Text fontSize="lg" color="gray.300" mb={4}>
            I have a deep interest in <b>Fullstack Engineering</b>, Android OS
            modification, and shell scripting.
          </Text>
          <Text fontSize="lg" color="gray.300">
            I love exploring the intersection of logic and creativity through
            code.
          </Text>
        </Box>
        <MotionBox
          flex={1}
          bg="whiteAlpha.100"
          p={8}
          borderRadius="2xl"
          border="1px dashed"
          borderColor="whiteAlpha.300"
          whileHover={{ rotate: 2, scale: 1.02 }}
          w="full"
        >
          <VStack align="start" spacing={4}>
            <Heading size="md" color="purple.300">
              Stats
            </Heading>
            <Flex align="center" gap={3}>
              <Icon as={FaCode} boxSize={6} color="cyan.400" />
              <Text>
                <b>45+</b> Repositories on Github
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={FaAndroid} boxSize={6} color="green.400" />
              <Text>Android & Web Developer</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={SiChakraui} boxSize={6} color="teal.300" />
              <Text>Chakra UI Specialist</Text>
            </Flex>
          </VStack>
        </MotionBox>
      </Flex>
    </Container>
  );
}
