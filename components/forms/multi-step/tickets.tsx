import { useState, ChangeEvent } from "react";
import {
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Button,
  VStack,
  HStack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";

type Friend = {
  firstname: string;
  lastname: string;
  code: string;
};

const verifyFriendCode = async (code: string): Promise<Friend | null> => {
  // const response = await fetch(`/api/verifyFriendCode?code=${code}`);
  // const data = await response.json();
  // return data;
  return { firstname: "John", lastname: "Doe", code: "GLASTO-12345678" };
};

export const TicketsForm = () => {
  const { control, handleSubmit } = useForm();
  const [friendCode, setFriendCode] = useState<string>("");
  const [friends, setFriends] = useState<Friend[]>([]);

  const addFriend = async () => {
    if (friends.length >= 5) {
      alert("Maximum 5 friends allowed");
      return;
    }

    const friendData = await verifyFriendCode(friendCode);
    if (friendData) {
      setFriends([...friends, friendData]);
      setFriendCode("");
    } else {
      alert("Invalid friend code");
    }
  };

  const deleteFriend = (code: string) => {
    setFriends(friends.filter((friend) => friend.code !== code));
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2rem">
        Tickets Registration
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel fontSize="sm" fontWeight="md" color="gray.700">
            Add up to 5 additional ticketholders (optional)
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon>GLASTO-</InputLeftAddon>
            <Input
              value={friendCode}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFriendCode(e.target.value)
              }
              type="text"
              placeholder="12345678"
              focusBorderColor="brand.400"
              rounded="md"
            />
            <Button onClick={addFriend}>Add Friend</Button>
          </InputGroup>
        </FormControl>
      </SimpleGrid>
      <VStack mt="4" spacing="2">
        {friends.map((friend) => (
          <HStack key={friend.code}>
            <Text>
              {friend.firstname} {friend.lastname} ({friend.code})
            </Text>
            <IconButton
              icon={<AiFillDelete />}
              aria-label="Delete friend"
              size="xs"
              onClick={() => deleteFriend(friend.code)}
            />
          </HStack>
        ))}
      </VStack>
    </>
  );
};
