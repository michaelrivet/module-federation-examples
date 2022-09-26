import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button as RacineButton} from '@sproutsocial/racine';

const Button = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return <RacineButton onClick={handleClick} appearance='primary'>from remote2: GO HOME</RacineButton>;
};

export default Button;
