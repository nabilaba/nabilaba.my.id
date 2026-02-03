import {
  ChakraProvider,
  Box,
  Flex,
  Link,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Hero from "./Hero";
import theme from "./theme";
import Publications from "./Publications";
import AIPerspective from "./AIPerspective";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import IntellectualProperty from "./IntellectualProperty";
import Experiences from "./Experiences";
import BackgroundDecorations from "./BackgroundDecorations";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = [
    "About",
    "Experience",
    "Publications",
    "IPR",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex="100"
      backdropFilter="blur(10px)"
      bg="rgba(10, 10, 18, 0.8)"
    >
      <Flex
        p={4}
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
      >
        <Link
          href="#"
          size="md"
          bgGradient="linear(to-r, cyan.400, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
          cursor="pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          NABIL ABA
        </Link>

        <HStack
          spacing={6}
          display={{ base: "none", md: "flex" }}
          fontSize="sm"
          fontWeight="bold"
        >
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              _hover={{ color: "cyan.400", textDecoration: "none" }}
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </HStack>

        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onOpen}
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.300" }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#0a0a12" color="white">
          <DrawerCloseButton />
          <DrawerBody pt={12}>
            <VStack spacing={8} align="center">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  fontSize="xl"
                  fontWeight="bold"
                  _hover={{ color: "cyan.400", textDecoration: "none" }}
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BackgroundDecorations />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Publications />
        <IntellectualProperty />
        <Skills />
        <Projects />
        <AIPerspective />
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
