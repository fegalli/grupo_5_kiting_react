import React from 'react';


function MovieList(props){
    return(
        <React.Fragment>
            <to>
                <td>
                    {props.price}
                </td>
                <td>
                    {props.comment}
                </td>
            </to>
        </React.Fragment>
    )

}


// function MovieList(){
//     const [MovieList, setMovieList] = useState([]);
//      useEffect( ()=> {
//         fetch('/api/products/index')
//         .then(respuesta =>{
//             return respuesta.json()
//         })
//         .then(styles =>{
//             setMovieList(styles.data)
//         })
//         .catch(error => console.log(error))
//     },[])
//     return (
//     )
// }

// export default MovieList 

// <tr>
// <td>01</td>
// <td>Reto al destino</td>
// <td>20</td>
// <td>15</td>
// <td>120</td>
// </tr>


// function GenresInDb(){
//     const [StyleList, setStyleList] = useState([]);
//      useEffect( ()=> {
//         fetch('/api/styles')
//         .then(respuesta =>{
//             return respuesta.json()
//         })
//         .then(styles =>{
//             setStyleList(styles.data)
//         })
//         .catch(error => console.log(error))
//     },[])

//     return (
//         <React.Fragment>
//                 {/*<!-- Categories in DB -->*/}
//                 <div className="col-lg-6 mb-4">						
//                     <div className="card shadow mb-4">
//                         <div className="card-header py-3">
//                             <h6 className="m-0 font-weight-bold text-gray-800">Styles in Data Base</h6>
//                         </div>
//                         <div className="card-body">
//                             <div className="row" >
//                                 {
//                                     StyleList.map((style,index)=>{
//                                         return  <Genre  {...style}  key={index} />
//                                     })
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
           
//         </React.Fragment>
     
//     )
       
// }
// export default GenresInDb;
