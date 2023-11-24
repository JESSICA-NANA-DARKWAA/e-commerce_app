import React from "react";
import Layout from "../../componenents/layout/Layout";
import ProductCard from "../../componenents/productcard/Productcard";
import useFetch from "../../hooks/UseFetch";
import "./ProductListing.css";

const ProductListing = () => {
  const [data, loading, error] = useFetch({
    url: "https://fakestoreapi.com/products",
  });
  return (
    <Layout pageNumber={1}>
      <div className="products-container">
        {data.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductListing;
