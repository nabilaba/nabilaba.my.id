import { Box, Container, Heading, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <Box
      bg="blackAlpha.800"
      py={10}
      mt={10}
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      id="contact"
    >
      <Container maxW="container.md" textAlign="center">
        <Heading size="lg" mb={6}>
          Let's Build Something Amazing
        </Heading>
        <Text color="gray.400" mb={8}>
          Open for collaboration or just a chat about technology and React.
        </Text>
        <Flex justify="center" gap={6} mb={8}>
          <Link href="mailto:nabilazizbimaanggita@gmail.com">
            <Icon
              as={FaEnvelope}
              boxSize={8}
              _hover={{ color: "cyan.400" }}
              transition="color 0.2s"
            />
          </Link>
          <Link href="https://github.com/nabilaba" isExternal>
            <Icon
              as={FaGithub}
              boxSize={8}
              _hover={{ color: "purple.400" }}
              transition="color 0.2s"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/nabilaba/" isExternal>
            <Icon
              as={SiLinkedin}
              boxSize={8}
              _hover={{ color: "blue.400" }}
              transition="color 0.2s"
            />
          </Link>
        </Flex>
        <Text fontSize="sm" color="gray.600">
          © {new Date().getFullYear()} Nabil Aziz Bima Anggita (Nabil Aba).{" "}
          <br />
          Designed with Heart wkwkwk.
        </Text>
      </Container>
    </Box>
  );
}
