import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Box, Image, VStack } from "@chakra-ui/react";

import { useState } from "react";
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";

const ImageSlider = (props: { title: string; imageList: string[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const renderImages = () => {
    return props.imageList.map((imageLink, index) => (
      <Image
        src={imageLink}
        borderRadius="xl"
        key={index}
        onClick={() => {
          setCurrentImageIndex(index);
          setShowModal(true);
        }}
      />
    ));
  };
  const slider = (
    <Box
      w={{ base: "250px", sm: "320px" }}
      h={{ base: 150, sm: 200 }}
      overflow={"hidden"}
      boxShadow="lg"
      borderRadius="xl"
    >
      <Slide
        infinite={false}
        arrows={props.imageList.length > 1}
        autoplay={false}
      >
        {renderImages()}
      </Slide>
    </Box>
  );

  const modalSlider = (
    <VStack alignItems="start">
      <DialogRoot
        placement="center"
        size="xl"
        open={showModal}
        onOpenChange={(e) => setShowModal(e.open)}
      >
        <DialogBackdrop />
        <DialogContent bg="transparent" boxShadow="none">
          <DialogHeader>
            <DialogTitle textAlign="center">{props.title}</DialogTitle>
          </DialogHeader>
          <DialogBody minW="full" bg="transparent">
            <Box minW="full" borderRadius="xl" overflow={"hidden"}>
              <Slide
                infinite={false}
                arrows={props.imageList.length > 1}
                autoplay={false}
                defaultIndex={currentImageIndex}
              >
                {renderImages()}
              </Slide>
            </Box>
          </DialogBody>
          <DialogCloseTrigger top="5" insetEnd="0" bg="gray.500" />
        </DialogContent>
      </DialogRoot>
    </VStack>
  );
  return (
    <>
      {slider}
      {modalSlider}
    </>
  );
};

export default ImageSlider;
