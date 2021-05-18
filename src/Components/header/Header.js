import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
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

const processTime = (t) => {
    const [h, m, s] = t.split(/[:|\s]/);
    const dt = new Date(new Date().toLocaleString(undefined, { timeZone: 'UTC' }));
    console.log(dt);
    dt.setHours(h);
    dt.setMinutes(m);
    dt.setSeconds(s);

}

const Header = () => {
    const [dt, setDt] = useState('Loading...');
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
    return (
        <>

            <AppBar position="static">
                <Toolbar>
                    <Box display='flex' flexGrow={1}>
                        <Typography variant="h6" >MyAstro</Typography>
                    </Box>
                    <Typography variant="h6" >Sunrise: {dt}</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Header;