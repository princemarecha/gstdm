import React from 'react';
import ListItems from './listitems';

const ListingsContainer = ({hotels}) => {
    return (
        <div>
            <div className="w-full flex flex-col lg:flex-row lg:px-6 mb-10">
                <div className="flex-1 lg:pl-12 py-6 px-6 lg:px-0">
                    <div className="mt-12">
                        <h1 className="text-3xl font-bold">Recommended For You</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
                            {hotels.map((hotel) => (
                                <div key={hotel}>
                                <ListItems hotel={hotel}/>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingsContainer
