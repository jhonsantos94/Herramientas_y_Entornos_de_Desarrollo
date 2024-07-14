import './App.css';
import React from 'react';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const products = [
    { id: 1, name: "Producto 1", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Producto 2", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Producto 3", price: 39.99, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container className={`my-${isMobile ? '4' : '8'} flex-grow`}>
        <Grid container spacing={isMobile ? 2 : 4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;