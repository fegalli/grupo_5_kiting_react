import React , {useRef} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import LastMovie from './LastMovie';


function ContentRowTop(){
	const parrafo = useRef();
	const subtitulo = useRef();

	let cambiarColor = () =>{
		parrafo.current.style.backgroundColor = 'tomato';
		subtitulo.current.style.fontFamily = 'arial';
		subtitulo.current.style.fontSize = '1.5rem';
		subtitulo.current.style.textAlign = 'center';
	}

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					
					<div className="row">
					<LastMovie />


						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;