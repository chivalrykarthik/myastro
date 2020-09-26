import React from 'react';
import Button from '@material-ui/core/Button';

const Btn = ({ onClick }) => {
    return (
        <>
            <div>
                <Button variant="contained" color="primary" onClick={onClick}>Find Time</Button>
            </div>
        </>
    );
}

export default Btn;