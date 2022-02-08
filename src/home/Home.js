import React from 'react';
import Category from './Category';
import Footer from './Footer';
import Info from './Info';
import ShowCase from './ShowCase';

export default function Home() {
  return <>
    <ShowCase />
    <Category />
    <Info />
    <Footer />
  </>;
}
