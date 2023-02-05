import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Class11() {
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
          11 "A" клас
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc12Jk1OzYjkns7_oHnL0faDyRcPttXHsUt6vcIdxdEnmm0cLx_1gHM98_jiXW80OqMUHuoagNyh1t/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRIkp0DFAMzruR6kLN5EFK--ixYOKUHbN_4f9g7XPx-K97vj-1Jb83iqZjIkveKC3xUZ0cYlIf99WZd/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTKSvXMq7LV_jL8GeoeXbQGq9uLOwbMdkLW1tCdkCQzzoBXad4h7BHs5g0dCIjaI1uVodtUtuQnyJmd/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSMy0mMdqJluAKSIPQoJWn_Q-7BYXXrGylGaKQmTt6Mvmfi-rMXP3bco0atdEWWjBZdOtPX5N2FHzk0/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4mPjwmTz128yuwyd4bs8JDXj9CjaO6qeNg8bfepvMuzT_1vRUfM6nZnLY5ZzCl4JRP5U6OE_pen-5/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTaiiWPAB2Zhxdu8NyiPpEahhW1rwLC8I-DygCvGBKMITrbeyZCYnkI9bL-n5Q_e51_Nw-4TuVMIBJ7/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPNMw0cuLZFUC6Kaid3LyELTkJlEnGXzZg-ppMVe8s22qWec3TnsRGnBVyMugkKUUSQSJuGcHmmxXR/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRbsneq8wv7jYR6dVbCrjkt8RV7Nvh2yO5Q-JD6tlq2FMo7VmQ_O4UhydtZwdShWc99Y5-8VblLMmJ/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSSJ2M3bao6vC3UGuDscSidz5f6xI6K7DfmJjk5vHcLhakujVHvW9xPnQJLX-iW5YI6b8UqtRJtr3rI/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSniYWepEGvbb69QyhmmYAHz1RhRe3wANGOu0x0sBBdA6A1yvfudPCpjhFXl6u56Xdo9b7YsZ-qTSkq/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTIbKRi0iyqbFxZPsTtHjB84wI9lWZS38ulel-bCxToreWBBKhidFX-uQwM-1wIq8tn8YE9CO6P0emU/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSd4nlXswqWUfAuWb0p1_Pd7ugPB5JQJ0RW5Q61dN8TxFDjEUGhsld_HakYQFv0y2SHsOGkd34aMY7E/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTduT1hk_FpbKB2ewMo_Zsa3cD4MACtFq4pIMz86MT18bEXap3vpS5JVMWggoc-484Ad1y6PiJTFBcv/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR0nibR6XaGNmigPSib04rZYOhZCygfnAUYqb83KAa6dHLMlPsc4d65h3zuBBBwHvKQsA8po5sdH-5v/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSZyXddhuleTYTkplzzgULObr0TT1TRBwRhQbFHyBMC0OWy3ZR_UDnKfWAqPbbX0tFSTfieKTiZysxR/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTQA20N-THr9L4t7Y-PBPNiQ--4BYFDsrjfUzZUI6znss782SnWpNgS_pDBF8nBCsSlmXb0xQ1QqS5A/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzcS8g8Bk_iMx_tgu_SeLY68Swefvxn3KvSVyL8w2QKkmuQif8RDBzcf1y6Nm_bCFKa4SygeNbWiae/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQpKH1GwmXCbn-y2megZPaJF8qm3qNsQKrETvDx_q77-q6aMILFOBp9xpITjP3TQH5zeqr4DT-VAW9X/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_4ELJFgqQPv1BJQB7uDCU2NOUt-CrHouRy4UvCeJv33PJ_hR3ItVJstT1wid1s2QP-z70idzXuCoK/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLaWjgh8TROZoRforn4DEOrg-XDeJpDJcKuAU7neaclHz0o6v0UBMucdVhTIAO0-ZCWIOwWo0_aQhv/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>

      </div>
      <Typography className='classTitle' gutterBottom variant="h4" component="div">
          11 "Б" клас
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMvVAOv4uTGy6DgPJJI7KEjoViH7fT4UnCCoP7Bto3KdDZkR8W1u1TbDk69BklbmuiGjBTgiBOX_Yj/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRuC3TYS9dwSmw0Qa13YeUTkcPRlfEMRWc-QNtrzY3XGIxgeU8QpNrtMU0EP08tBgco9_nwFu1gAJe6/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT47EXMDWwP2I8UJHPql4W1SLaKrjHOBlpw34hMYK2jmKJcFJ5QQmcx1JqusKpUZA7YfCfDV_3RfudZ/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4A5jYCWsazbPHfeaNB23yd9bFAcu-VhmZcembAgt3pHtGcX-H_hu5HzGhfZZwp5G0wNDhiBw2D84e/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQdMjmeHPHuB2np0wWD7C-pYBuZl6LYmsCIYYoxOMvm_oFx4XxEhYyoDc4hMQ8ZiX37wRR9VYvZHx_f/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTGsYXgDKU6gMsGGCrOmIqi1h246AqlTRn_Rk4iFbABuJah1yf2i1KpEiNYdgr31eRas9VFM9w6pXb/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPnA56w-cfs8FevCIDvLlHDByRR3BP9lTF27R5bkSZIBMkFmQr9D1IN4JWdGjkEmXtYPywUnFYHbBW/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7HelcvJWMxWplYsu7TffRHO97W-GT_JOXJAe1RIRek5sugUQePVBKl8N0RhUiEgvekChdSTAzwBbs/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTTnA2vwZT9d_9aPIh2E9bb5fdRpiMyHU1XZUDB7N6Mjyrk2EyxrjNx6TTInjQDICog8Uq5bAuh0IEn/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQHM6NxszeTZEjFT6Mpk9vOA06GhJRUVE-kYnJdm7zB0M9SVcsAbj5XSLJUMbjZgZn6Z_WaTbJeWxD5/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQWKY6Q2w4WGwZMHImC-JL_guNxh08xrKkpqcSHVziI2ghmG_rzwBnjbPndSSzgBs2GlPHvnvvjt0sg/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRD4Wvmx00x1urljUE_w1lxKVR2Uz1ZDucn-kuaMMUjO6fD5MJCt2ETDbtiZrcb8GKHxC4dq_awobye/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRjcMkcxieBsHuX93la3PL7i1RLxKDv4Q0cZ0kZ2l8UUTLfFEA_vq9nJ2kvO2lv2mEGKLVhR_H7gdsN/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR8bSeGtikP6V7rhzmy7kCjqswzQ-q2BxXcCDDXLp7NcmhkglJUbIr4NVRmTapmIv3AjcumCLGjGltv/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRdp9yLjYP0SCh3UmPOTKeBLYGe00bZ9ptm3zQPYeDA-Ri5NwTKGR3JoWNgY18afVL9ibh-8g26UL4V/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTZXfs3BN4WLVhlEKHlBxVVIu6LXrTrxh-Pd5-FEtiDMw8QwpUHkAd2RvTrkxuij_iZJMrB8Hr6FVkS/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5PA_0-mGpJ2xvEKZK0dgPoiYAo72GXwakf1tQCNY-giBfJG6ZfrxTpPnppRTWtyo17ksez-6YbIB7/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT0PQd4AxnV6qcBWFDZZLlAhwMg-JSPzv4Zg85PH97qge1p4j1x7Pagrn62_gpbdtgHFGeYCgECXV9d/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHjqKs308ZQLKcEgFZRTGFtnSvClp4FfaUoj3Njkt8vfNlz5JHFE0sDWsgg7Un3815kJCes_IZbOgS/pubhtml?gid=0&single=true">Перейти</Button>
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
        <Button variant="contained" target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSSDAlbdezL1xdkZw7rHMODCbJ9ljby9zxTTEXOaXxXjbgsLJI_5T4-4jHAVmSlOwEO4pNM5HtpsnaM/pubhtml?gid=0&single=true">Перейти</Button>
      </CardActions>
    </Card>
    
      </div>
      </div>
    </div>
  );
}

export default Class11;