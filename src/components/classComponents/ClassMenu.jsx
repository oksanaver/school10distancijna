import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ClassMenu() {

  return (

    <div className='layoutMenu'>

      <div>
      <Button variant="contained" href="/home" sx={{ width: '200px'}}>
        <ArrowBackIcon />
        На Головну
        </Button>
        </div>

      <div className='flex'>

      <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          1 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/1class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          2 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/2class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          3 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/3class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          4 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/4class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          5 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/5class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          6 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/6class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          7 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/7class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          8 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/8class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          9 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/9class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          10 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/10class">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          11 класи
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Домашні завдання, підручники та корисні посилання
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" href="/11class">Перейти</Button>
      </CardActions>
    </Card>
      </div>
    </div>
  );
}

export default ClassMenu;