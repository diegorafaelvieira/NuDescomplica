import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs';
import { getItem , setItem } from '../services/LocalStorageFuncs';
import { Link } from 'react-router-dom';
import { ProductsArea } from "../css/style";
import { Header } from "../components/Header";

export const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState( getItem('carrinho') || []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'https://api.mercadolibre.com/sites/MLB/search?q=tablet';
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id)
    if(element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id)
      setCart(arrFilter)
      setItem('carrinho', arrFilter)
    } else {
      setCart([...cart, obj])
      setItem('carrinho', [...cart, obj])
    }
  }

  return (
    <div>
      <Header />
      <ProductsArea>
        {
          data.map((e) => (
            <div key={e.id}>
              <h4>{e.title}</h4>
              <img src={e.thumbnail} alt="" />
              <h4>{`R$ ${e.price.toFixed(2)}`}</h4>
              <button
                onClick={() => handleClick(e)}
              >
                {
                  cart.some((itemCart) => itemCart.id === e.id) ? (
                    <BsFillCartCheckFill />
                  ) : (
                    <BsFillCartPlusFill />
                  )
                }
              </button>
            </div>  
          ))
        }
      </ProductsArea>
    </div>
  );
};
