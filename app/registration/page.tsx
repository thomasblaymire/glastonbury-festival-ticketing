"use client";

import { Box } from "@chakra-ui/react";
import { RegistrationForm } from "@/components/forms/multi-step";

export default async function Registration() {
  return (
    <Box mt="4rem">
      <RegistrationForm />
    </Box>
  );
}
