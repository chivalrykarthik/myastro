import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { categories } from './../../utils/constants';
import Btn from './../btn/Btn';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        height: '50%',
        overflow: 'auto',
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const RadioCmp = ({ setFind }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        setFind(event.target.name);
    };
    const radioGrp = categories.map((category, key) => {

        return (
            <Fragment key={'F' + key}>
                <FormControlLabel value={category} control={<Radio name={key.toString()} color='primary' key={'K' + key} />} label={category} key={`r${key}`} />
            </Fragment>
        );
    })
    return (
        <>
            <FormControl component="fieldset">
                <RadioGroup value={value} onChange={handleChange} key="G2">
                    {radioGrp}
                </RadioGroup>
            </FormControl>
        </>

    )
}

export default function SimpleModal({ open, handleClose, setFind }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <div style={{ float: "right" }} >
                    </div>
                    <RadioCmp setFind={setFind} />
                </div>
            </Modal>
        </div>
    );
}