'use client'
import {  Button, Group} from "@chakra-ui/react"

import { Link } from '@/i18n/navigation';
export default function HeroBtnGroup ({rawData}){

    return(
        <>
            <Group mt="3" flexDirection={{smDown:"column"}} w={{smDown:"full"}} gap={{smDown:"4", sm:"5"}}>
              <Button  size="lg" py="3" bg="var(--secondary)" color="#fff" rounded="0"
               transition="all 0.3s ease" textTransform="uppercase" fontSize="xs" letterSpacing="1.2px"
  _hover={{
    bg: "rgba(var(--secondary-rgb), 0.85)",
  
   
  }}
              px="3rem"   width={{smDown:"full"}} as={Link}   href={rawData.btn1.href}> {rawData.btn1.label}</Button>
              <Button size="lg"   bg="var(--primary)" color="#fff" 
               transition="all 0.3s ease" textTransform="uppercase" fontSize="xs" letterSpacing="1.2px" rounded="0"
    _hover={{
      bg: "rgba(var(--primary-rgb), 0.85)", // tamnija nijansa
    }}
              px="3rem"  py="3" width={{smDown:"full"}} as={Link}   href={rawData.btn2.href} > {rawData.btn2.label}</Button>
            </Group>
        </>
    )
}