import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';



function AllProducts() {

    const[products, setProducts] = useState([]);

    const fetchData = async() => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchData();
    }, []);




    return(
        <div className="all-products">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product, index) => (
                    <Grid key={product.id} size={{ xs: 2, sm: 4, md: 2 }}>
                        <CardActive href={`/product-details?pid=${index}`}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140, backgroundSize: 'contain' }}
                                    image={product.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{fontSize: '15px', textTransform: 'capitalize'}} gutterBottom variant="h5" component="div">
                                        {product.title.substring(0, 17) + '...'}
                                    </Typography>
                                    {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {product.description}
                                    </Typography> */}
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </CardActive>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default AllProducts;


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   borderRadius: '0px',
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));


const CardActive = styled('a')`
    text-decoration: none;
`;

















