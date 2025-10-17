import { Carousel } from '@mantine/carousel';
import { TESTIMONIES_ITEMS } from './constants';
import TestimonyItem from './slide-item';
import { IconArrowBadgeRightFilled, IconArrowBadgeLeftFilled } from '@tabler/icons-react';
import { Stack, Text, Title } from '@mantine/core';

const testimoniesItems = TESTIMONIES_ITEMS.map((item) => (
  <Carousel.Slide key={item.name}>
    <TestimonyItem item={item}/>
  </Carousel.Slide>
))

const TestimoniesHome = () => {
  return (
    <Stack>
      <Title ta="center">What they says</Title>
      <Text ta="center">Managing money doesn't have to be stressful. These users found clarity and confidence through our app.</Text>
      <Carousel
        height={200}
        emblaOptions={{
          loop: true,
          dragFree: true,
        }}
        nextControlIcon={<IconArrowBadgeRightFilled size={16}/>}
        previousControlIcon={<IconArrowBadgeLeftFilled size={16}/>}
      >
        {testimoniesItems}
      </Carousel>
    </Stack>
  )
}

export default TestimoniesHome