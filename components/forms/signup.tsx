"use client";

import { useForm } from "react-hook-form";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSignup } from "@/hooks/useSignup";
import { getSignupFormFields } from "./data";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailConfirmed, setShowEmailConfirmed] = useState(false);
  const signUpMutation = useSignup();
  const formControls = getSignupFormFields(showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await signUpMutation.mutateAsync(data);
      setShowEmailConfirmed(true);
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
      <Stack spacing={8} mx={"auto"} py={12} px={6} width="35%">
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
          {!showEmailConfirmed ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                  {formControls.map((control: FormField) => (
                    <FormControl
                      key={control.id}
                      id={control.id}
                      isRequired={control.required}
                    >
                      <FormLabel>{control.label}</FormLabel>
                      <Input
                        {...register(control.name, {
                          required: control.required,
                        })}
                        type={control.type}
                      />
                    </FormControl>
                  ))}
                </Stack>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
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
              </form>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </>
          ) : (
            <div>
              Succesfully registered, please visit your email to verifiy your
              account.
            </div>
          )}
        </Box>
      </Stack>
    </Flex>
  );
}
