import { Box, Container, Image, Modal, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import HeaderGallery from "./components/header";
import { GALLERY_IMAGES } from "./constants";

export default function Gallery() {
  const [opened, setOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (src: string) => {
    setSelectedImage(src);
    setOpened(true);
  };

  return (
    <Container>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="lg"
        withCloseButton={false}
      >
        <Image src={selectedImage} radius="md" h={400} fit="contain"/>
      </Modal>

      <HeaderGallery/>

      <SimpleGrid
        cols={{ base: 2, sm: 3, md: 4 }}
        spacing="md"
      >
        {GALLERY_IMAGES.map((src, index) => (
          <Box
            key={index}
            onClick={() => openModal(src)}
            className="cursor-pointer overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              radius="md"
              style={{
                transition: "transform 0.3s ease",
              }}
              className="gallery-img"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
