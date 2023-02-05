import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Class8() {
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
        <Typography className='classTitle' gutterBottom variant="h4" component="div">
          8 "A" клас
        </Typography>
      <div className='flex'>

      <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Англійська мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTAh-YXUCcNaXQ4U5RejLlQpZZhTDsCWUvPLkmrR1RlcoAlM3QjScKYTl75bz9Br2lOxJxQozsNh5_H/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Німецька мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRqMa7Gcd_kg6hMrtU2ASxINwBaJCBNrG7BBwFQgTWinnxOJ-mfXjhm6XHL3-iQFloTqvdzswOIcv8-/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Французька мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRCytU7PEvwUGTgj5J77gDo-NL0JgMKakv9dxVxBP_2A6UZEhlPsurKBlSbyoXihstZWQ0qYH9KqzRK/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSlaIrEF0oTRACbrTjMLUKbtjIKr7a5_txeiXPdjVU-LLHjdLxqQkZILRyQ_ZkRmtYqZbfDGQU7LNNo/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська література
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkOWcERTt9TUfBnRCjXFmo-tGaJvpw2H-Ya263otPXPpnlg8bo9dpFRGn2c217j4z6NZKCiLGcLVF0/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Зарубіжна література
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTNX1s7qMabRV0jul09L5p3oVpOSoR3TRuRl3jOpcXUAmb7n5aSrn7ReqwAC9yAxd8CRDoa0QUtZGAX/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Всесвітня історія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcuqLXEEQC8Ed-xdPtjz7UIOah0BGOJmvz4BmOHVgwhXMU_s1majzBuv94_ZCHCV_vOQsYztmEGwTW/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Історія України
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRIoJVJPd0zXhRK-C1thLqnRuC4waDPUDltPSNZNLz3NpopPboa_MJhBxtA5vrs4-MLfLvNY5TJlUiA/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Алгебра
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2qzrWbeu8iUJ0bnLjrX9Wk9T2-ldOQnILwSDQGMqN0BWXA_rk_1oxc8hVrzMsZOrqMkGbg5PeY9cz/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Геометрія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTgIC2rzhebGFEMe_TDDlCD3cn_PZ1OVone-URteCui_V-Sb1Xd2xTrH-_G0bXoRdl1J19OXfn2KdsC/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Інформатика
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI9p8p6xzccnveK65MT8dlXk9YIUY4AVjLNcYth5f4H21tr9PXdDowTZ8N6zXgIy0Qg5rU9aetmOBi/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Географія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQs8b61nrT5pQERQnujrqhmUWzglVI6oqsju9wQICNjUugZezJStzTZRWpi1c10sgQ5iE3rmJmzWPiI/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Фізика
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQs7VyYoWup2J_DXPWLGjm7zJj8kShdEKpbaUV3k4NI9f0USTLAzSYIdvZJ0mA_AMXuc5utiIBVg_Ki/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Хімія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQj_4m072oBLntJF0OEuHMCIeVlUC117S4sQ08ReE5WmccGtB3yBsPaV0hjzQeM-vRgPCEkfLOvxaFO/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Біологія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6dTTttXIE7c_-M8dIedcJzqBpEk_2o2Qaao32MmO6WD7Cw1I8SbqAnYK7jL0gjiqZ5TvOYYnr4WF7/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Основи здоров’я
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3Rr-FqMZLkSGPQRZiLwsm-hj_Y_rLTjMw_6VYkud3Wppy_B4fbQAoqeVBiq8d4QDziB4hD8b4JclA/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Фізична культура
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQwdgEb15O1rq8uv8Hd_K1ns1oB9Xssrh2lWngxUIruS0MahKkIrRY1LYndXEm-Pj8tiQT9s17GG3vK/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Мистецтво
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLu4FMOVdGWaME53eMtREvf-tlThpRglSQSHImGYjU25Ril2kiXy1X6Bmu6qA7A_KcdY-9a2T07woj/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Трудове навчання
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSPmuyW2MWKcZTqckfe4jWjXKub5AYmjhqUiTknto643j-55xSrO0HXoLIf1xoWv_ZKlAG1rddLCrlF/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Вирішую конфлікти
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT15xSxXusxwbSRg6nOhnenmuH3wuczdwpnG2froXtz-MdDH2O0fTszFcwAi12T1xbGynHpXWxUAPfn/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>



      </div>
      <Typography className='classTitle' gutterBottom variant="h4" component="div">
          8 "Б" клас
        </Typography>
      <div className='flex'>


      <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Англійська мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQiQ5E3mNHbJTCIY3Tyfm1EQqaoUsA-s4CLpBFo7HjGTC4Xj8Bz55qnyHISUXJ3lDEQeo4jZypkQVj/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Німецька мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaJ4q7uYSQLYLtLOrrvBe8QyQt8flbwIBwj2rme4cjGnC_YkumlluKSe-4JE3y-g6-wmoVJBoYPp3G/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Французька мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLbeC6P-0oXW2XwqaNCQ5BmHvoDhpksaPLw21CiVuZNdOj_htslm8BcOuLusyvfyxROW3He2xs8rm9/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHozKtdDCcWDMoMIfST3gSG-OEzZUbiHPFKzxVbNkmnxRziFqe_G6w3w7mEZjjCGhLSc4579udXu22/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська література
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT-H4cY8JTakRanTOXvHq4x01G-o64sx0hkAVR7p7UxUmBz0yU1N6dRv1ulpcIECv6go-mH1jCARvqY/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Зарубіжна література
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS76xPuwkXRtjZ2JDsunm-3qC-zex7313YtKv8VF9eQWIyfrdLMqWdyMSwIr-vlZdPzVQzgJ6BVwdmu/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Всесвітня історія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQmJu-CI9601jhssHOOLl2WwY-dR7PT4mv5-YgG-dtC3yN0USvo3sBA08tL9v_sGDy5TuidpxlGkNAa/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Історія України
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTgOcHnVDSCVex8Bp2-tzkPjgi84uktJMctPXdDQYk8bCxpb02Fl6zn8eMX-sjjKZO6YwegNp3eBfEY/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Алгебра
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRJ1a9JSbcn15aJUmE86a2Q7hq1vx2xO8OMVffe0fWWLniHQ5TiEpyBvoIBmkvk--ShutuaI27gsVd9/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Геометрія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0m9EN8NGAqIVpVJAgtctprTQqctIfd7iW_n7CwisNXowN04Vsobi3NAuUluhKwY9aDEtC-Nxwk2zz/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Інформатика
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTSAs1WQyYy7YF8oESSGR7NOxW6vs3rdcQ7apETu_Mnwffg5L7WK4zbsrApJPopeqxY42wrjTZa3kxq/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Географія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTkopDAjIQeQfLchx1h3Xod0hHx8m6ItSw1R1TpD_PrJ8Rs4awAI81kDeKemZe65cr-VE-yV-ofe2ee/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Фізика
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSMg4IvcCdx-Jxb5k9ycU4XZqgF1mcJipzZTR5wo_xZWJDW15IDCFehBrL_UwWSsGTKS_4x-Ia-PTJj/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Хімія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTdER_2LRCccv-NaXIi-QG5b4IRFeuuAdbvcqzCBrwr9zwXD4snNWmhzYV3phB3Mx32ch_FPQ9akoqW/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Біологія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3klXA8W7c78mGKpGtUu4wcxUo8dffBxZmZUqjamihTYaTrGoGVTUIC-Wbklc-lj-C_BZ-53u9H05H/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Основи здоров’я
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0vr_rstJm0bO6hAVX_aNoNP2t65pZ2wVDhtqD0CaFfnBQnmWzBM24Am58Hic0hf6LVP_nctd9IQM7/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Фізична культура
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRQVnW4_TPqlxfflODIRZrMJl4eT46cTRROtqrbOs92BgQTPz5Lm8Om6FRoszMLoH8KipIwMeGUB0rK/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Мистецтво
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS77MkaEB9qdKm7l_8dtLvr8dquVj3VBXowPRR7mKu8Ou0Z7zj4Yv6gjgMwSj-qexnt5trTIUJdjQqH/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Трудове навчання
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSlTHA6qf1N2S7L5NUh3Mup23u-4QsCRbx8PrmIeh6W_SvS26JRUtirfFI9v6D-H6IAmXU7JhVS1W1g/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Вирішую конфлікти
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTrxwlTPJIhXs0FU4SgYWsnCNjpUDOJoy01bOh4U7LFxEZhL3mirgLXJp39wdsdWUCLyoPm6InFyk33/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

      </div>
      </div>
    </div>
  );
}

export default Class8;