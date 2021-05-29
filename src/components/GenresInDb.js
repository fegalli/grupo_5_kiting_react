import React, {useState,  useEffect} from 'react';
import Genre  from './Genre';

function GenresInDb(){
    const [StyleList, setStyleList] = useState([]);
     useEffect( ()=> {
        fetch('/api/styles')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(styles =>{
            setStyleList(styles.data)
        })
        .catch(error => console.log(error))
    },[])

    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Styles in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row" >
                                {
                                    StyleList.map((style,index)=>{
                                        return  <Genre  {...style}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default GenresInDb;
