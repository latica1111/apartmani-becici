"use client" ;
import { useState } from 'react';
import * as Icons from '@/components/Icons';
import { useTranslations } from 'next-intl';
import {
  Box,
 
  Heading,
  List,
  ListItem,Stack,
  Text,
  Button,VStack,HStack,
} from '@chakra-ui/react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const LocationBlock = ({ sectionKey }) => {
 
  const [expanded, setExpanded] = useState(false);
const t = useTranslations('home.pointsOfInterest');
const section = t.raw(sectionKey) || {};
const icon= section?.icon  || "" ;
const heading= section?.heading  || "" ;
const items= section?.items || [];
const collapseElement = section?.collapseElement || {};
  const displayedItems = expanded ? items : items.slice(0, 3);
 const IconComponent = Icons[icon];
  return (
    <>
  


      <VStack className="inner-wrapper"  p={{base:"4",  sm:"3", md:"6"}} rounded="sm"  bg="white"
  border="1px solid"
  borderColor="gray.100"
  shadow="sm"
   overflow="hidden"
    minH={{base:"auto",sm:"300px"}}
  transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
  opacity={expanded ? 1 : 0.85} 
 
  _hover={{
    transform: "translateY(-4px)",
    shadow: "lg",
    borderColor: "rgba(var(--secondary-rgb), .3)"
  }}>
        <Box className="location-block" w="full" justifyContent="space-between">
          {/* Heading */}
          <Stack align={{base:"center",sm:'flex-start', md:"center"}} mb="5" flexDirection={{base:"row", sm:'column', md:'row'}}>
            {IconComponent && (
              <Box className="icon " rounded="full" p="3"   bg="rgba(201,161,74,0.1)" border="1px solid rgba(var(--secondary-rgb), .6)" color="var(--secondary)">
                <IconComponent width="16" height="16" fill="var(--secondary)"  />
              </Box>
            )}

            <Heading
           fontSize={{base:"sm"}}
       textTransform="uppercase"
           color="var(--primary)"  fontWeight="300"
            >
              {heading}
            </Heading>
          </Stack>

          {/* List */}
          <List.Root gap={2} className="name-and-distance-block"  my={{base:"2",md:"2",lg:"4"}} opacity={expanded ? 1 : 0.95} >
            {displayedItems.map((item, index) => (
              <ListItem
                key={index}
                display="flex"
                justifyContent="space-between"
                alignItems="center"  py="1"
      borderBottom="1px solid"
      borderColor="gray.100"
              >
                <Text className="place-name" mb="0" fontWeight="500">{item.name}</Text>
                <Text className="place-distance" mb="0" color="gray.500" fontSize="sm">
                  { item.distance}
                </Text>
              </ListItem>
            ))}
          </List.Root>

          {/* Toggle */}
          {items.length > 3 && (
            <HStack as={Button}
              variant="ghost"
             fontSize="sm" color="var(--primary)" 
              px={0} fontWeight="500"
              transition="all 0.3s ease" bg="none"
  _hover={{
  opacity: ".7",
    bg:"none"
  }}
              onClick={() => setExpanded(!expanded)}
              className="toggle-btn"
            >
              <Text>{expanded ? collapseElement.seeLess : collapseElement.viewAll}</Text>
  {expanded ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </HStack>
          )}
        </Box>
      </VStack>
  

   </> 
  );
};

export default LocationBlock;
