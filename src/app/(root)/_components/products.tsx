import ProductCard from '@/app/products/_components/product-card';
import React from 'react';
import data from '@/app/products/_const/products.json';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import SectionTitle from './section-title';
import SectionContainer from './section-container';

const Products = () => {
  return (
    <SectionContainer>
      <SectionTitle
        title='Our Products'
        description='Overall Zipper Solutions Provider for 38+ Years'
      />

      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
        {data.slice(0, 8).map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>

      <div className='flex justify-center mt-10'>
        <Link href='/products' className={buttonVariants()}>
          View All Products
        </Link>
      </div>
    </SectionContainer>
  );
};

export default Products;
