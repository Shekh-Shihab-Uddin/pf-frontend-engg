import { Flex, Heading } from "@chakra-ui/react";

const Badge: React.FC<{ bg: string; children: React.ReactNode }> = ({
  bg,
  children,
}) => {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        w={{ base: "80px", sm: "104px" }}
        size={"sm"}
        bg={bg}
        color="white"
        borderRadius={3}
        p={{ base: "1", sm: "2" }}
        textAlign={"center"}
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
      >
        {children}
      </Heading>
    </Flex>
  );
};

export default Badge;
