"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpMutation = useMutation(async (data) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error signing up");
    }

    return response.json();
  });

  const onSubmit = async (data: any) => {
    try {
      await signUpMutation.mutateAsync(data);
      router.push("/"); // Redirect to the desired page after successful signup
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  {...register("firstName", { required: true })}
                  type="text"
                />
              </FormControl>

              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  {...register("lastName", { required: true })}
                  type="text"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  {...register("email", { required: true })}
                  type="email"
                />
              </FormControl>

              <Input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
              />

              <Button type="submit" /*...*/>Sign up</Button>
            </Stack>
          </form>
        </Box>
        <Stack spacing={10} pt={2}>
          <Button
            loadingText="Submitting"
            size="lg"
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Sign up
          </Button>
        </Stack>
        <Stack pt={6}>
          <Text align={"center"}>
            Already a user? <Link color={"blue.400"}>Login</Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
