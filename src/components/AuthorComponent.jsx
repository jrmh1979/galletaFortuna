import React from 'react';

const Author = ({ authorName }) => {

    // propiedad?.propiedadAnidada
    //propiedad?.[indice]
    return(

        
        <div className="author">
            <h3>Autor: { authorName.author } </h3>
        </div>
    )
}

export default Author
