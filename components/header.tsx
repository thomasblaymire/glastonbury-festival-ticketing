import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { WrapItem, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Logo } from "./logo";

interface HeaderProps {
  isBasic?: boolean;
}

export function Header({ isBasic }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTablet] = useMediaQuery("(min-width: 780px)");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <header>
      <Box
        height="5rem"
        position="sticky"
        padding={isMobile ? 4 : undefined}
        borderBottom="solid 1px #353945"
      >
        <Flex
          justifyContent="space-between"
          width={{
            md: "720px",
            lg: "960px",
            xl: "1200px",
          }}
          margin="0 auto"
          height="100%"
          alignItems="center"
        >
          <Box>
            <Logo />
          </Box>
        </Flex>
      </Box>
    </header>
  );
}
