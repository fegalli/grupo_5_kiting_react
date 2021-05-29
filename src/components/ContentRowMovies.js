// import React from 'react';
import React, {useState,  useEffect} from 'react';
import SmallCard from './SmallCard';


function ContentRowTop(){
    const [ProductList, setProductList] = useState([]);
    useEffect( ()=> {
        fetch('api/home/index')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            setProductList(products.data)
        })
        .catch(error => console.log(error))
    },[])

    let productInDataBase = {
        color:   "primary",
        titulo: "Products in Data Base",
        valor: ProductList.totalProducts,
        icono: "fas fa-film",
    }
    
    let amount ={
        color:   "success",
        titulo: "Total brands",
        valor: ProductList.totalBrands,
        icono: "fas fa-award",
    }
    
    let user = {
        color:   "warning",
        titulo: "Total sizes",
        valor: ProductList.totalsizes,
        icono: "fas fa-user",
    }
    let cardProps = [productInDataBase,amount,user];


    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto , index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;