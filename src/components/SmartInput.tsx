import React, { useState, useContext, useEffect } from 'react';
// MUI *******************************************************************//
import { Box, TextField } from '@mui/material';
// Context API *********************************************************//
interface Props {
  amount?: number;
}
export const SmartInput: React.FC<Props> = ({ amount }) => {
  useEffect(() => {
    if (amount) {
      setLocalAmount(amount);
    }
  }, []);

  // Local State ' on foucus 0 inicial value
  const [localAmount, setLocalAmount] = useState<number | ''>(0);
  //const [nameLocal, setLocalName] = useState<string>('');
  // External State for updating since local state suffers heavy manipulation, using external state will insure that the contet action will get the right data type.
  const [amountValue, setAmountValue] = useState<number>(0);
  //const [nameValue, SetNameValue] = useState<string>(name);

  // validation state
  // Err for numbers
  const [err, setErr] = useState<{ bool: boolean; errText: string }>({ bool: false, errText: 'Only numbers.' });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | any>): void => {
    const target = e.currentTarget as HTMLFormElement;
    let value: any = target.value;
    // Type Check for numbers
    let converter = Number(value);
    if (isNaN(converter)) {
      setErr({ ...err, bool: true });
      // Show the text that is causing error !!
      setLocalAmount(value);
      return;
    }
    // If Erorr fixed !
    setErr({ ...err, bool: false });
    setLocalAmount(value);
    //setAmountValue(value);
  };

  const restTextOnFoucus = (e: React.FocusEvent) => {
    // Use this incase of multi input to set a condition target.name === (Name of the input)
    //const target = e.currentTarget as HTMLFormElement;
    // Rest The local value to ''
    setLocalAmount('');
    setErr({ ...err, bool: false });
  };

  const updateAmount = (e: any) => {
    e.preventDefault();
    // On Blur if the user didnt make any change ! then show back default value // alos dont continue with any action
    if (localAmount === '') {
      setLocalAmount(amount || 0);
      return;
    }
  };

  return (
    <Box style={{ display: 'flex', marginTop: 150 }}>
      <form onBlur={updateAmount}>
        <TextField
          error={err.bool}
          helperText={err.bool ? err.errText : undefined}
          autoComplete='off'
          InputLabelProps={{ shrink: true }}
          label={err.bool ? 'Error' : 'Amount'}
          variant='standard'
          style={{ width: 90 }}
          name='name'
          value={localAmount}
          onFocus={restTextOnFoucus}
          onChange={handleChange}
        />
      </form>
    </Box>
  );
};
