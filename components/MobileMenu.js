import { Drawer, Button,Portal,VStack,CloseButton,Box, Icon, Collapsible} from "@chakra-ui/react"
import {Link} from '@/i18n/navigation';
import { LuMenu } from "react-icons/lu";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import {HiOutlineChevronDown} from "react-icons/hi";
import { useTranslations } from "next-intl";
export default function MobileMenu ({ isOpen, onClose, navLinks }){
const t = useTranslations("home")
 const brandName= t("header.brandName")   
    
    return(
<>
<Drawer.Root isOpen={isOpen} placement="right" onClose={onClose}>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm" color="#fff" _expanded={{bg:"transparent", color:"var(--primary)",filter: "brightness(2) contrast(.6)", borderColor:"var(--primary)" }}>
         <LuMenu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content  bg="rgba(0,0,0,0.95)" color="white"  backdropFilter="blur(10px)" position="relative" px="2">
            <Drawer.Header px="6"
  py="4" 
  borderBottom="1px solid"
  borderColor="whiteAlpha.200">
              <Drawer.Title> <Logo brandName={brandName}/></Drawer.Title>
 <Drawer.CloseTrigger asChild>
              <CloseButton size="md" />
            </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
          <VStack gap={2} mt={8} align="start" >
  {navLinks.map((item) => {
    if (item.type === "link") {
      return (
       <Box
  as={Link}
  href={item.href}
  onClick={onClose}
  w="auto"
  py="2"
  px="5"
  borderRadius="md"
  fontSize="sm"
  fontWeight="500"
  transition="all 0.4s ease"
  
    _hover={{  color:"var(--primary)" , filter:"brightness(2) contrast(.8)",bg: "whiteAlpha.100" }}
  
  _active={{
    bg: "whiteAlpha.200",
    transform: "scale(0.98)"
  }}
>
  {item.label}
</Box>
      );
    }

    if (item.type === "dropdown") {
      return (

<Collapsible.Root key={item.label}>
  <Collapsible.Trigger asChild>
     <Button variant="ghost" key={item.label} px="5" py="2" color="white" fontSize="sm" justifyContent="space-between"  h="auto" _open={{bg:"transparent"}}   _hover={{ color:"var(--primary)" , filter:"brightness(2) contrast(.8)", bg: "whiteAlpha.100" }}
      _active={{ bg: "whiteAlpha.200" }}>
      {item.label}
       <Icon w="3" h="3" color="white"     transition="transform 0.3s"
        _open={{ transform: "rotate(180deg)" }}>
     <HiOutlineChevronDown />
  </Icon>
      
      </Button>
   
  </Collapsible.Trigger>
  <Collapsible.Content px="2">
 {item.items.map((sub) => (
                 <VStack alignItems="flex-start"
          key={sub.key}
          as={Link}
          href={{
            pathname: "/offer/[type]",
            params: { type: sub.href }
          }}
          onClick={onClose}
          w="full"
          py="2"
          px="5"
          borderRadius="md"
          fontSize="sm"
          color="gray.300"
          transition="all 0.4s ease"
          _hover={{
            bg: "whiteAlpha.100",
            color:"var(--primary)" , filter:"brightness(2) contrast(.8)"
          }}
        >
          {sub.label}
        </VStack>
                ))}
  </Collapsible.Content>
</Collapsible.Root>



      
      );
    }
  })}
</VStack>
            </Drawer.Body>
            <Box mt="auto" px="6">
  <LanguageSwitcher />
</Box>
           
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>

</>

    )



}