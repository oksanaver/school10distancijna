import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


function Contacts() {
  return (
    <div className='uniPaper'>
      <Paper
      elevation={3}
      sx={{
        padding: 2,
      }}
    >

      <Box sx={{ width: '100%'}}>
      
      <Typography variant="h6" gutterBottom>
      Для отримання більш детальної інформації про школу, пропонуємо завітати на 
      <Link href="https://marschool10.klasna.com/uk" underline="hover" target="_blank" style={{padding: "10px"}}>
      наш офіційний сайт.
      </Link>
      </Typography>
      <Typography variant="h6" gutterBottom>
      З повагою,  директор  ЗОШ  №10  Зьома  Наталія  Олександрівна  0681077810   , 0982682950  (Viber, WhatsApp),   
      електронна   адреса  школи  mariupol-shkola10@ukr.net
      </Typography>


    </Box>
  
      </Paper>
    </div>
  )
}

export default  Contacts;