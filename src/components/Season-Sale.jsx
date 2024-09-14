import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function SeasonSale( ) {
    return(
        <div className='season-sec'>
            <h3>Summer Season</h3>
            <p>Bus 3, get 1 selected items.</p>

            <div className='season-body'>
                <Card sx={{ minHeight: '250px', width: 290 }}>
                    <CardMedia>
                        <img
                        src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                        srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                        loading="lazy"
                        alt=""
                        />
                    </CardMedia>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography
                        textcolor="neutral.300"
                        >
                        California, USA
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minHeight: '250px', width: 290 }}>
                    <CardMedia>
                        <img
                        src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                        srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                        loading="lazy"
                        alt=""
                        />
                    </CardMedia>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography
                        textcolor="neutral.300"
                        >
                        California, USA
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minHeight: '250px', width: 290 }}>
                    <CardMedia>
                        <img
                        src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                        srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                        loading="lazy"
                        alt=""
                        />
                    </CardMedia>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography
                        textcolor="neutral.300"
                        >
                        California, USA
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minHeight: '250px', width: 290 }}>
                    <CardMedia>
                        <img
                        src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                        srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                        loading="lazy"
                        alt=""
                        />
                    </CardMedia>
                    <CardContent sx={{ justifyContent: 'center' }}>
                        <Typography
                        textcolor="neutral.300"
                        >
                        California, USA
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default SeasonSale;