import { Drawer, Button,Portal,VStack,CloseButton,Box, Icon, Collapsible} from "@chakra-ui/react"
import {Link} from '@/i18n/navigation';
import { LuMenu } from "react-icons/lu";
import Logo2 from "./Logo2";
import LanguageSwitcher from "./LanguageSwitcher";
import {HiOutlineChevronDown} from "react-icons/hi";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
export default function MobileMenu ({ isOpen, onClose, navLinks }){
const t = useTranslations("home")
 const brandName= t("header.brandName")   
    const pathname = usePathname();

const currentPath = pathname.replace(/^\/(en|sr)(?=\/|$)/, "") || "/";
    return(
<>
<Drawer.Root isOpen={isOpen} placement="right" onClose={onClose}>
      <Drawer.Trigger asChild>
        <Button variant="ghost" size="sm" color="#fff" _expanded={{bg:"transparent", color:"var(--primary)",filter: "brightness(2) contrast(.6)", borderColor:"var(--primary)" }}>
         <LuMenu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content    bg="white"
  color="var(--primary)"
  position="relative"
  px="2">
            <Drawer.Header  mx="6"
  my="4"
  borderBottom="1px solid"
  borderColor="gray.100">
              <Drawer.Title> <Logo2 brandName={brandName}/></Drawer.Title>
 <Drawer.CloseTrigger asChild>
              <CloseButton size="md" />
            </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
          <VStack gap={2} align="start" >
  {navLinks.map((item) => {
    if (item.type === "link") {
      const normalizedHref = item.href.startsWith("/")
  ? item.href
  : `/${item.href}`;

const isActive =
  currentPath === normalizedHref ||
  (normalizedHref !== "/" &&
    currentPath.startsWith(`${normalizedHref}/`));
      return (
       <Box
  as={Link}
  href={item.href}
  onClick={onClose}
  w="auto"
 key={item.href}
   position="relative"
      display="flex"
   
      py="2"
      px="5"
      color="var(--primary)"
      fontSize="sm"
      fontWeight="400"
      letterSpacing="0.08em"
      textTransform="uppercase"
      transition="color 0.3s ease"
      _after={{
        content: '""',
        position: "absolute",
        bottom: "4px",
        left: "20px",
        right: "20px",
        height: "1px",
        bg: "var(--secondary)",
        transform: isActive ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      }}
      _hover={{
        color: "var(--primary)",
        _after: {
          transform: "scaleX(1)",
        },
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
     <Button variant="ghost" key={item.label}  w="auto" position="relative"
  px="5"
  py="2"
  color="var(--primary)"
  fontSize="sm"
  fontWeight="400"
  letterSpacing="0.08em"
  textTransform="uppercase"
  justifyContent="space-between"
  h="auto"
  rounded="none"
  _open={{ bg: "transparent" }}
 _after={{
  content: '""',
  position: "absolute",
  bottom: "4px",
  left: "20px",
  right: "20px",
  height: "1px",
  bg: "var(--secondary)",
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: "transform 0.3s ease",
}}
_hover={{
  bg: "transparent",
  color: "var(--primary)",
  _after: {
    transform: "scaleX(1)",
  },
}}
 >
      {item.label}
       <Icon   w="3"
  h="3"
  color="var(--primary)"
  transition="transform 0.3s"
  _open={{ transform: "rotate(180deg)" }}>
     <HiOutlineChevronDown />
  </Icon>
      
      </Button>
   
  </Collapsible.Trigger>
<Collapsible.Content px="2"> 
  {item.items.map((sub) => {
    const subHref = sub.href
      ? `/offer/${sub.href}`
      : "/offer";

    const isSubActive = currentPath === subHref;

    return (
      <Box
        key={sub.key}
        as={Link}
        href={
          sub.href
            ? {
                pathname: "/offer/[type]",
                params: { type: sub.href },
              }
            : "/offer"
        }
        onClick={onClose}
        position="relative"
        display="flex"
        w="auto"
        py="2"
        px="5"
        color="var(--primary)"
        fontSize="xs"
        fontWeight="400"
        letterSpacing="0.08em"
        textTransform="uppercase"
        transition="color 0.3s ease"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "4px",
          left: "20px",
          right: "20px",
          height: "1px",
          bg: "var(--secondary)",
          transform: isSubActive ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        }}
        _hover={{
          color: "var(--primary)",
          _after: {
            transform: "scaleX(1)",
          },
        }}
      >
        {sub.label}
      </Box>
    );
  })}
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