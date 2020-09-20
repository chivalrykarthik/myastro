import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'



const Header = () => {
    return (
        <>

            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" >
                        MyAstro
                    </Typography>

                </Toolbar>
            </AppBar>
        </>
    )
}


export default Header;