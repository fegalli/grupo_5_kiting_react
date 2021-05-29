// import React from 'react';

import React , {useRef,useState,  useEffect} from 'react';


function LastMovie(){
    const parrafo = useRef();
	const subtitulo = useRef();

	let cambiarColor = () =>{
		parrafo.current.style.backgroundColor = 'tomato';
		subtitulo.current.style.fontFamily = 'arial';
		subtitulo.current.style.fontSize = '1.5rem';
		subtitulo.current.style.textAlign = 'center';
	}
	const [Newest, setNewest] = useState([]);
	useEffect( ()=> {
	   fetch('api/products/newest')
	   .then(respuesta =>{
		   return respuesta.json()
	   })
	   .then(newest =>{
		   setNewest(newest.data)
	   })
	   .catch(error => console.log(error))
   },[])
   console.log(Newest)

    return(
        <React.Fragment>
            						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={cambiarColor} >Newest product in Data Base</h5>
								</div>
								<div className="card-body">
									{/* <h1>{Newest.Name.name}</h1> 
									<h3>{Newest.Brand.brand}</h3>  */}
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={"/img/products/" + Newest.imageName} alt={Newest.comments}/>
									</div>
									<p ref={parrafo}>{Newest.comments}</p>
									<h3 ref={subtitulo}>Es importante que continuen adelante para atras, ni para tomar impulso</h3>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}
        </React.Fragment>
    )
}
export default LastMovie;