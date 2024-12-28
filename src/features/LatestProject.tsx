import ImageSlider from "@/components/slider/ImageSlider";
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomBadge from "@/components/badge/CustomBadge";
import { ProjectApi } from "@/api/projects";
import { VscGithub } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";

type ProjectType = {
  description: DescriptionType;
  id: string;
  images: ImageType[]; // Array of Image objects
  technologies: string[];
  title: string;
  siteLink: string;
  repoLink: string;
};

type ImageType = {
  downloadURL: string;
  lastModifiedTS: number;
  name: string;
  ref: string;
};
type DescriptionType = {
  "en-US": string;
  bn: string;
};

const LatestProject = () => {
  const [projects, setProjects] = useState<[] | ProjectType[]>([]);
  const { t, i18n } = useTranslation("projects");

  const projectsResponse = async () => {
    const response = await ProjectApi.fetchAll();
    if (Array.isArray(response) && response.length > 0) {
      setProjects(response);
    }
  };

  useEffect(() => {
    projectsResponse();
  }, []);

  const renderProjects = (project: ProjectType) => {
    return (
      <Flex>
        <Flex
          key={project.id}
          align={"flex-start"}
          direction={"column"}
          h={480}
          mb={4}
          w={{ base: "260px", sm: "330px" }}
        >
          <ImageSlider
            title={project.title}
            imageList={project?.images.map((img) => img.downloadURL)}
          />
          <Heading size="2xl" color="secondary" mt={3}>
            <Box
              display={"inline-block"}
              bg="secondary"
              w={25}
              h={1}
              mr={3}
              verticalAlign={"middle"}
            ></Box>
            {project.title}
          </Heading>

          <Text maxW={{ base: 250, sm: 330 }} h={"60px"} color={"secondary"}>
            {project?.description &&
              project?.description[i18n.language as keyof DescriptionType]}
          </Text>
          <HStack
            mt={2}
            maxW={350}
            h={155}
            wrap={"wrap"}
            direction={{ base: "column", md: "row" }}
          >
            {project.technologies.map((technology) => (
              <Flex key={technology}>
                <CustomBadge bg={technology}>{technology}</CustomBadge>
              </Flex>
            ))}
          </HStack>
        </Flex>
        <Flex direction={"column"} gapY={"2"} py={"5"}>
          <Link href={project.repoLink} target="_blank" focusRing={"none"}>
            <IconButton
              as={VscGithub}
              h={{ base: 7, sm: 9 }}
              color="gray.400"
              bg="transparent"
            />
          </Link>
          <Link href={project.siteLink} target="_blank" focusRing={"none"}>
            <IconButton
              as={TbWorldWww}
              h={{ base: 7, sm: 9 }}
              color="gray.400"
              bg="transparent"
            />
          </Link>
        </Flex>
      </Flex>
    );
  };

  return (
    <>
      <Flex direction={"column"} w="100%" mt={20} mb={20}>
        <Heading color={"primary.dark"} fontSize={"3xl"}>
          {t("latestProjects")}
        </Heading>
        <HStack
          wrap="wrap"
          mt={10}
          gap={14}
          direction={{ base: "column", md: "row" }}
          justify="space-evenly"
        >
          {projects?.map(renderProjects)}
        </HStack>
      </Flex>
    </>
  );
};

export default LatestProject;
