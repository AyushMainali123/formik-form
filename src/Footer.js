import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div>
                <Toolbar style={{backgroundColor: '#333'}}>
                    <Typography variant="body2" style={{color: '#fff'}}>Copyright Ayush Mainali @2020</Typography>
                </Toolbar>
            </div>
        </div>
    )
}

export default Footer
