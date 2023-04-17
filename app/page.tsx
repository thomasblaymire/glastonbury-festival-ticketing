"use client";

import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <Box
      w="100%"
      minH="100vh"
      bgImage="url(/hero.svg)"
      bgPosition="50%"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundColor="#141518"
    >
      <Hero />
    </Box>
  );
}
