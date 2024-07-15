import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './Productcard';
import product1Image from '../img/111.png';
import product2Image from '../img/2.png';
import product3Image from '../img/3.png';
import product4Image from '../img/4.png';
import product5Image from '../img/5.png';
import product6Image from '../img/6.png';
import product7Image from '../img/7.png';
import product8Image from '../img/8.png';
import product9Image from '../img/9.png';
import product10Image from '../img/10.png';
import product11Image from '../img/11.png';
import product12Image from '../img/12.png';

const ThriftItHome = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'KALINI',
      description: 'Floral Embroidered Thread Work Regular Kurta',
      price: 798,
      mrp: 2959,
      duration: 2,
      rating: 4,
      reviews: 97,
      imageUrl: product1Image, 
    },
    {
      id: 2,
      name: 'Shree Ramkrishna Fab',
      description: 'Floral Embroidered Chikankari Kurta',
      price: 494,
      mrp: 1499,
      duration: 4,
      rating: 4,
      reviews: 97,
      imageUrl: product2Image, 
    },
    {
      id: 3,
      name: 'Inddus',
      description: 'Floral Embroidered Regular Thread Work A-Line Kurta with Trousers & Dupatta',
      price: 2799,
      mrp: 7999,
      duration: 3,
      rating: 4,
      reviews: 97,
      imageUrl: product3Image, 
    },
    {
      id: 4,
      name: 'GOROLY',
      description: 'Yoke Design Thread Work A-Line Kurta',
      price: 749,
      mrp: 2499,
      duration: 2,
      rating: 4,
      reviews: 97,
      imageUrl: product4Image, 
    },
    {
      id: 5,
      name: 'Sangria',
      description: 'Embroidered V-Neck Straight Cotton Kurta',
      price: 1032,
      mrp: 2869,
      duration: 4,
      rating: 3.7,
      reviews: 219,
      imageUrl: product5Image, 
    },
    {
      id: 6,
      name: 'KALINI',
      description: 'Women Green Ethnic Motifs Embroidered Thread Work Kurta with Palazzo & Dupatta',
      price: 776,
      mrp: 3699,
      duration: 7,
      rating: 4.2,
      reviews: 789,
      imageUrl: product6Image, 
    },
    {
      id: 7,
      name: 'Seerat',
      description: 'Women Ethnic Motifs Embroidered Regular Thread Work Silk Chiffon Kurti with Trousers & With Dupatta',
      price: 2295,
      mrp: 4590,
      duration: 5,
      rating: 4,
      reviews: 97,
      imageUrl: product7Image, 
    },
    {
      id: 8,
      name: 'KALINI',
      description: 'Women Black Kurta',
      price: 374,
      mrp: 1499,
      duration: 5,
      rating: 4,
      reviews: 97,
      imageUrl: product8Image, 
    },
    {
      id: 9,
      name: 'Label Shaurya Sanadhya',
      description: 'V-Neck Embroidered Empire Anarkali Kurta & Trousers With Dupatta',
      price: 5549,
      mrp: 9249,
      duration: 4,
      rating: 4,
      reviews: 97,
      imageUrl: product9Image, 
    },
    {
      id: 10,
      name: 'KALINI',
      description: 'Women Brown & Black Abstract Print A-Line Kurta',
      price: 557,
      mrp: 1799,
      duration: 1,
      rating: 4,
      reviews: 97,
      imageUrl: product10Image, 
    },
    {
      id: 11,
      name: 'Anouk',
      description: 'Women Yellow Bandhani Printed Kurta',
      price: 494,
      mrp: 1499,
      duration: 6,
      rating: 4,
      reviews: 97,
      imageUrl: product11Image, 
    },
    {
      id: 12,
      name: 'anayna',
      description: 'Women Yellow Pure Cotton Kantha Work Striped Kurta',
      price: 494,
      mrp: 1499,
      duration: 3,
      rating: 4,
      reviews: 97,
      imageUrl: product12Image, 
    },
  ];

  return (
    <div className="ThriftItHome">
      <div className="bg-white min-h-screen">
        <main className="py-8 mr-16 ml-16 mb-16">
          <section className="text-center">
            <h1 className="text-pinkone text-6xl font-bold mb-2 font-robotocon">
              THRIFT{" "}
              <span className="text-greenone text-6xl font-bold font-robotocon">IT</span>{" "}
            </h1>
            <div className="container mx-auto my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                    className="cursor-pointer"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ThriftItHome;
