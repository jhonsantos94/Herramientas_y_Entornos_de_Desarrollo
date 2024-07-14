import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function ProductCard({ image, name, price }) {
    return (
    <Card className="max-w-sm mx-auto m-6">
        <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
        className="h-48 object-cover"
    />
        <CardContent className="text-center">
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="m-4">
                ${price.toFixed(2)}
            </Typography>
            <Button variant="contained" color="primary">
                Comprar
            </Button>
        </CardContent>
    </Card>
);}

export default ProductCard;