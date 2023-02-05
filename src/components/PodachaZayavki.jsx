import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


function PodachaZayavki() {
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
      Запрошуємо Вас здобути безкоштовну загальну середню освіту на базі нашої
        школи в дистанційному форматі, з отриманням свідоцтва про здобуття базової середньої освіти
        (9 клас), та свідоцтва про здобуття повної загальної середньої освіти (11 клас), державного зразку.

      </Typography>

      <Typography variant="h6" gutterBottom>
        Дистанційні заняття в нашій школі відбуваються за програмами Міністерства
        освіти і науки України, з можливістю засвоювати матеріал в індивідуальному темпі
        та в зручний час.

      </Typography>
      <Typography variant="h6" gutterBottom>
      <Link href="https://forms.gle/VbaVME8ZYFSkuEGy7" underline="hover" target="_blank">
      Подати заявку
      </Link>
      </Typography>
    </Box>

  
      </Paper>
    </div>
  )
}

export default PodachaZayavki;