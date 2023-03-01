import React from 'react';

const PhraseCard = ({ phraseData }) => {

    // propiedad?.propiedadAnidada
    //propiedad?.[indice]
    return(

        
        <div className="phraseData">
            
            <p>{ phraseData.phrase } </p>
            
        </div>
    )
}

export default PhraseCard
