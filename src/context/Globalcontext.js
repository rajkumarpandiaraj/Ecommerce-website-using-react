import React,{useState, useEffect} from 'react';
import {storeProducts, detailProduct} from '../data'
export const globalData = React.createContext();

export function Globalcontext({children}) {
    const [productListArr, setProductListArr] = useState(storeProducts);
    const [detailProductObj, setDetailProductObj] = useState(detailProduct);
    const [productConsumed, setProductConsumed] = useState({});
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [cartArr, setCartArr] = useState([]);
    const [total, setTotal]= useState({subTotal : 0, tax : 0, total : 0 });


    useEffect(() => {
        const subTotal = cartArr.reduce((prev, curr) =>{
            prev += curr.total;
            return prev
        },0);
        const tax = Math.round( subTotal * 0.1);
        const total = subTotal + tax

        setTotal({
            subTotal : subTotal,
            tax : tax,
            total : total
        })
        
        
    }, [cartArr])

    useEffect(() => {
        if(cartArr !== []){
            cartArr.forEach(cartProduct => {
                if(cartProduct.count === 0){
                    cartItemRemoveHandle(cartProduct.id)
                }
            })
        }
    })
    const assignDetailProductObj = (product) =>{
        setDetailProductObj(product)
    }
    const modalOpenHandle = (id)=>{
        const consumedProduct = productListArr.filter(product => product.id === id);
        setProductConsumed(consumedProduct[0]);
        setIsModalOpened(true);
    }
    const modalCloseHandle = () =>{
        setProductConsumed({});
        setIsModalOpened(false);
    }


    const addProductToCartHandle = (id) =>{
        const productToAddCart = productListArr.filter(product => product.id === id);
        productToAddCart[0] = {...productToAddCart[0], inCart : true, count : 1}
        productToAddCart[0] = {...productToAddCart[0], total : productToAddCart[0].price * productToAddCart[0].count}

        inCartPropHandle(id);
        
        setCartArr([...cartArr, productToAddCart[0]]);
    }

    const inCartPropHandle = (id) =>{
        const tempArr = productListArr.map(product => {
            if(product.id === id){
                product.inCart = !product.inCart;
                return product
            }

            return product
        });

        setProductListArr(tempArr)
    }

    const cartBtnHandle = (id) =>{
        modalOpenHandle(id);
        addProductToCartHandle(id);
    }
    
    const cartItemRemoveHandle = (id) =>{
        const tempCartArr = cartArr.filter(product => product.id !== id);
        setCartArr(tempCartArr);
        inCartPropHandle(id);
    }

    const countPropHandle = (id, value) => {
        const tempCartArr = cartArr.map(product => {
            if(product.id === id){
                product.count = product.count + value;
                product.total = product.count * product.price;
                return product 
            }

            return product
        });
        setCartArr(tempCartArr)
    }
    const countIncHandle = (id) =>{
        countPropHandle(id, 1);
    }

    const countDecHandle = (id) =>{
        countPropHandle(id, -1);
    }

    const clearCartArr = () =>{
        setCartArr([]);
    }
    return (
        <div>
            <globalData.Provider value={{
                productListArr,
                detailProductObj,
                isModalOpened,
                productConsumed,
                cartArr,
                total,
                setDetailProductObj,
                assignDetailProductObj,
                modalCloseHandle,
                cartBtnHandle,
                countIncHandle,
                countDecHandle,
                cartItemRemoveHandle,
                clearCartArr,
            }
            }>
                {
                    children
                }
            </globalData.Provider>
        </div>
    )
}

export default Globalcontext

