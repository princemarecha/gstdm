import React from 'react';
import ListItems from './listitems';

const ListingsContainer = ({hotels}) => {
    return (
        <div>
            <div class="w-full flex flex-col lg:flex-row lg:px-6 mb-10">
                <div class="flex-1 lg:pl-12 py-6 px-6 lg:px-0">
                    <div class="mt-12">
                        <h1 class="text-3xl font-bold">Recommended For You</h1>
                        <div class="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
                            {hotels.map( (hotel) => (<ListItems hotel={hotel}/>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingsContainer
