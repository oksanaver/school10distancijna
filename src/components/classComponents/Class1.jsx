import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Class1() {
  return (

    <div className='layoutMenu'>

      <div className='buttonShrink'>
      <Button variant="contained" href="/home" sx={{ width: '200px'}}>
        <ArrowBackIcon />
        На Головну
        </Button>

        <Button variant="contained" href="/class" sx={{ width: '200px', marginTop: '10px'}}>
        <ArrowBackIcon />
        До класів
        </Button>

        </div>

      <div className='flex'>

      <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Англійська мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxDkRW-3TzsYYIw8fS5G2p5wFuzXdhzgOmwGi_wUmcdDgw5hdw9d-quAK3d7zk3Ydc1xMo6voJeECz/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Дизайн і технологія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSsVqdfgAPuI0BuffZlknAak00cwavYeHwBvbWHpya5brWMG2SlN1lVymKq1fRKRbJoNxJi5CQfWYms/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Математика
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3i5Y9nAVkkVNwrOnpd4aNM6rdvED_sM7bQicdX8KkIDjsUsXN6TnjqF4sFkbDWtY1mDBhsDAdG3H/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Мистецтво
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT2Ycrg0F6odxXqL9h45LIvXO9r5LFU8Ad1K-v9Y7oYS92iyZ5QQE4PuUrneP_havdovtgd2YcLH6qZ/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTsQvpwGou175Go9MqbXJoRZRdvzU2eCSi8btJdnteUVUwYZnDEikPj6IJ9OQDrO-PJGa26KD8qbmM7/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Фізична культура
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT8MvUt1UaAtPAZRkoEP_hHBpssDv2ncZ9HbOiSF1uQWcj3bu4v5m2py1EQIWG4q3HrLMcoLDchMKX9/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Я досліджую світ
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT20qIeZcUNTObUEuRkhNIKAuWkHzLVJwUhtwOOG8ABZjhi8C6EF1PYnpJIZ9xnud6KEv7mQd-Fqxj1/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

      </div>
    </div>
  );
}

export default Class1;