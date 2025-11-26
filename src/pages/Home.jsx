const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Home</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          This is the home page of my React application. Explore the navigation
          above to visit different sections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Fast</h3>
            <p className="text-gray-600">
              Built with modern React and optimized for performance.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Responsive
            </h3>
            <p className="text-gray-600">
              Works seamlessly across all devices and screen sizes.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Modern
            </h3>
            <p className="text-gray-600">
              Uses the latest web technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
