import Link from "next/link";
import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { heroTitle, heroDescription } from "@/lib/data";

export function Hero() {
  return (
    <Container color="#FFF" paddingY="6rem">
      <Flex alignItems="center" direction="column">
        <Heading as="h1" marginBottom="2rem">
          {heroTitle}
        </Heading>
        <Text marginBottom="4rem" maxWidth="38.5rem">
          {heroDescription}
        </Text>
        <Link href="/signup">
          <Button
            background="linear-gradient(265.56deg,#246cf9 -.27%,#1e68f6 -.26%,#0047d0 98.59%);"
            padding="1rem 2rem"
            borderRadius="4rem"
          >
            Register
          </Button>
        </Link>
      </Flex>
    </Container>
  );
}
