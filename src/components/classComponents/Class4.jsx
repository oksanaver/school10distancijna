import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Class4() {
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
          4 "A" клас
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSqr7vHlfPPzulO25plyjY8To8enr-uSWGbYAH9hcQHcxV2h6fqPcQbDkMG776JPduD5IMBpD4bXZgn/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Дизайн і технологія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBfbII3B61fkJa3EeZDzJqVnRhaOI2QkRuuZz1TTLOPtXYzn2LhK-XelftQg7piwtb-4Ios4qDyUbO/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSn_wDGi4-eSomtYMOOZQWg4-1jS7xqpQy1Bg1nkZ7QhDSwIYoi6szvUEL97MjqJ3DjxoeLguMFza9p/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRjznSOXIPWjez5AykptijzNS-n9ofnw5PpNP2KsRzA3CkGQzV6pAOfQR_PJRvgVVp0ccR7VnPyMkBK/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS5JxsgXcyb-Lz783w_maJ013jXESt0AcXIaPJL2-TQZ-u8ewtnaL0iHzzokopJB5qxyru2hQezKm0Q/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTPDbQLGBguLQAx1XhoSo2Mvz10VkZuaCdSCUPzMxlpD9uLsQqVmSIPwdIruQufRSwtRZhxmVdGxY7O/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQmHxhVNxMmU4vspK_sRQq-5QjoWcbWphjnCbxbJtCEaU5SL9lC6jISPTPat4-IqKTruwId8q9heCdZ/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Інформатика
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTMbTW0bxQcLvjrP1Yk4RsHoIhiUh56ItkAZ9zyfA48EpCxpX2VN3GEOjabAE-Pp4nAu_1aBO6CinOr/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Літературне читання
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSuVqC_-X3pxtOclYiezJyuZUbRUwUZYpgPEf_WYOw4EQ4dyGO0C0iU4MVlxx1TUN5oLS2yeEp5roaQ/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

      </div>
      <Typography className='classTitle' gutterBottom variant="h4" component="div">
          4 "Б" клас
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSoXjQ8ncI_-sGXj4AE3KliRdrIUFiGr7dtvj7VxAFKk0m-D29sq2GsG8p7yEIkXmd2jOA3x-EQGKnk/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Дизайн і технологія
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQSyv1xAdhgTRhnuVc9sQhJQsJZHQmQdjy7YuS-qug6Q2JHcTZ-2_ccv2nm13kwEESGQIQvP1I_EFeM/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSOJBB5xW31HoP6CaaM_73Z7eGQBvoj1a0ig3UHeSg44FHFK2kfK5CfCbNaKgUmrw4i_XM_HMSgK-Jz/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQkvYTqQbzewwyH4_dT-ggfLTCcZu3eTWFcdPvEzaanjvU_TxG3RfCKE4ZQfixZ-8mlyFlbym3sZrBv/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNcY6bHCPsKp80BO-FAfMRS4vfLU4A84fhOObvUZBFMNf7E4jyfH5oCAvqMbCqvsrtFsf1YaYHnKfD/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGTl0QAjRGB1hqkwOGdJR8_ocmpoFBUGC0azQHEaJFyvcWf_lki-eV9a1VSgSb0ryIS0OjbE_DtjA0/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzrME0yQQmnRxSUGDGFh9G9Pkk9JD2yLgNkSVQNxx1lDJlfhL5O-J7PdWkAIECShWY1qAgvpHV2HR5/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Інформатика
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQttGQoi7EJMu9_Wki9ACi5Zu51_VSyYDeZkGMRr71p53zQlscg0DegWc1XZtI2IBp2vDtFZoSSCtVO/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Літературне читання
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMyy2jTywAIgLYOvtOHL1OYMmX2Fjt5NgRtDUhRYe4IqM-oJ3wT57j3kkrp2PE_2hVzEecz3hdfEHK/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

      </div>
      </div>
    </div>
  );
}

export default Class4;