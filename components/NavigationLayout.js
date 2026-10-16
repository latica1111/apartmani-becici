"use client"
import { HStack,Flex,VStack,Box,Menu,Button, Portal, } from "@chakra-ui/react"
import Logo2 from "./Logo2"
import LanguageSwitcher from "./LanguageSwitcher"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import MobileMenu from "./MobileMenu"
import { usePathname } from 'next/navigation';
export default function NavigationLayout ({locale}){
 const t = useTranslations('home.header');
const brandName = t("brandName");
const items = Array.isArray(t.raw("offerMenu.items"))
  ? t.raw("offerMenu.items")
  : [];
  console.log(items);

const navLinks = [
  {
    type: "link",
    label: t("homeLink.label"),
    href: t("homeLink.href"),
  },
 {
    type: "dropdown",
    label: t("offerMenu.label"),
    items: items,
  },
  {
    type: "link",
    label: t("contactLink.label"),
    href: t("contactLink.href"),
  },
  {
    type: "link",
    label: t("houseRulesLink.label"),
    href: t("houseRulesLink.href"),
  },
  {
    type: "link",
    label: t("usefulInfoLink.label"),
    href: t("usefulInfoLink.href"),
  },
 
];
const pathname = usePathname();
const currentPath = pathname.replace(/^\/(en|sr)(?=\/|$)/, "") || "/";
  console.log("CURRENT PATHNAME:", pathname);
    return(


        <>
         <HStack justifyContent={{base:"flex-end"}} w="full">
<Flex display={{base:"none"}}>
  <Logo2 />  
</Flex>
<HStack gap="6">
  {/* Desktop links */}
<HStack display={{ base: "none", md: "flex" }} gap={3} fontSize="xs">
{navLinks.map((item) => {
  console.log("NAV ITEM:", {
  label: item.label,
  href: item.href,
  pathname,
});
  if (item.type === "link") {
  const normalizedHref = item.href.startsWith("/")
  ? item.href
  : `/${item.href}`;

const isActive = currentPath === normalizedHref;
   console.log("IS ACTIVE:", item.label, isActive);
    return (
     
<Box
  as={Link}
  key={item.href}
  href={item.href}
  position="relative"
  display="inline-flex"
  alignItems="center"
  px="2"
  py="2"
  color="white"
  fontWeight="300"
  letterSpacing="0.12em"
  textTransform="uppercase"
  fontSize="12px"
  textDecoration="none"
  transition="color 0.3s ease"
  _after={{
    content: '""',
    position: "absolute",
    bottom: "2px",
    left: "8px",
    right: "8px",
    height: "1px",
    bg: "var(--secondary)",
     transform: isActive ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  }}
  _hover={{
    color: "white",
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
    const isActive = currentPath.startsWith("/offer");
    return (  
<Box position="relative" key={item.label}>
  <Menu.Root>
  <Menu.Trigger asChild>
       <Button variant="ghost" position="relative" key={item.label} lineHeight="normal" color="white" px="2" py="2" rounded="0" h="auto" minW="auto" _open={{bg:"transparent"}}  fontWeight="300" letterSpacing="0.12em" textTransform="uppercase" fontSize="12px" transition="all .4s ease" _hover={{ bg:"transparent",borderBottom:"2px solid #fff" }} transition="color 0.3s ease"
  _after={{
    content: '""',
    position: "absolute",
    bottom: "2px",
    left: "8px",
    right: "8px",
    height: "1px",
    bg: "var(--secondary)",
   transform: isActive ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  }}
  _hover={{
    color: "white", backgroundColor:"transparent",
    _after: {
      transform: "scaleX(1)",
    },
  }}>{item.label}  </Button>
      </Menu.Trigger>
   <Portal>
        <Menu.Positioner>
    <Menu.Content bg="#fff"           // tamna pozadina
        color="var(--primary)"           // tekst bijel
        boxShadow="lg"          // drop shadow
        borderRadius="0"
        py="2"
        px="2" zIndex="44444"
        minW="200px">
     

    
<Menu.ItemGroup>
  {item.items.map((sub) => {
    const subHref = sub.href
      ? `/offer/${sub.href}`
      : "/offer";

    const isSubActive = currentPath === subHref;

    return (
      <Menu.Item
        key={sub.key}
        value={sub.key}
        p="0"
        bg="transparent"
        _hover={{ bg: "transparent" }}
      >
        <Box
          as={Link}
          href={
            sub.href
              ? {
                  pathname: "/offer/[type]",
                  params: { type: sub.href },
                }
              : "/offer"
          }
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
          textDecoration="none"
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
      </Menu.Item>
    );
  })}
</Menu.ItemGroup>

    
      
    </Menu.Content>
</Menu.Positioner>
   </Portal> 
</Menu.Root>
</Box>
 );
  }
})}
</HStack>


<Flex display={{base:"none"}}>
    <LanguageSwitcher />
</Flex>
<Flex display={{base:"block", md:"none"}}>
<MobileMenu  navLinks={navLinks} />
</Flex>
</HStack>
     </HStack>
        
        
        </>
    )
}