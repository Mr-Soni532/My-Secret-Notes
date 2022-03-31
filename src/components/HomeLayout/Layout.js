import React from 'react'
import './home.module.css'
import { Box } from '@material-ui/core'
import Navigation from '../Navigation'
const Layout = () => {
  return (
    <Box display="flex">
    <div className="navigation-pannel">
        <Box className='navigation-container'  >
            <Navigation/>
        </Box>
    </div>
    <div className="notes-pannel">

    </div>
</Box>
  )
}

export default Layout