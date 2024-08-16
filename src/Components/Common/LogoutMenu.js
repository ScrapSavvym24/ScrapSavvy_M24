import React from 'react';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'logout' });
    localStorage.clear();
    navigate('/signin', { replace: true });
  };

  return (
    <Button onClick={handleLogout}>
      <ExitToAppIcon />
      Logout
    </Button>
  );
}