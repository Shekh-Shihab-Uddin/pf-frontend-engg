import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import CustomBadge from "@/components/badge/CustomBadge";

const Landing = () => {
  const { t } = useTranslation("home");
  const leftSection = (
    <>
      <Flex
        direction={"column"}
        width={{ md: "1/2" }}
        textAlign={{ base: "center", sm: "left" }}
        mt={{ base: "20px", md: "0px" }}
        display={{ base: "flex", md: "block" }}
        alignItems="center"
      >
        <Box>
          <Image
            src="/me.jpg"
            height={{ base: "100px", sm: "200px", md: "250px" }}
            width={{ base: "100px", sm: "200px", md: "250px" }}
            rounded={{ base: "4xl", md: "full" }}
            mb={{ base: "10px", md: "20px" }}
            shadow="md"
            mr="20px"
            p="5px"
          />
        </Box>
        <Box ml="10px">
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            lineHeight="100%"
            color="primary.dark"
            whiteSpace="pre-line"
          >
            {t("greetings")}
            <Text as="span" color="primary.dark"></Text>
          </Heading>
          <Text fontSize="xl" color="primary.dark">
            {t("iAm")}
            <Text as="span" fontWeight="bold">
              {t("job")}
            </Text>
            <br /> {t("location")}
          </Text>
        </Box>
        <HStack mt={14} wrap={"wrap"}>
          {SKILLS.map((skill) => (
            <Flex key={skill.label}>
              <CustomBadge bg={skill.label}>{skill.label}</CustomBadge>
            </Flex>
          ))}
        </HStack>
      </Flex>
    </>
  );
  const rightSection = (
    <>
      <Box>
        <HStack justify={"center"} pt={2}>
          <Image
            src="/human.png"
            minWidth={{ base: 1 / 3, md: 1 / 2 }}
            maxHeight={{ base: "350px", md: "650px" }}
            ml="20px"
          />
          <Badge
            bg="primary.light"
            color={"white"}
            borderRadius={7}
            p={{ base: 1, sm: 2 }}
            textAlign="center"
            fontWeight={{ base: "normal", md: "bold" }}
            transform={{ base: "none", sm: "skewY(28deg)" }}
            borderTopWidth={{ base: "4px", md: "8px" }}
            borderRightWidth={{ base: "3px", md: "5px" }}
            borderColor="primary.dark"
            height={{ base: "70px", md: "250px" }}
            width="fit-content"
          >
            <Text fontSize={{ base: "xs", sm: "md", md: "xl" }}>
              <Text
                as="span"
                fontSize={{ base: "xs", sm: "md", md: "lg" }}
                lineHeight="150%"
              >
                {t("expOf")} <br />{" "}
              </Text>
              {new Date().getFullYear() - 2022} <br />
              <Text as="span" fontSize={{ base: "xs", sm: "md", md: "lg" }}>
                {t("years")}
              </Text>
            </Text>
          </Badge>
        </HStack>
      </Box>
    </>
  );
  return (
    <>
      <Flex direction={"column"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-evenly"
          mt={{ base: "8px", md: "50px" }}
        >
          {leftSection}
          {rightSection}
        </Flex>
      </Flex>
    </>
  );
};

export default Landing;

const SKILLS = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "TypeScript" },
  { label: "React" },
  { label: "Tailwind" },
  { label: "Bootstrap" },
  { label: "Redux" },
  { label: "ChakraUI" },
  { label: "Firebase" },
];
