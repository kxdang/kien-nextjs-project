import React from "react";
import {
  Flex,
  Stack,
  useColorMode,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { parseISO, format } from "date-fns";

import Container from "../components/Container";

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="900px"
          maxWidth="700px"
          px={4}
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex justify="space-between" w="100%" mb={4}>
            <Text fontSize="sm" color={textColor[colorMode]}>
              Kien Dang
            </Text>
            <Text fontSize="sm" color={textColor[colorMode]}>
              {frontMatter.readingTime.text} -{" "}
              {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
            </Text>
          </Flex>
          {children}
        </Flex>
      </Stack>
    </Container>
  );
}
