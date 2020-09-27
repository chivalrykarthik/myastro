import React from 'react';
import Button from '@material-ui/core/Button';

const Btn = ({ onClick, text }) => {
    return (
        <>
            <div>
                <Button variant="contained" color="primary" onClick={onClick}>{text}</Button>
            </div>
        </>
    );
}

export default Btn;