import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer-sec'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid size={{ xs: 6, md: 2.4 }}>
              <Item>Cutomer Service</Item>
              <ActiveLink href='/'>Help Center</ActiveLink>
              <ActiveLink href='/'>Cutsomer Service</ActiveLink>
              <ActiveLink href='/'>Contact Us</ActiveLink>
            </Grid>
            <Grid size={{ xs: 6, md: 2.4 }}>
              <Item>About Shop Sphere</Item>
              <ActiveLink href='/'>About Us</ActiveLink>
              <ActiveLink href='/'>Careers</ActiveLink>
              <ActiveLink href='/'>Terms & Conditions</ActiveLink>
              <ActiveLink href='/'>Privacy Policy</ActiveLink>
            </Grid>
            <Grid size={{ xs: 6, md: 2.4 }}>
              <Item>Payment</Item>
                <Grid container spacing={{ xs: 1, md: .1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {["master.png", "visa.png", "unionpay.png", "jcb.png"].map((card, index) => (
                    <Grid key={index} size={{ xs: 6, sm: 2, md: 3 }}>
                      <Item sx={{padding: 0, margin: 0}}>
                        <Payment href='/' value={card}>
                          <img sx={{width: '40px', height: '40px'}} src={require(`../assets/images/payment/${card}`)} alt={index}/>
                        </Payment>
                      </Item>
                    </Grid>
                  ))}
                </Grid>
            </Grid>
            <Grid size={{ xs: 6, md: 2.4 }}>
              <Item>Follow US</Item>
              <Social>
                <SocialItem href="https://www.facebook.com/"><FacebookIcon sx={{marginRight: '10px'}}/>facebook</SocialItem>
                <SocialItem href="https://www.twitter.com/"><TwitterIcon sx={{marginRight: '10px'}} /><p>Twitter</p></SocialItem>
                <SocialItem href="https://www.instagram.com/"><InstagramIcon sx={{marginRight: '10px'}}/><p>Instagram</p></SocialItem>
                <SocialItem href="https://www.linkedin.com/"><LinkedInIcon sx={{marginRight: '10px'}}/><p>LinkedIn</p></SocialItem>
              </Social>
            </Grid>
            <Grid size={{ xs: 6, md: 2.4 }}>
              <Item>ShopSphere Download</Item>
              {
                Object.entries({"Google Playstore": "playstore.png", "Apple Store": "apple.png"}).map(([index, img]) => (
                  <ActiveLink href='/' key={index}>
                      <img src={require(`../assets/images/others/${img}`)} alt='palystore images' sx={{width: 50, height: 50}}/>
                      <span sx={{color: 'white'}}>{index}</span>
                  </ActiveLink>
                ))
              }
            </Grid>
          </Grid>
        </Box>
    </div>
  )
}

export default Footer;





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#151515;',
  boxShadow: 'none',
  padding: theme.spacing(1),
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '20px',
  marginBottom: '30px',
  color: theme.palette.tertiary.main
}));


const Payment = styled('a') `
  text-decoration: none;
`;

const Social = styled('div') (() => ({
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const SocialItem = styled('a')`
  width: 150px;
  margin-bottom: 20px;
  color: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;


const ActiveLink = styled('a')`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: #fff;
  text-decoration: none;
  margin-bottom: 20px;
  padding-left: 30px;
  &:hover{
    text-decoration: underline;
  }
  `;








