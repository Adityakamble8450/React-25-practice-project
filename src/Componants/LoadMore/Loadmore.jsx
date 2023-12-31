import React, { useEffect, useState } from "react";

const Loadmore = () => {
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [loading, setloading] = useState(null);
  const [desalbled, setdesalbled] = useState(false);

  const fetchProduct = async () => {
    try {
        
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&
        skip=${count === 0 ? 0 : count * 20}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length)
        setproducts((prev) => [...prev, ...data.products]);
    } catch (error) {
      console.log(error.massage);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) setdesalbled(true);
  }, [count]);

  if (loading) {
    return <div>Loadin.. data! please wait..</div>;
  }

  return (
    <div className="lodemore_container items-center flex flex-col  gap-7">
      <h1 className="text-center font-bold text-3xl mt-2">Our products</h1>
      <div className="product_container items-center flex flex-wrap  gap-8 p-4">
        {products && products.length
          ? products.map((item, i) => (
              <div
                className="product flex flex-col justify-center items-center gap-2 border-2 border-black p-3 overflow-hidden"
                key={item.id}
              >
                <img
                  src={item.thumbnail}
                  alt={item.description}
                  className="h-[200px] w-[200px] object-cover object-center rounded-md  hover:scale-[1.2] transition-all  "
                />
                <p className="font-bold z-10">{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <button
        disabled={desalbled}
        onClick={() => setcount(count + 1)}
        className="text-center px-4 py-2 rounded-lg  bg-red-600 text-3xl mb-3"
      >
        load more
      </button>

      {desalbled && (
        <div className="text-2xl mb-2 text-red-500">you reached maximum level of products--100</div>
      )}
    </div>
  );
};

export default Loadmore;
