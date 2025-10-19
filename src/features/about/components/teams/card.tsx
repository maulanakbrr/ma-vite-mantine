import { Box, Overlay, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface PersonCardProps {
  name: string;
  role: string;
  image: string;
}

export const PersonCard = ({ name, role, image }: PersonCardProps) => {
  const { hovered, ref } = useHover();

  return (
    <Box
      ref={ref}
      className="relative w-full h-full"
    >
      <Box
        component="img"
        src={image}
        alt={name}
        className={`w-full h-full object-cover transition-all duration-400 ease-in-out ${hovered ? "blur-sm brightness-60" : "blur-0 brightness-100"}`}
      />

      {hovered && (
        <Overlay
          center
          backgroundOpacity={.1 }
        >
          <div>
            <Text size="lg" fw={700}>
              {name}
            </Text>
            <Text size="sm">{role}</Text>
          </div>
        </Overlay>
      )}
    </Box>
  );
};
