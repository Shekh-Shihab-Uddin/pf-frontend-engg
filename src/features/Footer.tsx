import { Text, HStack, IconButton, Link, Box } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <Box background={"dark"}>
        <HStack justify="center" h={"70px"}>
          <Link
            href="https://wa.me/+8801738216060"
            target="_blank"
            focusRing={"none"}
          >
            <IconButton
              as={IoLogoWhatsapp}
              h={10}
              bg={"transparent"}
              color="gray.400"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/shekh-shihab-uddin-8195b926a/"
            target="_blank"
            focusRing={"none"}
          >
            <IconButton
              as={BsLinkedin}
              h={9}
              color="gray.400"
              bg="transparent"
            />
          </Link>
          <Link
            href="https://github.com/Shekh-Shihab-Uddin"
            target="_blank"
            focusRing={"none"}
          >
            <IconButton
              as={VscGithub}
              h={9}
              color="gray.400"
              bg="transparent"
            />
          </Link>
        </HStack>
        <Box textAlign={"center"}>
          <Text color="white" fontSize="sm" pb={2}>
            © {new Date().getFullYear()} Shekh Shihab Uddin
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
