import {
  Box,
 Stat ,
 
} from '@chakra-ui/react';
import { getTranslations } from 'next-intl/server';


export default async function GeneralScore() {
  const t =  await getTranslations({ namespace: 'home.bookingScore' });
 return(
<>
<Box textAlign="left" w="full" mb={{base:"3",md:"4",lg:"6"}}>
          <Stat.Root bg="rgba(201, 161, 74, 0.1)"
border="1px solid rgba(201, 161, 74, 0.3)" w="fit-content" shadow="sm" p="3" rounded="sm" display="flex" flexDirection="column" gap="1">
      <Stat.Label  fontSize="xs"
  textTransform="uppercase"
  letterSpacing="wider"
  color="var(--primary)"
  opacity=".7">   {t("generalNote.label")}</Stat.Label>
      <Stat.ValueText fontSize="2xl"
  fontWeight="700"
  color="var(--primary)">{t("generalNote.note")}</Stat.ValueText>
    </Stat.Root>
</Box>

</>


 )}