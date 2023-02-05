import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Wellcome from './Wellcome';
import PodachaZayavki from './PodachaZayavki';
import Platform from './Platform';
import Rozclad from './Rozclad';
import Contacts from './Contacts';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function NavigationBar() {
  const navigate = useNavigate();

  const [Message, setMessage] = useState(< Wellcome />);

  const onPodachaZayavkiClick = () => {
    setMessage(<PodachaZayavki/>)
  };
  const onPlatformClick = () => {
    setMessage(<Platform/>)
  };
  const onRozcladClick = () => {
    setMessage(<Rozclad/>)
  };
  const onContactsClick = () => {
    setMessage(<Contacts/>)
  };
  const onGolovnaClick = () => {
    setMessage(<Wellcome/>)
  };
  const onProcessClick = () => {
    navigate('/class');
  };

  return (

    <div className="navigate-content">
      <List className="navigate">

      <ListItemButton onClick={onGolovnaClick}>
          <ListItemText primary="Головна"/>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton onClick={onPodachaZayavkiClick}>
          <ListItemText primary="Подача заявки на навчання"/>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton onClick={onPlatformClick}>
          <ListItemText primary="Платформи" />
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton onClick={onRozcladClick}>
          <ListItemText primary="Розклад" />
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton onClick={onContactsClick}>
          <ListItemText primary="Контакти" />
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton onClick={onProcessClick}>
          <ListItemText primary="Освітній процес" />
          <ListItemIcon>
            <BorderColorIcon />
          </ListItemIcon>
        </ListItemButton>
        
      </List>
      <div className='content'>
        { Message }
      </div>
    </div>
  );
}

export default NavigationBar;
