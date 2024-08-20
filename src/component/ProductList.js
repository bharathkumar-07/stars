import React, { useState } from 'react';
import {useFetch} from "../Hooks/useFetch" 

export const ProductList = () => {
  
  const [url , setUrl] = useState("http://localhost:8000/list/")

 const { data:products , loading, error} = useFetch(url,{content:"ABC"});



  return (
    <section>
      <div className='filter'>
        <button onClick={()=>setUrl("http://localhost:8000/list/")}>All</button>
        <button onClick={()=>setUrl("http://localhost:8000/list?in_stock=true")}>In stock</button>
      </div>
      {loading && <p>Loading Products.....</p>}
      {error && <p>{error}</p>}
      {products && products.map((product) => (
        <div className="card" key={product.id}>
          <p className='id'>{product.id}</p>
          <p className='name'>{product.name}</p>
          <p className='info'>
            <span>${product.price}</span>
            <span className={product.in_stock ? "Instock"  : "UnAvailable"}>{product.in_stock ? 'instock' : 'unavailable'}</span>
          </p>
        </div>
      ))}
    </section>
  );
}
