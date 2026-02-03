import { useState } from "react";
import {
  Container,
  Heading,
  Flex,
  Box,
  SimpleGrid,
  Text,
  Button,
  HStack,
  Tag,
  Circle,
} from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Projects() {
  const [activeTab, setActiveTab] = useState("React");

  const projectData = {
    React: [
      {
        title: "Pusat Ngoding",
        desc: "Platform pencarian mentor ngoding pribadi. Menghubungkan pembelajar dengan ahli.",
        tech: ["React", "JS"],
        link: "https://github.com/nabilaba/pusatngoding",
        demo: "#",
      },
      {
        title: "Binar Car Rental",
        desc: "Full-stack car rental application featuring secure auth, payments, and admin dashboard.",
        tech: ["React", "Bootstrap"],
        link: "#",
        demo: "#",
      },
      {
        title: "Parentheses Validation",
        desc: "Algorithm implementation using React to validate mathematical parentheses structure.",
        tech: ["React", "Algorithm"],
        link: "https://github.com/nabilaba/Parentheses-Validation",
        demo: "#",
      },
      {
        title: "Quiz With Trivia",
        desc: "Website kuis interaktif yang mengambil database soal dari Trivia API.",
        tech: ["React", "API"],
        link: "https://github.com/nabilaba/Quiz-With-Trivia",
        demo: "#",
      },
      {
        title: "FE - Lagu",
        desc: "Frontend implementation for music player interface.",
        tech: ["React", "UI"],
        link: "#",
        demo: "#",
      },
      {
        title: "The Hike",
        desc: "Interactive hiking trail exploration website.",
        tech: ["React", "Maps"],
        link: "#",
        demo: "#",
      },
    ],
    PHP: [
      {
        title: "PPDB SMA Muhammadiyah",
        desc: "Portal Penerimaan Peserta Didik Baru Online untuk SMA Muhammadiyah Al-Kautsar PK.",
        tech: ["Web", "System", "PHP"],
        link: "#",
        demo: "#",
      },
      {
        title: "HelloSchool",
        desc: "Academic management system for school administration and student grading.",
        tech: ["PHP", "MySQL"],
        link: "#",
        demo: "#",
      },
      {
        title: "Tugas Praktikum Web",
        desc: "Collection of web programming assignments and implementations.",
        tech: ["PHP", "HTML", "CSS"],
        link: "#",
        demo: "#",
      },
    ],
    Others: [
      {
        title: "Snake Game Advanced",
        desc: "Classic game rebuilt with pure JavaScript DOM manipulation. Features custom difficulty levels.",
        tech: ["JS", "DOM", "HTML"],
        link: "#",
        demo: "#",
      },
      {
        title: "N-Grader",
        desc: "Automated grading tool designed to streamline the evaluation process for assignments.",
        tech: ["Python", "Automation"],
        link: "#",
        demo: "#",
      },
      {
        title: "Mobile App Dev Test",
        desc: "Mobile application development test projects and components.",
        tech: ["Android", "Java/Kotlin"],
        link: "#",
        demo: "#",
      },
    ],
    Content: [
      {
        title: "AI Workshop Materials",
        desc: "Created instructional materials for 'Pemanfaatan AI' workshop. Designed slides on AI fundamentals, ethical impacts, and practical tools.",
        tech: ["Canva", "AI Literacy"],
        location: "SMP Birul Walidain Muhammadiyah, Sragen",
        date: "Nov 12, 2025",
        role: "Content Creator & Co-Facilitator",
        link: "#",
      },
      {
        title: "Graphic Design Training",
        desc: "Developed module 'Pelatihan Desain Grafis dengan Canva'. Created visual assets and step-by-step tutorials for beginners.",
        tech: ["Canva", "Design"],
        location: "SMP IT, Sragen",
        date: "Sept 25, 2024",
        role: "Content Creator & Support",
        link: "#",
      },
    ],
  };

  const getProjects = () => {
    if (activeTab === "React") return projectData.React;
    if (activeTab === "PHP") return projectData.PHP;
    if (activeTab === "Content") return projectData.Content;
    return projectData.Others;
  };

  return (
    <Container maxW="container.xl" py={20} id="projects">
      <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="black"
        mb={12}
        textAlign="center"
      >
        SELECTED WORKS
      </Heading>

      <Flex justify="center" mb={12} wrap="wrap" gap={2}>
        {Object.keys(projectData).map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            variant={activeTab === tab ? "solid" : "ghost"}
            colorScheme={activeTab === tab ? "purple" : "gray"}
            color={activeTab === tab ? "white" : "gray.400"}
            borderRadius="full"
            size="sm"
            px={8}
            fontWeight="bold"
            _hover={{
              bg: activeTab === tab ? "purple.600" : "whiteAlpha.200",
              color: "white",
            }}
          >
            {tab === "Others" ? "Native & Others" : tab}
          </Button>
        ))}
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {getProjects().map((project, i) => (
          <MotionBox
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Box
              bg="whiteAlpha.50"
              p={6}
              borderRadius="xl"
              border="3px solid"
              borderColor="black"
              boxShadow="6px 6px 0px black"
              h="full"
              display="flex"
              flexDirection="column"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, 0)",
                width: "150%",
                height: "100%",
                bgGradient: "radial(rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
                zIndex: 0,
                pointerEvents: "none",
              }}
              _hover={{
                transform: "translate(-2px, -2px)",
                boxShadow: "8px 8px 0px black",
              }}
              transition="all 0.2s"
            >
              {/* macOS Dots */}
              <HStack spacing={2} mb={4} zIndex={1}>
                <Circle size="10px" bg="#FF5F56" />
                <Circle size="10px" bg="#FFBD2E" />
                <Circle size="10px" bg="#27C93F" />
              </HStack>

              <Flex justify="space-between" align="start" mb={4} zIndex={1}>
                <Heading size="md" color="white" flex={1}>
                  {project.title}
                </Heading>
                {project.location && (
                  <Box ml={2}>
                    <SiCanva color="#00C4CC" size="24px" />
                  </Box>
                )}
              </Flex>

              <Text color="gray.400" fontSize="sm" mb={4} flex={1} zIndex={1}>
                {project.desc}
              </Text>

              {project.location && (
                <Text fontSize="xs" color="cyan.300" mb={2} zIndex={1}>
                  📍 {project.location}
                </Text>
              )}

              {project.date && (
                <Text fontSize="xs" color="purple.300" mb={2} zIndex={1}>
                  📅 {project.date}
                </Text>
              )}

              {project.role && (
                <Text fontSize="xs" color="pink.300" mb={4} fontWeight="bold" zIndex={1}>
                  Role: {project.role}
                </Text>
              )}

              <HStack wrap="wrap" spacing={2} mb={6} zIndex={1}>
                {project.tech.map((tag, index) => (
                  <Tag
                    key={index}
                    size="sm"
                    variant="subtle"
                    colorScheme="purple"
                    borderRadius="full"
                  >
                    {tag}
                  </Tag>
                ))}
              </HStack>

              <HStack spacing={4} mt="auto" zIndex={1}>
                <Button
                  as="a"
                  href={project.link}
                  target="_blank"
                  size="sm"
                  flex={1}
                  variant="solid"
                  colorScheme="purple"
                  leftIcon={project.location ? undefined : <FaGithub />}
                  border="2px solid black"
                  boxShadow="2px 2px 0px black"
                  _hover={{
                    transform: "translate(-2px, -2px)",
                    boxShadow: "4px 4px 0px black",
                  }}
                  _active={{
                    transform: "translate(0px, 0px)",
                    boxShadow: "1px 1px 0px black",
                  }}
                >
                  {project.location ? "View Material" : "Repository"}
                </Button>

                {!project.location && (
                  <Button
                    as="a"
                    href={project.demo}
                    target="_blank"
                    size="sm"
                    flex={1}
                    variant="outline"
                    colorScheme="pink"
                    leftIcon={<FaGlobe />}
                    border="2px solid"
                    borderColor="pink.500"
                    boxShadow="2px 2px 0px black"
                    _hover={{
                      transform: "translate(-2px, -2px)",
                      boxShadow: "4px 4px 0px black",
                      bg: "pink.500",
                      color: "white"
                    }}
                    _active={{
                      transform: "translate(0px, 0px)",
                      boxShadow: "1px 1px 0px black",
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </HStack>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Container>
  );
}
