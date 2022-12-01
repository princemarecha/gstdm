import React from 'react';
import ResultsItems from './ResultsItems';
import axios from 'axios';
import { useRouter } from 'next/router';



const ResultsContainer = ({hotels}) => {

    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    return (

        
        <div>
            <div className="w-full lg:px-6 mb-10">
                <div className="py-6 px-6 lg:px-0">
                    <div className="mt-12">
                        <h1 className="text-3xl font-bold italic">search Results ({hotels.length})</h1>
                            <div className="mt-12">
                            {hotels.map( (hotel) => (
                                
                                <div key={hotel}>
                                <ResultsItems hotel={hotel}/>
                                </div>
                                ))}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsContainer
