import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img from "../assets/1.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Premier cryptocurrency details showcase app.
          </Text>
        </VStack>

        <VStack>
          <Link to="https://www.linkedin.com/in/suyashgupta27/" target="_blank">
            <Avatar boxSize={"28"} mt={["4", "0"]} src={img} />
          </Link>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;