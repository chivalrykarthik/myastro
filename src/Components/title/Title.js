import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Btn from './../btn/Btn'
import Modal from './../modal/Modal';
import './title.css';


const Title = ({ setFind }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className='myastro-header'>
                <div className='myastro-header-title'>
                    <Typography variant="h6" component="h6">Timings</Typography>
                </div>
                <div className='myastro-header-btn'>
                    <Btn onClick={handleOpen} text="Choose" />
                    <Modal open={open} handleClose={handleClose} setFind={setFind} />
                </div>
            </div>
        </>
    );
}

export default Title;