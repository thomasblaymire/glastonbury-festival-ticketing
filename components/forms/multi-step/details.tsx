import { useForm, Controller } from "react-hook-form";
import {
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

export const PersonalDetailsForm = () => {
  const { control } = useForm();

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Controller
          name="country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              id="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </Select>
          )}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Controller
          name="street_address"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              id="street_address"
              autoComplete="street-address"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          )}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Controller
          name="city"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              id="city"
              autoComplete="city"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          )}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Controller
          name="state"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              id="state"
              autoComplete="state"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          )}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Controller
          name="postal_code"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              id="postal_code"
              autoComplete="postal-code"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          )}
        />
      </FormControl>
    </>
  );
};
