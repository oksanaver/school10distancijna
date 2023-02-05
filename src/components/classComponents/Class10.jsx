import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Class10() {
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
          10 "A" клас
        </Typography>
      <div className='flex'>

      <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Англійська мова 1 група
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTL-adaB3Ogy3ufJjEJd8vbuTROcLaQpx9RY5UYZD_8_enSV1j-20K9IB8IvntJNv0agccdwxIij-Fm/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Англійська мова 2 група
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRaagDTI3tYQUIDj0aTHQLzm0crA5RhF0D6oUBj2TflG_HkfpCx-9kIMcVgQfXq0OpOHUfuUC6cdG2L/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова 1 група
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR9tTqliTqdCQHDc7hflyDAWK1X9oX14l7qKuNuWhmexIZeIWaSkKBj4gjWQUIqq2az8GZPKWbS4JQQ/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова 2 група
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR9tTqliTqdCQHDc7hflyDAWK1X9oX14l7qKuNuWhmexIZeIWaSkKBj4gjWQUIqq2az8GZPKWbS4JQQ/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTvzlO39nyniqfhGpeQJwMbvB-FbBH1Z8-20ZZZL-DdaM6fRcTD6HG2ivyAVV3-In95zO-6gvqsAtTV/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQYsUG8owUa72tky7mtau6N_QMD9INugQV9qPAm_isNmtInLvxWFI8voPRDfQ6y7KA0pgJR-ijysmyk/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSlpYtjHbz7kjKIbnf3uchGp3xMmqy4dptyBp0GnLe6A-4KqE2ZJSmmKU5b3T3E9Ka_oJq8JKjjnhZo/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTLZIOGNx6nbFsid6yHk4WtOdswSqQFYUy4D51e6MB_zDxkP_8XIlBFrWTzryTx2bQu669K7bAN7GuV/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTwedIydLPUf3e4d2aJQN51zPQum9V45bh4e2Bhh4YETmAUNA2h0RsuVOWHbCfHrOLKCTkcfHZQVzkG/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRO7-eIrI3S51jT-VHVG8kqaqUwDjP_YbhkY5Af8i6as0OJBKB-pGJH6YA8li1cbdXcifTouhNf1OfF/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQZnqAJPdhWkaoF9yh4pBREqsj1AoeGwxWnIvyak_OjwNF24oThaRbokjhWFfYIzpLs5kq_sIiVEpVR/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSp_T84AbuJFZ84ktk6464CB3F4WprarYBRuKbb_cRiHKFOoiPRVqXNSO2wogZVMnl3MDesyxLVWTwJ/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRXcqhwXETr0jjfswC-6YUVHe6VU8RwIkMZRPM7CLxqehVKsUKKwUFlslu5RM2sWxodcglaI0BgpjaV/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSAn9EL0hfAtVEMJu0kn4sQL4aAlXjRUIrIVnsxrptzm5PAMw5YSbMOArRG76FWW-zgm607-4IkhfhP/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR2wJBHLRYuoITBKVj16tNBGq3NNLufLTlf1DJzJNK27qvFg2R4CIvlLVJxI9melLN0ojBquCA7v3Rf/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Громадянська освіта
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQpqMjz_gURMCBh_BsuxqsCGPepxHIPQTUBLbBWvxaYa86phKg3yDIvt1GMFu_q2Z4f5iYlI-7FSBl_/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vThc8NmDOfWIm3GH3uSOLy1JZDnbJBKTZXsqOAgF9A4bXSanW405Vw9HQffqysAFMxc5PZBRogq-g8y/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTZdn0cd0enMzPzTGxH4V2toK1RMCyuON2WuYdX0hBT_TOTaN15WcOiBC5GRk8zB9Yn0aL338x55ZL1/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTEyCXVW3pLM-cnEHyq3p0irTKCKCp0ITYpkVz1SoID2OK0vjZt4OB1rhStBswgsF91Z0Nc28yg9LGL/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Захист України
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcVpnj7dv3pBU4aCuvGW6WMZkCUgAPYaNhtYzLe1AMh7rfecYFA5TPDPIAOAaqJ1MfUSguVDwo73sd/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

      </div>
      <Typography className='classTitle' gutterBottom variant="h4" component="div">
          10 "Б" клас
        </Typography>
      <div className='flex'>

      <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Англійська мова 1 група
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6cub7fThRfMcA0BY8zbrChKE0uqhPjcU0Jz78NUdlEaSiGzGx6tTrg8l1rJc4S4hEsgVpi1yn0IZ1/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Англійська мова 2 група
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQqsP-TYf5pJey1e2fQofpxLJEOcnDAQXdLa9atbSWMfqwP1qnX8esS_OPAqFSO8NsaZ0ywLCWVsMr7/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова 1 група
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR1Dxw_643yknXcr6yrVUCSl3sei6qW9mvr_ClsZfAt_v0lQ3N_f_pjvpYcV7RoQqsno-DC7-3sfhv6/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Українська мова 2 група
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vShSfnIvRZCSuUf2F2hC4oxnx3LBEbCBg_v_KGmmggv7HynteTL_sLxcXgo5oVP6opaLBcYE1GRcTtG/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWo4gJeMfw7Att57NK2lpwJMpsJQnTfCmlQYZWu0aj13HwT4cLQX8Vg1DHLkfIDf-nfvio1_z4TkH0/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkz-HER4vtEy3LmXlp_lwW305g-XP3Mvz3sVz8Kzvwy5XoaLlkWWJsodkqpTl6JzG6LZMnuNV1kp_1/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9Sqcoj2j1Z8RlfNFn2Cf5H3NwovA7pqeNC-uFFlmrj4h35z1YRL1LC_0lMq6BdrFFtti6CpUnT-bJ/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQHCRTK6efEVgHrty_PD149ZeydYYIw0DnyxLhoYNlw3Q9LZTlmtcHbawNWlWM2EbD4bNPXFqbYCew-/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ96xFjqjykhn8fqi5uxXPIEENUdGuJ3fROpIhO7JegfHRWdueTDH1S5fpsPujLz2ABesRs7ayk9ANt/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT96xWZaHEFtdqyVkyBDgkI_dgZBYXUX5VDD43zpfQDsyUBwpoD1NA5-MVKBPT8XgzKogodNsod-yYL/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRGMUyQ_5hyYCdH_iNXSaQubfgu9nhbB8XeKRaKkNg9WOUtBHOaJGBs3WnsBAcEl4ggtOYQhZoO9ql9/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT8qNppJHdQBGcal8E3q_xjRA7nRe_uptP1KMKa6QGTciWdY4r_iOnWxpZCsbdeYjdWbWHAnYRd6hTJ/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQrZ9B1PkRkI27LxrHL4DHliNxcTCSfbk3yiO2niitmwc7Hn6VHMSlRP-Al1XL1VZjl7XQlAfgxjlfQ/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTuDdTZ7ARts0Y-1ds5SPg7UgYoBIdh--2jZLuvvl1JoQQteWpgzOiR2E2VcxQKwptVF44kxuQklyJp/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTZtNq0H24syRFgKY7cToG5OfK3X6K3TYm6_QHBbLFmFB_ASI55W40Rn2EoMdqTvjo4r_wcyJI6UJS6/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Громадянська освіта
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSrbsxCO5P8zkfOmaVKzVJ8s-923mIzmtyTjbBZ7SD5YWHBp7XwnqZrq6YOeSNaYgV05SDOEf47y8x-/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeh7Nvxj4ktyM90CB_j9clpfsb1j7QM1J8ZhfM7_OwJ96yp4xdB_4F0uQAnap991M3x77_pcAs-Iml/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSHpxA2yST581Ca3-5XnYIvmHqrAV9CXMhKt9jz3MpKT06WhG0WAdT6eoTS13SGzbIIA1ChwhzkiPWl/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLV5igI129NVM6YbA_jBeMoaQ4hC_WtfcI8Ke4Bw1bBQbM2Q2oOCmuuFrdDejz8czu8K1jzTKJ3ygr/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Захист України
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Теми, підручники та матеріали
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSvLknbC4mJfx92BqRCdf49bv021eB8Th8M0j3QQGTgu7MBD-y3MIhGg714zghGDZ9dXnAVIyvCPYw2/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>
    
      </div>
      </div>
    </div>
  );
}

export default Class10;