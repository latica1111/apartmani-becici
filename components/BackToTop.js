
'use client'

import { useEffect, useState } from "react"
import { IconButton } from "@chakra-ui/react"
import { FaChevronUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!show) return null

  return (
    <IconButton
     
      onClick={scrollToTop}
      position="fixed"
      bottom={{ base: "20px", md: "30px" }}
      right={{ base: "20px", md: "30px" }}
      zIndex="999"
      size="lg"
      borderRadius="full"
      bg="rgba(var(--secondary-rgb),1)"
      color="white"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="lg"
      _hover={{
      
        bg: "rgba(var(--secondary-rgb),.96)",  boxShadow: "xl",
      }}
    ><FaChevronUp /></IconButton>
  )
}