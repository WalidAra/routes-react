import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
  }, [id]);

  return (
    <main className="w-[700px] m-auto border border-solid border-slate-300 p-5 rounded-lg flex flex-col gap-4">
      <div className="flex gap-5 ">
        <div>
          <img
            src={product.image}
            alt=""
            className="w-56 h-56 bg-red-500 rounded-md"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl"> {product.title} </h1>
          <p className=""> {product.description} </p>
          <div className="flex items-center gap-3">
            <h3 className="">
              <span className="font-medium"> price : </span> {product.price}$
            </h3>
            <h3 className="">
              <span className="font-medium"> rate : </span>{" "}
              {product.rating.rate}
            </h3>
            <h3 className="">
              <span className="font-medium"> count </span>{" "}
              {product.rating.count}
            </h3>
            <h3 className="">
              <span className="font-medium"> category </span>
              {product.category}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 font-semibold">
        <button className="py-2 px-4 rounded-md bg-orange-300">
          Add to cart{" "}
        </button>
        <button className="py-2 px-4 rounded-md bg-orange-300"> buy </button>
      </div>
    </main>
  );
}
