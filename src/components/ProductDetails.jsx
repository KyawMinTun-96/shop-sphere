import React, { useCallback, useState, useEffect} from 'react';
import { Container, Grid, Typography, Button, CircularProgress } from '@mui/material';
import { useParams, NavLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

function ProductDetails() {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);  // Loading state

  const fetchData = useCallback( async() => {
    setProduct(null);
    setLoading(true);  // Set loading to true before fetching
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);  // Set loading to false after fetching
    }
  }, [productID]);

  useEffect(() => {
      fetchData();
  }, [fetchData]);

  // Show loading indicator while fetching data
  if (loading || !product) {
    return <div>Loading...</div>;
  }


  return (
    <Container maxWidth="xxl">
      {loading ? (
        <Typography variant="h2" align="center">
          <CircularProgress /> Loading...
        </Typography>
      ) : (
        <PD sx={{marginY: 5, paddingY: 5}}>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <img 
                src={product.image} 
                alt="product images" 
                style={{ width: '100%', height: 'auto' }} 
              />
            </Grid>
            <Grid item md={6} style={{ padding: '5rem 2rem' }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="h5" color="info" gutterBottom>
                $ {product.price}
              </Typography>
              <Typography variant="" paragraph>
                {product.description}
              </Typography>
              <Grid container justifyContent="space-between" sx={{marginTop: 5}}>
                <Link 
                  component={NavLink} 
                  to="/" 
                  underline='none'
                  variant="outlined" 
                  color="secondary"
                  sx={{
                    backgroundColor: '#fff',
                    color: 'secondary.main', // Adjust text color
                    padding: '8px 16px', // Add padding for button look
                    borderRadius: '4px', // Button border radius
                    border: '1px solid', // Outline border
                    borderColor: 'secondary.main',
                    textAlign: 'center',
                    display: 'inline-block', // Make it behave like a button
                    '&:hover': {
                      backgroundColor: 'secondary.light', // Change background color on hover
                      borderColor: 'secondary.dark', // Change border color on hover
                    },
                  }}
                >
                  Go Back
                </Link>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </PD>
      )}
    </Container>
  );
}

export default ProductDetails;


const PD = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
