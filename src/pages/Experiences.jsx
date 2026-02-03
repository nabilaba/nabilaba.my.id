import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaCode, FaTrophy, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Experiences() {
  const experiences = [
    {
      company: "GiNaSTel",
      role: "Staff Accounting",
      date: "Jun 2023 - Jul 2023",
      description:
        "Managed daily financial records and operational revenue calculations for 30+ product outlets. Ensured accuracy in sorting and packaging logistics for large-scale orders.",
      type: "Work",
      icon: FaChartLine,
    },
    {
      company: "SYNRGY Academy (BCA)",
      role: "Full-Stack Web Development",
      date: "Aug 2022 - Feb 2023",
      description:
        "Mastered the MERN stack (MongoDB, Express, React, Node.js). Built scalable frontend and backend websites capable of standalone deployment. Practice next.js and PostgreSQL.",
      type: "Bootcamp",
      icon: FaCode,
    },
    {
      company: "Kementerian Kominfo",
      role: "Cyber Security Analyst",
      date: "Aug 2022 - Dec 2022",
      description:
        "Selected as the 50 Best Apprentices. Collaborated on weekly cyber threat analysis articles and built a dedicated platform to publish group research results.",
      type: "Internship",
      highlight: true,
      icon: FaTrophy,
      achievements: ["🏆 Selected as 50 Best Apprentices"],
    },
    {
      company: "Ruangguru x Kampus Merdeka",
      role: "Frontend Engineering",
      date: "Feb 2022 - Jun 2022",
      description:
        "Top 5 Finalist (out of 80 groups). Led the final assignment team, built interactive web apps using ReactJS, and developed game logic with pure JavaScript/DOM.",
      type: "Bootcamp",
      highlight: true,
      icon: FaTrophy,
      achievements: ["🏆 Top 5 Finalist", "📜 Final GPA: 4.00 (Perfect Score)"],
    },
  ];

  return (
    <Container maxW="container.lg" py={20} id="experience">
      <Heading
        textAlign="center"
        size="2xl"
        mb={16}
        bgGradient="linear(to-r, cyan.400, pink.400)"
        bgClip="text"
      >
        PROFESSIONAL JOURNEY
      </Heading>

      <VStack spacing={8} align="stretch" position="relative">
        <Box
          position="absolute"
          left={{ base: "20px", md: "50%" }}
          top="0"
          bottom="0"
          w="2px"
          bg="whiteAlpha.200"
          transform={{ md: "translateX(-50%)" }}
          zIndex={0}
        />

        {experiences.map((exp, index) => (
          <Flex
            key={index}
            direction={{
              base: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
            justify="space-between"
            align="center"
            position="relative"
            zIndex={1}
          >
            <MotionBox
              w={{ base: "calc(100% - 50px)", md: "45%" }}
              ml={{ base: "50px", md: 0 }}
              p={6}
              bg={exp.highlight ? "rgba(49, 151, 149, 0.1)" : "whiteAlpha.100"}
              borderRadius="xl"
              border="1px solid"
              borderColor={exp.highlight ? "cyan.500" : "whiteAlpha.200"}
              whileHover={{ scale: 1.02, borderColor: "cyan.400" }}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "20px",
                [index % 2 === 0 ? "right" : "left"]: { md: "-10px" },
                left: { base: "-10px", md: "auto" },
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                [index % 2 === 0 ? "borderLeft" : "borderRight"]: {
                  md: `10px solid ${
                    exp.highlight ? "#2C7A7B" : "rgba(255, 255, 255, 0.08)"
                  }`,
                },
                borderRight: {
                  base: `10px solid ${
                    exp.highlight ? "#2C7A7B" : "rgba(255, 255, 255, 0.08)"
                  }`,
                  md: "none",
                },
              }}
            >
              <HStack justify="space-between" mb={2}>
                <Badge
                  colorScheme={exp.highlight ? "cyan" : "gray"}
                  variant="solid"
                  borderRadius="full"
                  px={3}
                >
                  {exp.type}
                </Badge>
                <HStack color="gray.400" fontSize="sm">
                  <Icon as={FaCalendarAlt} />
                  <Text>{exp.date}</Text>
                </HStack>
              </HStack>
              <Heading
                size="md"
                color="white"
                mb={1}
                display="flex"
                alignItems="center"
                gap={2}
              >
                {exp.role}
                {exp.highlight && (
                  <Icon as={FaTrophy} color="yellow.400" w={4} h={4} />
                )}
              </Heading>
              <Text color="purple.300" fontWeight="bold" mb={3} fontSize="sm">
                @ {exp.company}
              </Text>
              <Text color="gray.400" fontSize="sm">
                {exp.description}
              </Text>

              {/* Added Achievement Section using original Badge styles */}
              {exp.achievements && (
                <HStack spacing={2} mt={3} wrap="wrap">
                  {exp.achievements.map((ach, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      colorScheme={exp.highlight ? "yellow" : "cyan"}
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="md"
                      textTransform="none"
                    >
                      {ach}
                    </Badge>
                  ))}
                </HStack>
              )}
            </MotionBox>

            <Box
              position="absolute"
              left={{ base: "20px", md: "50%" }}
              transform="translateX(-50%)"
              w="10"
              h="10"
              bg="#0a0a12"
              borderRadius="full"
              border="2px solid"
              borderColor="cyan.400"
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex={2}
            >
              <Icon as={exp.icon} color="cyan.400" w={4} h={4} />
            </Box>

            <Box w={{ base: "0", md: "45%" }} />
          </Flex>
        ))}
      </VStack>
    </Container>
  );
}
