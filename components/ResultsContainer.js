import React from 'react';
import ResultsItems from './ResultsItems';

const ResultsContainer = ({hotels}) => {
    return (
        <div>
            <div className="w-full lg:px-6 mb-10">
                <div className="py-6 px-6 lg:px-0">
                    <div className="mt-12">
                        <h1 className="text-3xl font-bold">Your search results</h1>
                            <div className="mt-12">
                            {hotels.map( (hotel) => (<ResultsItems hotel={hotel}/>))}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsContainer
