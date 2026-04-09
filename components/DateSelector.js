
import DatePicker from 'react-datepicker';
import { useTranslations } from "next-intl";
import 'react-datepicker/dist/react-datepicker.css';
import {  Text, VStack,Stack, Flex, HStack } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";
import { Controller, } from "react-hook-form";
import { RiErrorWarningLine } from "react-icons/ri";
export default function DateSelector ({ layout, control ,setValue,watch,errors, dataStyles={}}){
const selectedDate = watch("checkIn");
const endDate = watch("checkOut");


 /* const [selectedDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const handleStartDateChange = (date) => {
  setStartDate(date);
  setEndDate(null);
}; */
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
const isVertical = layout === "vertical";
 const direction = isVertical ? "column" : "row";
  const t = useTranslations('home.contactPage.contactForm');

  return (
  <>
  <VStack alignItems="flex-start" w="full">
    <Stack   w="full" flexDirection={    layout === "vertical"
      ? "column"
      : { base: "column", lg: "row" }} alignItems={    layout === "vertical"
      ? "flex-start"
      : {lg:"center"}}>
  <Text {...dataStyles.label} fontSize="sm" minW="112px">{t('checkInDate.label')}</Text>
   <Controller
            name="checkIn"
            control={control}
            rules={{ required: "Check-in required" }}
            render={({ field }) => (
  <DatePicker 
   className={`custom-datepicker custom-popper ${errors?.checkIn ? 'error-datepicker' : ''}`}
   showIcon
   
      icon={<CiCalendar />}
  selected={selectedDate} 
    onChange={(date) => {
                   field.onChange(date);
  setValue("checkOut", null);
                }}
    selectsStart
    startDate={selectedDate}
    endDate={endDate}
    onCalendarClose={handleCalendarClose}
     onCalendarOpen={handleCalendarOpen}
    popperPlacement="top-start"
         dateFormat="yyyy/MM/dd"
           minDate={new Date()} // danasnji dan
              placeholderText={
   selectedDate
    ? new Date(selectedDate).toLocaleDateString('en-GB')
    : t('checkInDate.data')
}
  />
      )}
          />

</Stack>
  {/* 👇 ERROR */}
  {errors?.checkIn && (
    <HStack fontSize="xs" color="#ef4444" mt="1" pl={{lg:"120px"}} fontWeight="500" lineHeight="1rem" gap="0.5">
     <RiErrorWarningLine /> {errors.checkIn.message}
    </HStack>
  )}

  </VStack>
<VStack alignItems="flex-start" w="full">
     <Stack   w="full" flexDirection={    layout === "vertical"
      ? "column"
      : { base: "column", lg: "row" }} alignItems={ layout === "vertical"
      ? "flex-start"
      : {lg:"center"}}>
  <Text {...dataStyles.label} fontSize="sm" minW="112px" >{t('checkOutDate.label')}</Text>

  <Controller
            name="checkOut"
            control={control}
            rules={{
              required: "Check-out required",
              validate: (value) =>
                !selectedDate || value > selectedDate || "Must be after check-in",
            }}
            render={({ field }) => (
     <DatePicker
      className={`custom-datepicker ${errors?.checkIn ? 'error-datepicker' : ''}`}
      showIcon
    
       icon={<CiCalendar/>}
     selected={field.value}
      onChange={field.onChange}
    selectsEnd
    startDate={selectedDate}
    endDate={endDate}
     minDate={selectedDate || new Date()}
     onCalendarClose={handleCalendarClose}
     onCalendarOpen={handleCalendarOpen}
    popperPlacement="top-start"
         dateFormat="yyyy/MM/dd"
      placeholderText={
   endDate
    ? new Date(endDate).toLocaleDateString('en-GB')
    : t('checkOutDate.data')
}
  />
 )}
          />

  </Stack> 
  {/* ERROR */}
  {errors?.checkOut && (
    <HStack fontSize="xs" color="#ef4444" mt="1" pl={{lg:"120px"}} fontWeight="500" lineHeight="1rem" gap="0.5">
      <RiErrorWarningLine /> {errors.checkOut.message}
    </HStack>
  )}

  </VStack>
</>


  )
}