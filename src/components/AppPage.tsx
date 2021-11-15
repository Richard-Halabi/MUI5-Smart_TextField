import React from 'react';
import { Container, Button } from '@mui/material';
import { SmartInput } from './SmartInput';
interface Props {}

const AppPage: React.FC<Props> = ({}) => {
  return (
    <Container maxWidth={false} style={{ display: 'flex', justifyContent: 'center' }}>
      <SmartInput amount={5000} />
    </Container>
  );
};

export default React.memo(AppPage);
