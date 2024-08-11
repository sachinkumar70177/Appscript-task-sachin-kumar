import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainContent.css";

function MainContent() {
  const [products, setProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("recommended");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const applyFilter = (category) => {
    setFilter(category);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const getFilteredAndSortedProducts = () => {
    // Apply filter
    const filtered = products.filter((product) => {
      const matchesCategory = filter ? product.category === filter : true;
      return matchesCategory;
    });

    // Apply sorting
    let sorted = [...filtered];
    if (sortOrder === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "popular") {
      sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return sorted;
  };

  const sortedAndFilteredProducts = getFilteredAndSortedProducts();

  return (
    <div className="Main">
      <div className="header">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi elementum dolor.
        </p>
      </div>

      <div className="filter-sort-container">
        <div>
          <span className="items">{sortedAndFilteredProducts.length} items</span>

          <span className="toggle-button" onClick={toggleSidebar}>
            {" "}
            {" <  "}
            {showSidebar ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </div>

        <div className="sort-options">
          <select id="sort" value={sortOrder} onChange={handleSortChange}>
            <option value="recommended">RECOMMENDED</option>
            <option value="newest-first">Newest First</option>
            <option value="popular">Popular</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
          </select>
        </div>
      </div>

      <div className="content">
        {showSidebar && (
          <aside className="sidebar">
            <h3>All Filters</h3>

            <h5>Gender</h5>
            <select
              onChange={(e) => applyFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">All</option>
              <option value="men's clothing">Men</option>
              <option value="women's clothing">Women</option>
              <option value="kids clothing">Kids</option>
            </select>

            <h5>Product Type</h5>
            <select
              onChange={(e) => applyFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">All</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <h4>SORT BY</h4>
            <select onChange={(e) => handleSortChange(e)} className="filter-select">
              <option value="recommended">All</option>
              <option value="popular">Popular</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="low-to-high">Price: Low to High</option>
            </select>
          </aside>
        )}
        <main className="product-list">
          <div className="products">
            {sortedAndFilteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price.toFixed(2)}</p>
                <p>Rating: {product.rating.rate}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainContent;
