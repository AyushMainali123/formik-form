import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {Menu} from '@material-ui/icons'
const Header = () => {
    return (
        <div className="header">
            <AppBar>
                <Toolbar>
                    <Menu />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
