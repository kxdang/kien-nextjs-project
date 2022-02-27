import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export default function Blog({ post }) {
  return (
    <>
      <Head>
        <title>Blog - Kien Dang</title>
      </Head>
      <Container>
        <Stack as="main">
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  // TODO fetch blog posts
  return { props: { posts } };
}
