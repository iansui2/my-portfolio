import {
  Tag,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react'


export const CustomTag = ({ label, icon }) => (
  <Tag size="lg" variant="subtle" bgColor="blue.500" color="white">
    <TagLeftIcon boxSize="20px" as={icon} />
    <TagLabel fontSize="lg">{label}</TagLabel>
  </Tag>
)