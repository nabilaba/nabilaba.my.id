import {
  Container,
  Heading,
  VStack,
  Box,
  Flex,
  HStack,
  Text,
  Badge,
  Button,
  Icon,
} from "@chakra-ui/react";
import {
  FaCertificate,
  FaCopyright,
  FaUserTie,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function IntellectualProperty() {
  const iprs = [
    {
      id: "EC002025152998",
      title:
        "Aplikasi Layanan Pendaftaran Kartu Anggota Muhammadiyah PCM Kebakkramat",
      year: "2025",
      type: "Computer Program",
      role: "Inventor",
      lead: "Dedi Gunawan, Ph.D.",
    },
    {
      id: "EC00202423523",
      title:
        "Sistem Informasi Presensi Kehadiran Dan Catatan Kegiatan Harian Guru MIM Taraman Berbasis Web",
      year: "2024",
      type: "Computer Program",
      role: "Inventor",
      lead: "Dedi Gunawan, Ph.D.",
    },
    {
      id: "EC00202343330",
      title:
        "Sistem Informasi Penerimaan Peserta Didik Baru (PPDB) SMA Muhammadiyah Al Kautsar Program Khusus Kartasura Berbasis Web",
      year: "2023",
      type: "Computer Program",
      role: "Inventor",
      lead: "Dedi Gunawan, Ph.D.",
    },
  ];

  return (
    <Container maxW="container.lg" py={10} id="ipr">
      <Heading
        textAlign="center"
        size="xl"
        mb={12}
        bgGradient="linear(to-r, orange.400, yellow.400)"
        bgClip="text"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        INTELLECTUAL PROPERTY
      </Heading>

      <VStack spacing={6} align="stretch">
        {iprs.map((ipr, index) => (
          <MotionBox
            key={index}
            p={8}
            bgGradient="linear(to-br, rgba(237, 137, 54, 0.05), rgba(0, 0, 0, 0))"
            borderRadius="2xl"
            border="1px solid"
            borderColor="orange.500"
            boxShadow="0 0 20px rgba(237, 137, 54, 0.1)"
            whileHover={{ scale: 1.01, borderColor: "orange.400" }}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="start"
              justify="space-between"
              gap={6}
            >
              <Box>
                <HStack mb={2}>
                  <Badge
                    colorScheme="orange"
                    fontSize="sm"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    HAK CIPTA (COPYRIGHT)
                  </Badge>
                  <Badge
                    colorScheme="purple"
                    fontSize="sm"
                    px={3}
                    py={1}
                    borderRadius="full"
                    variant="outline"
                  >
                    ID: {ipr.id}
                  </Badge>
                </HStack>
                <Heading size="md" mb={3} color="white">
                  {ipr.title}
                </Heading>
                <HStack
                  spacing={6}
                  color="gray.300"
                  fontSize="sm"
                  flexWrap="wrap"
                >
                  <HStack>
                    <Icon as={FaUserTie} color="orange.400" />
                    <Text>
                      Role:{" "}
                      <Text as="span" fontWeight="bold" color="white">
                        {ipr.role}
                      </Text>
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaCopyright} color="orange.400" />
                    <Text>Year: {ipr.year}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaCertificate} color="orange.400" />
                    <Text>Lead: {ipr.lead}</Text>
                  </HStack>
                </HStack>
              </Box>
            </Flex>
          </MotionBox>
        ))}
      </VStack>

      <Flex justify="center" mt={8}>
        <Button
          as="a"
          href="https://sinta.kemdiktisaintek.go.id/authors/profile/5972541/?view=iprs"
          target="_blank"
          colorScheme="orange"
          variant="outline"
          size="sm"
          rightIcon={<FaExternalLinkAlt />}
          _hover={{ bg: "orange.500", color: "white" }}
        >
          Verify Records on SINTA
        </Button>
      </Flex>
    </Container>
  );
}
