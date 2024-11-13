import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

function Login(){
  const navigate = useNavigate();  // Initialize the navigate function

  // Function to handle button click and navigate to the "header" page
  const handleButtonClick = () => {
    navigate('/Register');  // This will redirect to the /header route
  };

    return(
        <>
        
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Welcome!</h2>
        <h3 className="text-xl font-semibold text-center">Sign in</h3>
        <p className="text-center text-gray-600">To access your information</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">User name</label>
            <input
              type="text"
              placeholder="Enter your user name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 3.5c-4.2 0-7.5 3-7.5 5.5S5.8 14.5 10 14.5s7.5-3 7.5-5.5S14.2 3.5 10 3.5z"
                  />
                  <path
                    d="M10 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            Login
          </button>

          <p className="text-center text-gray-500">
            Don’t have an Account?{" "}
            <a href="#" className="text-orange-500 font-semibold hover:underline"  onClick={handleButtonClick}>
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
    </>

    );
}
export default Login
