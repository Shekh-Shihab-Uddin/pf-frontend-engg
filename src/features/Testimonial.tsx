import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TestimonyApi } from "@/api/testimonial";
import TestimonySlider from "@/components/slider/TestimonySlider";
import { TestimonialPropsType } from "@/interfaces/testimonial";

const Testimony = () => {
  const [testimonials, setTestimonials] = useState<[] | TestimonialPropsType[]>(
    []
  );
  const { t } = useTranslation("testimonial");

  const testimonialsResponse = async () => {
    const response = await TestimonyApi.fetchAll();
    if (Array.isArray(response) && response.length > 0) {
      const formattedResponse: TestimonialPropsType[] = response.map(
        (item) => ({
          id: item.id,
          name: item.name,
          designation: item.designation,
          image: item.image,
          testimony: item.testimony,
        })
      );
      setTestimonials(formattedResponse);
    }
  };

  useEffect(() => {
    testimonialsResponse();
  }, []);

  const renderTestimonials = () => {
    return <TestimonySlider testimonials={testimonials} />;
  };

  return (
    <>
      <Flex direction={"column"} mt={20} mb={20}>
        <Heading color={"primary.dark"} fontSize={"3xl"}>
          {t("testimonial")}
        </Heading>
        <Flex justify={"center"} mt={10}>
          {testimonials && renderTestimonials()}
        </Flex>
      </Flex>
    </>
  );
};

export default Testimony;
