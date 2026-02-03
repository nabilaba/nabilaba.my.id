import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      direction="column"
      textAlign="center"
      pt={20}
      position="relative"
      id="home"
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Text color="cyan.400" letterSpacing="widest" fontWeight="bold" mb={2}>
          FULLSTACK ENTHUSIAST
        </Text>
        <Heading
          as="h1"
          size={{ base: "3xl", md: "4xl" }}
          fontWeight="900"
          lineHeight="1.1"
          mb={4}
        >
          NABIL AZIZ <br />
          <Box
            as="span"
            bgGradient="linear(to-r, #7928CA, #FF0080)"
            bgClip="text"
          >
            BIMA ANGGITA
          </Box>
        </Heading>
        <Text
          fontSize="xl"
          color="gray.400"
          maxW="600px"
          mx="auto"
          mb={8}
          px={4}
        >
          Aka <b>Nabil Aba</b>. A "Newbie Permanen" crafting digital experiences
          from Indonesia. Student at UMS, transforming code into energetic
          solutions.
        </Text>
        <Flex
          gap={4}
          justify="center"
          direction={{ base: "column", sm: "row" }}
          px={4}
        >
          <Button
            as="a"
            href="#projects"
            size="lg"
            colorScheme="purple"
            borderRadius="full"
            px={8}
            _hover={{ transform: "scale(1.05)" }}
          >
            View My Work
          </Button>
          <Button
            as="a"
            href="https://github.com/nabilaba"
            target="_blank"
            size="lg"
            variant="outline"
            borderRadius="full"
            leftIcon={<FaGithub />}
          >
            Github
          </Button>
        </Flex>
      </MotionBox>
    </Flex>
  );
}
