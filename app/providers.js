
"use client";

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

const config = defineConfig({
  theme: {
    breakpoints:{  

    },
    keyframes :{

    },
    tokens: {
      colors: {
      primary: {  
      50:{ value : "#E5F2FF"},
     100 :{ value : "#CCE5FF"},
     DEFAULT : { value: "#003366" }
    },
    secondary: {
       DEFAULT : { value: "#c9a14a" },
     50 :{ value: "#f9f6ed"},
     100 :{ value : "#f2ead0"},
     200 : {value : "#e6d5a5"},
     300 : {value : "#d7ba72"},
     400 : { value : "#c9a14a"},
 500 : { value : "#b68b38"},
600 : { value: "#9a6e2d"},
700 : { value :"#7a5426 "},

      },
    },
    semanticTokens: {
   colors: {
      bg: {
         
          primary: { value: "{colors.primary.100}" },
          secondary: { value: "{colors.secondary.100}" },
        },
     
      },

    },
    textStyles :{

    },
    layerStyles:{

    },
    animationStyles:{


    },
    conditions :{

    }
  },
}});

const system = createSystem(defaultConfig, config);

export  function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <ChakraProvider value={system}>
        {children}
      </ChakraProvider>
    </ThemeProvider>
  );
}

