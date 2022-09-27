import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({title, handleAction}) {
    return (
        <Stack spacing={2} direction="row">

            <Button variant="contained">{title} handleAction={handleAction}</Button>
        </Stack>
    );
}