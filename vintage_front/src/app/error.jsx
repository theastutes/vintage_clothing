'use client';

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Something went wrong!</h2>
                <p className="text-gray-700 mb-4">{error?.message || 'An unexpected error occurred.'}</p>
                <button
                    onClick={() => reset()}
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
