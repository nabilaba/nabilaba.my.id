import { Container, Heading, SimpleGrid, Box, Flex, Icon, Text, Link, Badge } from "@chakra-ui/react";
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Publications() {
  const papers = [
    {
      title:
        "Digitalisasi Sosialisasi Kegiatan Pada Ranting Muhammadiyah Desa Ngemplak...",
      journal: "BUDIMAS: Jurnal Pengabdian Masyarakat",
      year: "2024",
      authors: "I.C. Utomo, D. Priyawati, Nabil Aziz Bima Anggita",
      link: "https://jurnal.stie-aas.ac.id/index.php/budimas/article/view/...",

      description:
        "Developing an information system to digitalize socialization activities for the Muhammadiyah branch in Ngemplak village.",
    },
    {
      title: "Implementasi MERN Stack pada Pengembangan Sistem",
      journal: "Jurnal Swabumi (Vol 11, No 2)",
      year: "2023",
      authors: "Nabil Aziz Bima Anggita, et al.",
      link: "https://ejournal.bsi.ac.id/jurnal/index.php/swabumi/article/view/15965/0",
      description:
        "Published research detailing the implementation of MongoDB, Express, React, and Node.js in modern web system development.",
    },
    {
      title: "Sistem Penerimaan Peserta Didik Baru (PPDB) Online",
      journal: "Eprints UMS",
      year: "2023",
      authors: "Nabil Aziz Bima Anggita",
      link: "https://eprints.ums.ac.id/110545/",
      description:
        "Research and development of a web-based admission system for SMA Muhammadiyah Al-Kautsar PK, streamlining the registration process.",
    },
  ];

  return (
    <Container maxW="container.lg" py={20} id="publications">
      <Heading
        textAlign="center"
        size="2xl"
        mb={12}
        bgGradient="linear(to-r, cyan.400, pink.400)"
        bgClip="text"
      >
        PUBLICATIONS
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {papers.map((paper, index) => (
          <MotionBox
            key={index}
            p={6}
            bg="whiteAlpha.50"
            borderRadius="xl"
            border="1px solid"
            borderColor="whiteAlpha.100"
            whileHover={{
              y: -5,
              borderColor: "purple.400",
              bg: "whiteAlpha.100",
            }}
          >
            <Flex justify="space-between" align="start" mb={4}>
              <Icon as={FaBook} color="purple.400" boxSize={6} />
              <Badge colorScheme="purple" variant="outline">
                {paper.year}
              </Badge>
            </Flex>
            <Heading size="md" mb={2} color="white">
              {paper.title}
            </Heading>
            <Text color="cyan.400" fontSize="sm" fontWeight="bold" mb={2}>
              {paper.journal}
            </Text>
            <Text color="gray.400" fontSize="sm" mb={4}>
              {paper.description}
            </Text>
            <Link
              href={paper.link}
              isExternal
              color="whiteAlpha.700"
              _hover={{ color: "cyan.300" }}
              display="flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
            >
              Read Paper <Icon as={FaExternalLinkAlt} boxSize={3} />
            </Link>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Container>
  );
};
