import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function SeasonSale( ) {
    const seasonSale = [
        {
            "id": 1,
            "image": "shoe1.jpg",
            "title": "Sneaker Shoe"
        },
        {
            "id": 2,
            "image": "smart-watch.jpg",
            "title": "Microphone Devices"
        },
        {
            "id": 3,
            "image": "microphone.jpg",
            "title": "Sneaker Shoe"
        },
        {
            "id": 4,
            "image": "laptopstand.jpg",
            "title": "Laptop Stand"
        }
    ]

    return(
        <div className='season-sec'>
            <h2>Summer Season</h2>
            <p>Bus 3, get 1 selected items.</p>

            <div className='season-body'>
                {
                    Object.entries(seasonSale).map(([index, img]) => (
                        <Card key={img.id} sx={{ minHeight: '200px', width: 290, overflow: 'hidden'}}>
                            <div className='season-image'>
                                <img
                                src={require(`../assets/images/others/${img.image}`)}
                                alt={index}
                                />
                            </div>
                            <CardContent sx={{ justifyContent: 'flex-end', zIndex: 200 }}>
                                <Typography
                                textcolor="neutral.300"
                                >
                                {img.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default SeasonSale;