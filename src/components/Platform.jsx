import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function Platform() {
  return (
    <div class='uniPaper'>
      <Paper
      elevation={3}
      sx={{
        padding: 2,
      }}
    >
      <Box sx={{ width: '100%'}}>
      <Typography variant="h6" gutterBottom>
      В 2023-2024 навчальному році комунальний  заклад  «Маріупольська  загальноосвітня  школа  І-ІІІ  ступенів  №10  Маріупольської  
      міської  ради  Донецької  області» працює  на платформі 
      <Link href="https://classroom.google.com/" underline="hover" target="_blank" style={{padding: "10px"}}>
      https://classroom.google.com/
      </Link>
      . Заняття  проводяться кожний день 
      ( понеділок- п'ятниця ) з 16.00 за розкладом уроків в синхронному та асинхронному режимі онлайн 
      ( дистанційна форма навчання). 
      </Typography>
      <Typography variant="h6" gutterBottom>
      В синхронному режимі проводяться онлайн- уроки, відеозустрічі, конференції  з 16.00 за 
      київським часом. Відеоконференції в синхронному режимі проводяться на платформах 
      <Link href="https://zoom.us/" underline="hover" target="_blank" style={{padding: "10px"}}>
      https://zoom.us/
      </Link>
      та 
      <Link href="https://meet.google.com/" underline="hover" target="_blank" style={{padding: "10px"}}>
      https://meet.google.com/
      </Link>
      </Typography>
      <Typography variant="h6" gutterBottom>
      В асинхронному режимі ми працюємо з наступними платформами: 
      <Link href="https://vseosvita.ua/" underline="hover" target="_blank" style={{padding: "10px"}}>
      https://vseosvita.ua/
      </Link>
        та
      <Link href="https://naurok.com.ua/" underline="hover" target="_blank" style={{padding: "10px"}}>
      https://naurok.com.ua/
      </Link>
      </Typography>

      <Typography variant="h6" gutterBottom>
      На платформах розміщуються матеріали до вивчення навчальних тем, завдання та додаткові матеріали для опрацювання в 
      асинхронному режимі. Оцінювання навчальних досягненнь учнів, електронний щоденник, домашні завдання, розклад уроків 
      ведеться на платформі 

      <Link href="https://e-schools.info/" underline="hover" target="_blank" style={{padding: "10px"}}>
      https://e-schools.info/,
      </Link>
      
      код доступу до якої має кожний учень та його батьки. Запрошення на вхід до платформи та код доступу надається класним 
      керівником після зарахування.

      </Typography>

      <Typography variant="h6" gutterBottom style={{paddingTop: "30px"}}>
      <Typography variant="h5" display="inline-block" gutterBottom style={{color: '#0066ff'}}>
      Інструкцію
      </Typography>
      
      , щодо користування платформою classroom.google.com можна знайти за
      <Link href="https://nus.org.ua/articles/yak-pratsyuvaty-v-google-klas-pokrokova-instruktsiya/" underline="hover" target="_blank" style={{padding: "10px"}}>
      наступним посиланням.
      </Link>
      </Typography>

      <Typography variant="h6" gutterBottom>
      <Typography variant="h5" display="inline-block" gutterBottom style={{color: '#0066ff'}}>
      Інструкцію
      </Typography>
      , щодо користування платформою e-schools можна знайти за
      <Link href="https://e-schools.info/m/manuals/for-parents" underline="hover" target="_blank" style={{padding: "10px"}}>
      наступним посиланням.
      </Link>
      </Typography>

      <Typography variant="h6" gutterBottom>
      <Typography variant="h5" display="inline-block" gutterBottom style={{color: '#0066ff'}}>
      Інструкцію
      </Typography>
      , щодо користування платформою vseosvita.ua можна знайти за
      <Link href="https://vseosvita.ua/library/ak-zareestruvatisa-na-vseosviti-detalna-instrukcia-405162.html" underline="hover" target="_blank" style={{padding: "10px"}}>
      наступним посиланням.
      </Link>
      </Typography>

    </Box>

  
      </Paper>
    </div>
  )
}

export default  Platform;