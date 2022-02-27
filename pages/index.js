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
      <Stack as="main">
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Heading mb="2">Hello, my name is Kien</Heading>
          <Text color={colorSecondary[colorMode]} textAlign="center">
            I'm Software Developer at Coveo. <br></br> I am a lifelong learner
            with a passion for solving problems via code.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
