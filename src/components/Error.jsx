import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4 animate-bounce">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3  border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Go back to Home
        </Link>
        
        <img
          src="/images/404-error.png"
          alt="404 Error - Page not found illustration"
          className="w-full max-w-xs h-auto mx-auto mt-4 mb-6 rounded-lg shadow-md"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://placehold.co/400x250/cccccc/000000?text=Image+Unavailable'; 
          }}
        />

        
      </div>
    </div>
  );
}

export default Error;
