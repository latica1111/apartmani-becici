'use client'
import { useForm, Controller } from "react-hook-form"
import { Button, Field, Input, Textarea,
  Stack, IconButton, NumberInput ,
  Box,
  HStack,VStack,Icon,Heading,Text,
  Separator} from "@chakra-ui/react"
import { useTranslations } from "next-intl";
import DateSelector from "./DateSelector";
import emailjs from '@emailjs/browser';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { RxPaperPlane } from "react-icons/rx";
import { IoWarningOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { LuMinus, LuPlus } from "react-icons/lu"
import { useState } from "react";
export default function ContactRhf({layout, dataStyles={}}){
     const {
   register,  control,
    handleSubmit,
    watch, reset, setValue ,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email:"",
      adultsNumber: 1,
      childrenNumber: 0,
      additionalRequest: "",
       checkIn: null,   // 👈 DODAJ
  checkOut: null   // 👈 DODAJ
    },
  })
const [isSubmitted, setIsSubmitted] = useState(false);


const onSubmit = async (data) => {
  try {
    const response = await emailjs.send(
     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        adultsNumber: data.adultsNumber,
        childrenNumber: data.childrenNumber,
        childrenAge: data.childrenAge,
        additionalRequest: data.additionalRequest,
        checkIn: data.checkIn
          ? new Date(data.checkIn).toLocaleDateString("en-GB")
          : "",
        checkOut: data.checkOut
          ? new Date(data.checkOut).toLocaleDateString("en-GB")
          : "",
      },
       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent:", response);
 console.log(data);
  setIsSubmitted(true);

    reset(); // 🔥 reset forme

  } catch (error) {
    console.error("Error sending email:", error);
    alert("Something went wrong!");
  }
};
const childrenNumber = watch("childrenNumber");
const t = useTranslations('home.contactPage.contactForm');


    return(
        <>
        <Box  {...dataStyles.wrapper} >
         {isSubmitted ? (
  <VStack
    w="full"
    align="flex-start"
    bg="green.50"
    border="1px solid"
    borderColor="green.200"
    p="6"
    borderRadius="lg"
  >
    <Heading size="md">{t('onSubmitHeading')} </Heading>
    <Text>
     {t('onSubmitText')}
    </Text>

    <Button
      mt="3"
      variant="outline"
       borderColor="green.500"
      px="3"
      onClick={() => {
        reset();
        setIsSubmitted(false);
      }}
    >
     {t('newRequestButton')}
    </Button>
  </VStack>
) : (
  

         <form onSubmit={handleSubmit(onSubmit)} style={{width:"100%"}}>
 <Stack gap="8" align="flex-start" w={{smDown:"full", sm:"full"}} maxW={{base:"full"}}>
<DateSelector layout={layout} control={control} setValue={setValue} watch={watch} dataStyles={dataStyles}  errors={errors}/>
 
<Stack gap="3" flexDirection={ layout === "vertical"? "column" : { base: "column", lg: "row" }} justifyContent={{lg:"space-between"}} w="full">


<Field.Root invalid={!!errors.adultsNumber} >
  <Stack align={{md:"center"}} w="full" flexDirection={{ base: "row", sm: "row" }} flexWrap="wrap">
    <Field.Label minW={{base:"76px",lg:"64px"}} {...dataStyles.label}>
      {t('adultsNmbr.label')} *
    </Field.Label>

    <VStack align="flex-start">
      <Controller
        name="adultsNumber"
        control={control}
        rules={{
          required: "Required",
          min: {
            value: 1,
            message: "At least 1 adult is required",
          },
        }}
        render={({ field }) => (
          <NumberInput.Root
            value={field.value}
            min={1}
            onValueChange={({ value }) => field.onChange(Number(value))}
            unstyled
            spinOnPress={false}
          >
            <HStack gap="1">
              
              {/* MINUS */}
              <NumberInput.DecrementTrigger asChild>
                <IconButton
                  size="sm"
                  variant="outline"
                  borderRadius="sm"
                  shadow="sm"
                  _hover={{ bg: "gray.100" }}
                >
                  <LuMinus />
                </IconButton>
              </NumberInput.DecrementTrigger>

              {/* VALUE */}
              <NumberInput.ValueText
                textAlign="center"
                fontSize="md"
                minW="32px"
                px="2"
                py="1"
                border={errors?.adultsNumber ? "1px solid" : "none"}
                borderColor={errors?.adultsNumber ? "red.400" : "gray.200"}
                borderRadius="md"
              />

              {/* PLUS */}
              <NumberInput.IncrementTrigger asChild>
                <IconButton
                  size="sm"
                  variant="outline"
                borderRadius="sm"
                  shadow="sm"
                  _hover={{ bg: "gray.100" }}
                >
                  <LuPlus />
                </IconButton>
              </NumberInput.IncrementTrigger>

            </HStack>
          </NumberInput.Root>
        )}
      />

      {/* ERROR */}
      <Field.ErrorText fontSize="xs">
        {errors.adultsNumber?.message}
      </Field.ErrorText>
    </VStack>
  </Stack>
</Field.Root>


  <Field.Root invalid={!!errors.childrenNumber}>
  
    <Stack align={{md:"center"}} w="full" flexDirection={{ base: "row", sm: "row" }} flexWrap="wrap" justifyContent={layout === "vertical"? "flex-start":{lg:"flex-end"}} >
    <Field.Label minW="76px" {...dataStyles.label}>
      {t('childrenNmbr.label')}
    </Field.Label>

    <VStack align="flex-start">
      <Controller
        name="childrenNumber"
        control={control}
        rules={{
          min: {
            value: 0,
            message: "Cannot be negative",
          },
        }}
        render={({ field }) => (
          <NumberInput.Root
            value={field.value}
            min={0}
            onValueChange={({ value }) => field.onChange(Number(value))}
            unstyled
            spinOnPress={false}
          >
            <HStack gap="1">
              
              {/* MINUS */}
              <NumberInput.DecrementTrigger asChild>
                <IconButton
                  size="sm"
                  variant="outline"
                  borderRadius="sm"
                  shadow="sm"
                  _hover={{ bg: "gray.100" }}
                >
                  <LuMinus />
                </IconButton>
              </NumberInput.DecrementTrigger>

              {/* VALUE */}
              <NumberInput.ValueText
                textAlign="center"
                fontSize="md"
                minW="32px"
                px="2"
                py="1"
                border={errors?.adultsNumber ? "1px solid" : "none"}
                borderColor={errors?.childrenNumber ? "red.400" : "gray.200"}
                borderRadius="md"
              />

              {/* PLUS */}
              <NumberInput.IncrementTrigger asChild>
                <IconButton
                  size="sm"
                  variant="outline"
                  borderRadius="sm"
                  shadow="sm"
                  _hover={{ bg: "gray.100" }}
                >
                  <LuPlus />
                </IconButton>
              </NumberInput.IncrementTrigger>

            </HStack>
          </NumberInput.Root>
        )}
      />

      {/* ERROR */}
      <Field.ErrorText fontSize="xs">
        {errors.childrenNumber?.message}
      </Field.ErrorText>
    </VStack>
 </Stack>
</Field.Root>
</Stack>
 {childrenNumber > 0 && (    
<Field.Root invalid={!!errors.childrenAge}   flexDirection="column" alignItems="flex-start" w="full" flexWrap="wrap">
          <Stack  w="full" flexDirection={ layout === "vertical"? "column" : { base:  "row" }} >
          <Field.Label minW="112px" {...dataStyles.label} mb="2">{t('childrenAge.label')}{childrenNumber > 0 && "*"}</Field.Label>
        
          <Input
     placeholder={t('childrenAge.label')} px="3"  {...dataStyles.input}
    {...register("childrenAge", {
      validate: (value) => {
        if (childrenNumber > 0 && !value) {
          return "Please enter children ages";
        }

        return true;
      },
    })}
  />

        

         </Stack> 
           <Field.ErrorText pl={{lg:"120px"}}> <RiErrorWarningLine/>{errors.childrenAge?.message}</Field.ErrorText>
        </Field.Root>
  )}   
 


<VStack w="full" gap="6" my="4">
        <Field.Root invalid={!!errors.name}   flexDirection="column" alignItems="flex-start" flexWrap="wrap">
          <Stack  w="full" flexDirection={    layout === "vertical"
      ? "column"
      :  { base: "column", lg: "row" }} >
          <Field.Label {...dataStyles.label} minW="64px">{t('name.label')} *</Field.Label>
        
          <Input   {...register("name", {
    required: "Name is required",
  })} placeholder={t('name.placeholder')} px="3" {...dataStyles.input}/>
         
          
       </Stack>
        <Field.ErrorText pl={{lg:"72px"}}><RiErrorWarningLine/>{errors.name?.message}</Field.ErrorText>
       </Field.Root>

        <Field.Root invalid={!!errors.phone}   flexDirection="column" alignItems="flex-start">
          <Stack w="full" flexDirection={    layout === "vertical"
      ? "column"
      : { base: "column", lg: "row" }} >
          <Field.Label {...dataStyles.label} minW="64px">{t('phone.label')}</Field.Label>
        
          <Input {...register("phone")} placeholder={t('phone.placeholder')} px="3" {...dataStyles.input}/>
         

          </Stack>
           <Field.ErrorText pl={{lg:"72px"}}><RiErrorWarningLine/>{errors.phone?.message}</Field.ErrorText>
        </Field.Root>

 <Field.Root invalid={!!errors.email} flexDirection="column" alignItems="flex-start" w="full">
  <Stack  w="full" flexDirection={    layout === "vertical"
      ? "column"
      : { base: "column", lg: "row" }}>
          <Field.Label {...dataStyles.label} minW="64px">{t('email.label')}</Field.Label>
       
          <Input {...register("email", {
  required: { value: true, message: "Email is required" },
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Invalid email"
  }
})}  px="3"
          placeholder={t('email.placeholder')} {...dataStyles.input}/>
  

    </Stack>      
        <Field.ErrorText pl={{lg:"72px"}}><RiErrorWarningLine/>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
</VStack>
 

 <Field.Root invalid={!!errors.additionalRequest}>
          <Field.Label {...dataStyles.label} mb="2">{t('additionalRequest.label')}</Field.Label>
          <Textarea
            placeholder={t('additionalRequest.placeholder')}
            {...register("additionalRequest")} px="3" py="2" minH="6rem" {...dataStyles.input}
          />
        
          <Field.ErrorText>{errors.additionalRequest?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit" transition="all .4s ease" size="md" h="9" minWidth="220px" px="6" bg="var(--primary)" mt="3" color="#fff" {...dataStyles.button}>Send request  
           <Icon size="sm" >
  <RxPaperPlane />
  </Icon></Button>
      </Stack>



         </form>
)} 
         
        </Box>
        </>
    )
}