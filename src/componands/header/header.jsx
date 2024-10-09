import React from 'react'
import logo from '../../assetes/Logo.png'
import{
    AppBar,
    Box,
    Button,
    Link,
    Toolbar,
    Typography,

}from "@mui/material"
function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1, }}> 
      <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: "#F4F7FA" }}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
          <img src={logo} alt="" />
          <Box style={{display:"flex"}}>
          <Link href="#" underline="none">
              <Typography variant="body1" component="div" sx={{ margin: "20px" , color: "black" }}>
            Home
          </Typography>
          </Link>
          <Link href="#" underline="none">
              <Typography  variant="body1" component="div" sx={{ margin:"20px" , color: "black" }}> 
            Service
          </Typography>
          </Link>
          <Link href="#" underline="none">
              <Typography variant="body1" component="div" sx={{ flexGrow: 1,  margin: "20px" , color: "black"}}>
            Future
          </Typography>
          </Link>
          <Link href="#" underline="none">
              <Typography variant="body1" component="div" sx={{ flexGrow: 1,  margin: "20px" , color: "black"}}>
            Product
          </Typography>
          </Link>
          <Link href="#" underline="none">
              <Typography variant="body1" component="div" sx={{ flexGrow: 1,  margin: "20px", color: "black"}}>
              Testimonial
          </Typography>
          </Link>
          <Link href="#" underline="none">
              <Typography variant="body1" component="div" sx={{ flexGrow: 1,  margin: "20px", color: "black"}}>
              FAQ
          </Typography>
          </Link>
          </Box>
<Button 
  variant="" 
  sx={{ color: "green", }}>
  Log in
</Button>
          <Button 
  variant="contained" 
  sx={{backgroundColor: "green", color: "white", }}>
  Sig in
</Button>


        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header
