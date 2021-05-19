import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
const defaultValue = 'Loading ...';
const getDate = () => {
    const dt = new Date();
    const setLen = (str) => str.toString().length <= 1 ? '0' + str : str;
    return `${dt.getFullYear()}-${setLen(dt.getMonth() + 1)}-${setLen(dt.getDate())}`
}
const getSunrise = async () => {
    try {

        const resp = await fetch(`https://api.sunrise-sunset.org/json?lat=12.782370&lng=80.217590&date=${getDate()}`);
        const result = await resp.json();
        return result;
    } catch (e) {
        console.log("Invalid resonse" + e.message);
        return Promise.reject("Invalid reponse");
    }

}

const processTime = (dt) => {
    if (dt === defaultValue) return dt;
    let [h, m, s, t] = dt.split(/[:\s]/)
    let cm = parseInt(m) + 30;
    let ch = parseInt(h) + 5
    m = cm;
    if (cm >= 60) {
        ch++;
        m = cm % 60
    }
    m = m.toString().length < 2 ? `0${m}` : m;
    if (ch > 12) {
        h = ch % 12;
    }
    h = h.toString().length < 2 ? `0${h}` : h;
    return `${h}:${m}:${s} ${t}`;
}

const Header = () => {
    const [dt, setDt] = useState(defaultValue);
    useEffect(() => {
        const getDt = async () => {
            try {
                const dtObj = await getSunrise();
                const dt = dtObj.results.sunrise;
                //processTime(dt)
                setDt(dt);
            } catch (e) {
                console.log("Err:" + e.message);
            }
        };
        getDt();
    }, []);
    console.log(dt);
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Box display='flex' flexGrow={1}>
                        <Typography variant="h6" >MyAstro</Typography>
                    </Box>
                    <div>
                        <Typography variant="h6" >Sunrise:</Typography>
                        <Typography variant="h6" >{processTime(dt)}</Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Header;