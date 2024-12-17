import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Box, Image, Text, Flex, Float, Span } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { TestimonialPropsType, DuoLangType } from "@/interfaces/testimonial";
import { Blockquote, BlockquoteIcon } from "@/components/ui/blockquote";

const TestimonySlider = ({
  testimonials,
}: {
  testimonials: TestimonialPropsType[];
}) => {
  const { i18n } = useTranslation("testimonial");

  const renderTestimonials = (
    testimonial: TestimonialPropsType,
    index: number
  ) => {
    return (
      <>
        <Flex
          direction={"column"}
          w={{ base: "280px", sm: "350px", md: "380px" }}
        >
          <Flex justify={"center"} key={index}>
            <Image
              src={testimonial.image[0].downloadURL}
              height={{ base: "100px", sm: "200px", md: "250px" }}
              width={{ base: "100px", sm: "200px", md: "250px" }}
              rounded={{ base: "4xl", md: "full" }}
              mb={{ base: "10px", md: "20px" }}
              mt={{ base: "5px", md: "10px" }}
              shadow="md"
            />
          </Flex>
          <Flex direction={"column"} p={5} lineHeight="150%">
            <Blockquote
              variant="plain"
              colorPalette="teal"
              icon={
                <Float placement="top-start" offsetY="2">
                  <BlockquoteIcon />
                </Float>
              }
              cite={
                <Flex
                  mt="2"
                  gap="3"
                  flexDir={"column"}
                  color={"secondary"}
                  textAlign={"right"}
                >
                  <Span
                    fontWeight="medium"
                    fontSize={{ base: "lg", sm: "2xl" }}
                    lineHeight="110%"
                    maxW={{ base: 300, sm: 320 }}
                  >
                    <Box
                      display={"inline-block"}
                      bg="secondary"
                      w={25}
                      h={1}
                      verticalAlign={"middle"}
                    ></Box>
                    {testimonial?.name?.[i18n.language as keyof DuoLangType]}
                  </Span>
                  <Span
                    fontWeight={{ base: "semibold", sm: "bold" }}
                    maxW={{ base: 300, sm: 320 }}
                  >
                    {
                      testimonial?.designation[
                        i18n.language as keyof DuoLangType
                      ]
                    }
                  </Span>
                </Flex>
              }
            >
              <Text
                maxW={{ base: 300, sm: 320 }}
                h="100%"
                color={"secondary"}
                fontSize={{ base: "md", sm: "xl" }}
                mt={2}
                textAlign={"justify"}
              >
                {testimonial?.testimony[i18n.language as keyof DuoLangType]}
              </Text>
            </Blockquote>
          </Flex>
        </Flex>
      </>
    );
  };
  const slider = (
    <Box
      w={{ base: "280px", sm: "350px", md: "400px" }}
      pt={"10px"}
      boxShadow="lg"
      borderRadius="xl"
    >
      <Slide infinite={false} arrows={testimonials.length > 1} autoplay={false}>
        {testimonials.map((testimonial, index) =>
          renderTestimonials(testimonial, index)
        )}
      </Slide>
    </Box>
  );

  return <>{slider}</>;
};

export default TestimonySlider;
