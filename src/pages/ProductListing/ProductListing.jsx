import React from "react";
import Layout from "../../componenents/layout/Layout";
import ProductCard from "../../componenents/productcard/Productcard";
import useFetch from "../../hooks/UseFetch";
import "./ProductListing.css";
import Loading from "../../componenents/loading/Loading";

const ProductListing = () => {
  const [data, loading, error] = useFetch({
    url: "https://api.escuelajs.co/api/v1/categories",
  });
  return (
    <Layout pageNumber={1}>
      {loading ? (
        <Loading />
      ) : (
        <div className="products-container">
          {data.map((item) => (
            <ProductCard {...item} key={item.id} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default ProductListing;
