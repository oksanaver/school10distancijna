import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Class5() {
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
          5 "A" клас
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRlCH74FCKo4kRKV6PsQWyFEZ8seNLJ0evu_gZDAB06tMrwJE16ovLrXFW2itbrR9u2IIwaXjT4anZd/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7bav-gDZoVAF38blkqlaxwljbCQApG4URX2nZ-zOE-ccVloer18pn6a4ptOMym2HDgDl_TcQSMXk4/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSt5Vkp6vtMxJG-v82n6mZaJZ_AtppE0Xi8gn6n-eAhGkyNsxlwxd6dEl60RhPyKDgaZB4a9U1hJAJX/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXpJIBoY144r6IGKoxwaYljmcPFRX3aWHHSl4du8Xn2KYC1v66_yjZeTdUkuwxwyKxk8AO0cLlrUH4/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5_qzFBkxXuv5APDmQc5yOqyEh--hyUQdlX-ePegv-bLVnh79gUIsDTCjNY5SJKnewoHSyY0clCFTp/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Вступ до історії України
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTQX9SyRdhUFRF_FgTwf1TTmO6cmJW1eu5QSr7_tX0puQ3b-j0Akv-cada6KzTAxuPGOafQPlpNDnKz/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ8AlXa7OmvA0GFiLipxIYwRVSllX3DP-Q0iaG2w3rvijsTSOyViwYuQsE1lcT9GEHAkkw1r0vX4GZ/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQyhp5ryNn13mDXmLEsK7hhdMU9GrnCXGitiiYt21oSDG2KKydQZTg27o5Roo9ZAbmU2WzLDF4DCFwQ/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Пізнаємо природу
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcFo96KpFTp3i7VkaGgrzKCGUei-un0nEG2qrQo7oDhbhHXml7x9xmEwnaBZ9xdIt6Tn9FkHH3w9r7/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Технології
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR5luwkRbG5GLCh1eP8JU09vQIr1D7FrEl1UdCPfblSiO1WW97wgQrybdqZTNooZ8pU_8MchpaNNu27/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Здоров’я, безпека та добробут
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSeIangU8lNywqoXTo_uAV5gtMvpICyAaO5_mvzrGFZJui9JkYIffULiln-AZqVuTYLvTChxtnPYhh4/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9G_wSJMpPQubGs99e_02tLe4elgwcfq5eMel4M0GNm5fzRvmYrF8RnEKEe9OCG34VfFVnn9MCuyZw/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRusJMgWZ9Apqu5Ps7nJT3yzlZBDq1psGit63C_GLnT_-S4ti69unHHH1liLwaXom0T4bvbqmg_QZX2/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

      </div>
      <Typography className='classTitle' gutterBottom variant="h4" component="div">
          5 "Б" клас
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS3MWFP69OL7u8fQmfeUTLsYbOXVvMNqZiCe_L44qbTt15kAu95SH4EVtD_K7KMER2UfMSID1TK90mU/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS9e2plPMN7Zqt0ieLVvQDIqAatBqwWH4q_O_aK4xE_AmliJgmyI-EhdlMuropjpw3FKK78kCgwUVjn/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова 1гр.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSHeDo3VVD5_SMQMvygbqI9B58W-yttW8J3E6AZvLUfFVgIXKtbBgiWvkEENcOtpqTUFexpLZe_eHQJ/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова 2гр.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRONu3SoETHjzYjZ0MKE1E1hi-DT4Kl_cNNgPikn1HAR4G2rNi0W5nC5QSybvU9S0DdP61v4IbCbg-x/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSpSsCG-arRMu0Vk505ALMt-U9aFbljLK0w6DyVnEdZKW3H1kKvIixrUfZJ19LY8GReUnanspVhbytd/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTzc1QRl3rR_kUhieKAjoT_gflnxWuLhWHMngkfxjctrbMTno6tsxebKfC2Mq_LF5fRD-HTpUVutFOI/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Вступ до історії України
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVLwGC1lvL_1LLvvwvyN_1d0cxiwABDy4Jp-VHaQUipWfDVC0qiNzYbt-ClnMmYWwXCRcUT1WtcUre/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQMieaZ9VqB3uU7zEr3NFfn37NshUb9adMplmPBgfbOgVRxs8Uur36thPZtI0OoAQXDBTnn3uAFGSsV/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSGhZnJewlXJLvSTMd8WdSaTOOqwC8k_9-VnpjaclLiuFM9AGTEvleBdPduga5lAdwpkZu8j8Eez9fc/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Пізнаємо природу
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSAtfFvl2wkIjaCnCp6F2Ff2b-2xf5PNblQvajAabPmuxX4ODsqTxIQIkMdpbCR__wGTfmuUY8PQG1u/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Технології
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2VFyR_RQ1ylnkxC8Vyr7L7DDl2LB7oJ-b3o8zYA-PxeW95_wWBSIKnW5kp0dSuTQPwLdZN8RkdHxW/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Здоров’я, безпека та добробут
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSatLHgOyGppz-NudFocOCc3x7YNQDcNVPjKjJ6Fz-V4LxadmjWr8fXN16ScDExCljwEdBsPfH_1PTF/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRwSo-F5zpjZQSz5GSRfTJ4zmYqUzsQpj3mtuNZKdeB8rcfIqshn5Eui0NQrSCMMM_gDO_CdavajHWy/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKxzQPnwjagZlu2UDQftsISCqI5xwxZBXqmonqFYomCQGDhmQWxrtXeSj3Ugn_GUW06a-zoi9bbk3W/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>


      </div>
      </div>
    </div>
  );
}

export default Class5;