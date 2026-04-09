"use client"
import { HStack,Flex,VStack,Box,Menu,Button, Portal, } from "@chakra-ui/react"
import Logo from "./Logo"
import LanguageSwitcher from "./LanguageSwitcher"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import MobileMenu from "./MobileMenu"

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

  
    return(


        <>
         <HStack justifyContent="space-between" >
<Flex>
  <Logo brandName={brandName}/>  
</Flex>
<HStack gap="6">
  {/* Desktop links */}
<HStack display={{ base: "none", md: "flex" }} gap={3} fontSize="xs">
{navLinks.map((item) => {
  if (item.type === "link") {
    return (
      <Box px="2" py="2" rounded="md"
  as={Link} key={item.href} href={item.href} color="white" transition="all .4s ease"  _hover={{   bg: "whiteAlpha.100", color:"var(--primary)" , filter:"brightness(2) contrast(.8)", }}>
        {item.label}
      </Box>
    );
  }

  if (item.type === "dropdown") {
    return (  
<Box position="relative" key={item.label}>
  <Menu.Root>
  <Menu.Trigger asChild>
       <Button variant="ghost" key={item.label} lineHeight="normal" color="white" px="2" py="2" rounded="md" h="auto" minW="auto" _open={{bg:"transparent"}} fontSize="xs" transition="all .4s ease" _hover={{  bg: "whiteAlpha.100", color:"var(--primary)" , filter:"brightness(2) contrast(.8)" }}>{item.label}  </Button>
      </Menu.Trigger>
   <Portal>
        <Menu.Positioner>
    <Menu.Content bg="gray.900"           // tamna pozadina
        color="white"           // tekst bijel
        boxShadow="lg"          // drop shadow
        borderRadius="md"
        py="2"
        px="2" zIndex="44444"
        minW="200px">
     

      <Menu.ItemGroup>
        {item.items.map((sub) => (
          <Menu.Item key={sub.key} color="white" px="2" py="2" rounded="md" transition="all .4s ease" fontSize="xs" _hover={{  bg: "whiteAlpha.100", color:"var(--primary)" , filter:"brightness(2) contrast(.8)" }} >
            <Link href={{ pathname: "/offer/[type]", params: { type: sub.href } }}>
    {sub.label}
  </Link>
          </Menu.Item>
          ))}
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


<Flex display={{base:"none", sm:"inline-flex"}}>
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