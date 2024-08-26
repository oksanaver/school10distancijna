import React from 'react';
import Carousel from './Carousel';
import "./Wellcome.css";
import { countries } from './Data';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Wellcome() {
  return (
    <div className='AppOne'>
      <Paper
      elevation={3}
      sx={{
        padding: 2,
      }}
    >
      <div className='topContent'>
      <Box sx={{ width: '100%'}}>

      <Typography className='friend' variant="h5" gutterBottom>
        "Школа, дружня до дитини"
      </Typography>

      <Typography variant="h5" gutterBottom>
        Шановні  батьки  та  любі  учні! 
      </Typography>

      <Typography variant="h6" gutterBottom>
      Комунальний  заклад  «Маріупольська  загальноосвітня  школа  І-ІІІ  ступенів  №10  Маріупольської  міської  ради  Донецької  
      області» запрошує  учнів на  2024-2025  навчальний  рік на  дистанційну  форму  здобуття  освіти за  державними  стандартами  
      загальної  середньої  освіти  України.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
      Основними принципами дистанційного навчання є інтерактивна взаємодія у процесі роботи, надання учням можливості самостійного 
      освоєння досліджуваного матеріалу, а також консультаційний супровід у процесі дослідницької діяльності. Дає змогу навчатися 
      на відстані за відсутності викладача.
      </Typography>

      <Typography variant="h6" gutterBottom>
      В дистанційній школі вже навчається 750 учнів, які  проживають в 30 країнах світу та в Україні.
      Наші вчителі завжди готові допомогти учням із засвоєнням матеріалу онлайн-уроків.
      </Typography>

    </Box>
      </div>
      <Carousel images={countries}/>
      </Paper>
    </div>
  )
}

export default Wellcome;