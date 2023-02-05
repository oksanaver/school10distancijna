import React, { useState } from 'react';
import Ajenda14 from './Ajenda14';
import Ajenda511 from './Ajenda511';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

function Rozclad() {
  const [Message, setMessage] = useState(undefined);
  const [open14, setOpen14] = useState(false);
  const [open511, setOpen511] = useState(false);

  const onAjenda14Click = () => {
    if(!open14){
      setMessage(<Ajenda14/>)
      setOpen14(true)
      setOpen511(false)
    } else {
      setMessage(undefined)
      setOpen14(false)
    }
  };

  const onAjenda511Click = () => {
    if(!open511){
      setMessage(<Ajenda511/>)
      setOpen511(true)
      setOpen14(false)
    } else {
      setMessage(undefined)
      setOpen511(false)
    }
  };
  return (
    <div className='card'>
      <Paper
      elevation={3}
      sx={{
        padding: 2,
      }}
      className='rozclad'
    >

    <Box
        component="img"
        alt=""
        src="/ajenda/ajenda.png"
      />
    
    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Розклад занять 1-4 класів
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={onAjenda14Click}>Отримати розклад</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Розклад занять 5-11 класів
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={onAjenda511Click}>Отримати розклад</Button>
      </CardActions>
    </Card>
    
      </Paper>
      { Message }
    </div>
  );
}

export default Rozclad;