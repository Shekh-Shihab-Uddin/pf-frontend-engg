import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Button,
  IconButton,
  Textarea,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Toast from "@/components/Toast/Toast";

const ContactMe = () => {
  const { t } = useTranslation("contact");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    e.preventDefault();

    emailjs
      .sendForm(
        "service_lo585da",
        "template_bbj5hv4",
        formRef.current,
        "I9Ug4dCfjCE1QUUSS"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            Toast("success", "Message Sent Successfully");
          }
        },
        (error) => {
          if (error.status) {
            Toast("error", "Sending Message Failed");
          }
        }
      );

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Box color="primary.dark">
        <Heading mb={2} fontSize={"3xl"}>
          {t("getInTouch")}
        </Heading>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        p={10}
        color="secondary"
        justify={"space-evenly"}
        wrap="wrap"
      >
        <Flex
          mb={8}
          wrap="wrap"
          gap={4}
          direction={"column"}
          maxW={{ base: "fit-content", md: "300px" }}
        >
          <VStack
            alignItems="flex-start"
            borderWidth={"1px"}
            borderColor={"primary.light"}
            p={2}
            borderRadius={"2xl"}
          >
            <Link href="mailto:shekhshihabuddin@gmail.com" target="_blank">
              <IconButton
                as={MdEmail}
                h={{ base: 6, sm: 10 }}
                bg={"transparent"}
                color="gray.400"
              />
            </Link>
            <Text fontSize={{ base: "sm", sm: "md" }}>{t("email")}</Text>
            <Text fontSize={{ base: "sm", sm: "md" }}>
              shekhshihabuddin@gmail.com
            </Text>
            <Button
              color="secondary"
              fontSize={{ base: "sm", sm: "md" }}
              borderColor={"primary.light"}
              rounded={{ base: "md", sm: "xl" }}
            >
              <a
                href="mailto:shekhshihabuddin@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {t("sendMessage")}
              </a>
            </Button>
          </VStack>

          <VStack
            alignItems="flex-start"
            borderWidth={"1px"}
            borderColor={"primary.light"}
            p={2}
            borderRadius={"2xl"}
          >
            <Link
              href="https://telegram.me/ShihabUddin2222"
              target="_blank"
              focusRing={"none"}
            >
              <IconButton
                as={FaTelegram}
                h={{ base: 6, sm: 10 }}
                bg={"transparent"}
                color="gray.400"
                focusRing={"none"}
              />
            </Link>
            <Text fontSize={{ base: "sm", sm: "md" }}>{t("telegram")}</Text>
            <Text fontSize={{ base: "sm", sm: "md" }}>@ShihabUddin2222</Text>
            <Button
              color="secondary"
              fontSize={{ base: "sm", sm: "md" }}
              rounded={{ base: "md", sm: "xl" }}
              borderColor={"primary.light"}
            >
              <a href="https://telegram.me/ShihabUddin2222" target="_blank">
                {t("sendMessage")}
              </a>
            </Button>
          </VStack>
        </Flex>

        <form ref={formRef} onSubmit={sendEmail}>
          <Box color="primary.dark">
            <Heading mb={2} fontSize={{ base: "xl", md: "xl" }}>
              {t("directMessage")}
            </Heading>
          </Box>
          <HStack
            gap={4}
            justifyContent={"center"}
            flexDir={{ base: "column", md: "column" }}
            w={{ base: "100%", md: "400px" }}
            gapY={"24px"}
            p={2}
          >
            <Input
              type="text"
              name="name"
              placeholder={t("yourFullName")}
              required
              borderWidth={"1px"}
              borderColor={"primary.light"}
              p={2}
            />
            <Input
              type="email"
              name="email"
              placeholder={t("yourEmail")}
              required
              borderWidth={"1px"}
              borderColor={"primary.light"}
              p={2}
            />
            <Textarea
              name="message"
              placeholder={t("yourMessage")}
              required
              borderWidth={"1px"}
              borderColor={"primary.light"}
              p={2}
              resize="vertical"
              size={"lg"}
            />
            <Button type="submit" bg={"secondary"} color={"white"}>
              {t("sendMessage")}
            </Button>
          </HStack>
        </form>
      </Flex>
    </>
  );
};

export default ContactMe;
