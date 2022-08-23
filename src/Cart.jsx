import React from 'react'
import { useCart } from "react-use-cart"

const Cart = () => {
    const { 
        isEmpty,
        items,
        cartTotal,
        removeItem,
        emptyCart,
         } = useCart();
         if(isEmpty) return <h1 className='text-center'>your cart is empty</h1>
  return (
    <section className='py-4 container'>
    <div className='row justify-content-center'>
        <div className='col-12'>
            <table className='table table-light table-hover m-0;'>
                <tbody>
                {items.map((item,index)=>{
                    return(
                    <tr key={index}>
                      <td>
                        <img src={item.img} alt="product" style={{height:"6rem"}}/>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)}>remove</button>
                      </td>
                    </tr>
                    )
                })}
                </tbody>
            </table>

        </div>
        <div className='col-auto ms-auto'>
              <h2>Total Price: $ {cartTotal}</h2>
        </div>
         <div className='col-auto'>
               <button className='btn btn-danger m-2' onClick={()=> emptyCart()}>clear cart</button>
               <button className='btn btn-primary'>Buy Now</button>
         </div>
    </div>
    </section>
  )
}

export default Cart