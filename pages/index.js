import Head from "next/head";
import Container from "../components/Container";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Kien Dang</title>
      </Head>
      <Stack>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Heading>Hello, my name is Kien</Heading>
          <Text color={colorSecondary[colorMode]}>
            {" "}
            I am a software developer at Coveo
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
