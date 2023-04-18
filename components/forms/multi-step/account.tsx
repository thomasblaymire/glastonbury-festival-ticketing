import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  avatar: FileList;
}

export const AccountForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { handleSubmit, control } = useForm<FormData>();
  const [preview, setPreview] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
  };

  const handleAvatarChange = (files: any) => {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          setPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl id="avatar">
          <FormLabel>Avatar</FormLabel>
          <Controller
            name="avatar"
            control={control}
            render={({ field }) => {
              const { value, ...fieldWithoutValue } = field;
              return (
                <input
                  type="file"
                  accept="image/*"
                  {...fieldWithoutValue}
                  onChange={(e) => {
                    if (e.target.files) {
                      handleAvatarChange(e.target.files);
                    }
                    field.onChange(e);
                  }}
                />
              );
            }}
          />
          {preview && (
            <Box>
              <Text>Preview:</Text>
              <Image
                src={preview}
                alt="Avatar preview"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </Box>
          )}
        </FormControl>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};
