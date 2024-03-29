import { useRouter } from "next/router";

import {
    Badge,
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    WrapItem,
} from "@chakra-ui/react";


export default function ProfileItem(props) {
    const nameField = props.prof.custom_fields[0];
    const discordField = props.prof.custom_fields[6];
    
    const name_val = nameField.hasOwnProperty("value") ? nameField.value : "Graph";
    const dsicordName = discordField.hasOwnProperty("value") ? discordField.value : "Graph";

    const router = useRouter();

    function showDetailsHandler(){
        router.push('/' + props.idx);
    }

    return (
        <WrapItem onClick={showDetailsHandler}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "400px" }}
                height={{ sm: "476px", md: "20rem" }}
                direction={{ base: "column", md: "column" }}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                padding={4}
            >
                <Flex justifyContent="center" flex={1}>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src="assets/defaultProf.png"
                    />
                </Flex>
                <Stack
                    flex={2}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}
                >
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                        { name_val }
                    </Heading>

                    <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                        { dsicordName }
                    </Text>
                    
                    {/* <Text
                        textAlign={"center"}
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}
                    >
                        Actress, musician, songwriter and artist. PM for work
                        inquires or
                        <Link href={"#"} color={"blue.400"}>
                            #tag
                        </Link>
                        me in your posts
                    </Text> */}

                    {/* <Stack
                        align={"center"}
                        justify={"center"}
                        direction={"row"}
                        mt={6}
                    >
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue("gray.50", "gray.800")}
                            fontWeight={"400"}
                        >
                            #art
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue("gray.50", "gray.800")}
                            fontWeight={"400"}
                        >
                            #photography
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue("gray.50", "gray.800")}
                            fontWeight={"400"}
                        >
                            #music
                        </Badge>
                    </Stack> */}

                    <Stack
                        width={"100%"}
                        mt={"2rem"}
                        direction={"row"}
                        padding={2}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Button
                            flex={1}
                            fontSize={"sm"}
                            rounded={"full"}
                            _focus={{
                                bg: "gray.200",
                            }}
                        >
                            Message
                        </Button>
                        <Button
                            flex={1}
                            fontSize={"sm"}
                            rounded={"full"}
                            bg={"blue.400"}
                            color={"white"}
                            boxShadow={
                                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                            }
                            _hover={{
                                bg: "blue.500",
                            }}
                            _focus={{
                                bg: "blue.500",
                            }}
                        >
                            Follow
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </WrapItem>
    );
}

function getValue(obj){
    if(typeof obj !== "undefined"){
        if(obj.hasOwnProperty("value")){
            return obj.value;
        }else{
            return "Graph";
        }
    }
}

