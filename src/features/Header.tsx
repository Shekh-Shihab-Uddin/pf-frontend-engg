import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import MyCV from "../assets/CV_Shihab_FEE.pdf";

const Header = () => {
  const { t, i18n } = useTranslation("home");
  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language != "en-US" ? "en-US" : "bn");
  };
  const handleLogoClick = () => {
    window.open(MyCV, "_blank");
  };
  return (
    <div>
      <>
        <Flex justify="space-between">
          <Image
            src="/logo.png"
            h={{ base: 10, md: 14 }}
            background="gray.100"
            rounded="lg"
            shadow="sm"
            p="5px"
            mr={{ base: "5", sm: "0" }}
            cursor={"pointer"}
            onClick={handleLogoClick}
          />
          <HStack>
            <Image
              src="/message.png"
              h={{ base: 8, md: 10 }}
              mr={{ base: "2", sm: "0" }}
            />
            <Link
              href="mailto:shekhshihabuddin@gmail.com?subject=Reaching you from yout portfolio"
              color="black"
              fontSize={{ base: "sm", md: "xl" }}
              fontWeight={{ base: "normal", md: "bold" }}
            >
              {t("hireMe")}
            </Link>
            <Image
              pl={8}
              src={i18n.language === "en-US" ? "/en.png" : "/bn.png"}
              h={{ base: 8, md: 10 }}
              cursor="pointer"
              onClick={switchLanguage}
            />
          </HStack>
        </Flex>
      </>
    </div>
  );
};

export default Header;
