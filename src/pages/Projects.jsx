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
import { useLang } from "../context/LanguageContext";

const MotionBox = motion(Box);

export default function Projects() {
  const [activeTab, setActiveTab] = useState("React");
  const { t } = useLang();

  const projectData = t.projects.items;

  return (
    <Container maxW="container.xl" py={20} id="projects">
      <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="black"
        mb={12}
        textAlign="center"
      >
        {t.projects.title}
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
            {tab === "Others" ? t.projects.others : tab}
          </Button>
        ))}
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projectData[activeTab].map((project, i) => (
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
                bgGradient:
                  "radial(rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
                zIndex: 0,
                pointerEvents: "none",
              }}
              _hover={{ boxShadow: "8px 8px 0px black" }}
              transition="all 0.2s"
            >
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
                <Text
                  fontSize="xs"
                  color="pink.300"
                  mb={4}
                  fontWeight="bold"
                  zIndex={1}
                >
                  {t.projects.role}: {project.role}
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
                  isDisabled={project.link === "#"}
                  _hover={{
                    boxShadow:
                      project.link === "#"
                        ? "2px 2px 0px black"
                        : "4px 4px 0px black",
                  }}
                  _active={{
                    transform: "translate(0px, 0px)",
                    boxShadow: "1px 1px 0px black",
                  }}
                >
                  {project.location
                    ? t.projects.viewMaterial
                    : t.projects.repository}
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
                    isDisabled={project.demo === "#"}
                    border="2px solid"
                    borderColor={project.demo === "#" ? "gray.600" : "pink.500"}
                    boxShadow="2px 2px 0px black"
                    _hover={{
                      boxShadow:
                        project.demo === "#"
                          ? "2px 2px 0px black"
                          : "4px 4px 0px black",
                      bg: project.demo === "#" ? "transparent" : "pink.500",
                      color: project.demo === "#" ? "gray.500" : "white",
                    }}
                    _active={{
                      transform: "translate(0px, 0px)",
                      boxShadow: "1px 1px 0px black",
                    }}
                  >
                    {t.projects.liveDemo}
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
