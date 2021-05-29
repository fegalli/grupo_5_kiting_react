import React from 'react';

import MovieList from './MovieList';

function Movie(props){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Price</th>
                                            <th>Name</th>
                                            <th>Size</th>
                                            <th>Colour</th>
											<th>Brand</th>
											<th>Style</th>
											<th>Comments</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
											<th>Id</th>
                                            <th>Price</th>
                                            <th>Name</th>
                                            <th>Size</th>
                                            <th>Colour</th>
											<th>Brand</th>
											<th>Style</th>
											<th>Comments</th>
										</tr>
									</tfoot>
									<tbody>
									{/* aca es donde debo insertar MoviList */}
										<tr>
											<td>01</td>
											<td>Reto al destino</td>
											<td>20</td>
                                            <td>15</td>
											<td>120</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;