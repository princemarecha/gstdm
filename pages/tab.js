import React, { Component } from 'react';


class Tab extends Component {
    render() {
        return (
            
<ul class="flex flex-wrap text-sm font-medium text-center text-white border-gray-200 dark:border-gray-700 dark:text-white w-1/2 mx-auto">
    <li class="mr-2">
        <a href="#" aria-current="page" class="inline-block p-4 text-cyan-500 bg-gray-100 rounded-t-lg active dark:bg-cyan-500 dark:text-white">Hotels</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-white hover:bg-gray-50 dark:hover:bg-cyan-500 dark:hover:text-white">Packages</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-white hover:bg-gray-50 dark:hover:bg-cyan-500 dark:hover:text-white">Tours</a>
    </li>
</ul>

        )
    }
}
export default Tab;