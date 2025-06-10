import React from 'react'

function SimmerCard() {
    return (
        <div className="relative bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
            <div className="w-full h-48 bg-gray-300"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded mb-1 w-1/2"></div>

                <div className="flex items-center justify-between mt-3 text-sm">
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-300 rounded-full mr-1"></div>
                        <div className="h-4 bg-gray-300 rounded w-8"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/12 ml-2 mr-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimmerCard