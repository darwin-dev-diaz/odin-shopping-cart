import { useState, useEffect } from "react";
const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const link =
    "https://mock.shop/api?query={products(first:%2016){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}";

  useEffect(() => {
    fetch(link, { mode: "cors" })
      .then((result) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(result), 500);
        });
      })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((json) => {
        const productArray = json.data.products.edges;
        const outputArray = productArray.map((product) => {
          return {
            imageURL: product.node.featuredImage.url,
            itemTitle: product.node.title,
            itemDescription: product.node.description,
            itemPrice: product.node.variants.edges[0].node.price.amount
          };
        });
        setData(outputArray);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

export default useData;
