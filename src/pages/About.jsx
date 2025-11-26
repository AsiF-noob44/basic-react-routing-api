const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <div className="space-y-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            I am a passionate developer dedicated to building amazing web
            experiences with React and modern technologies.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            My mission is to create intuitive, performant, and beautiful
            applications that solve real-world problems.
          </p>
          <div className="bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-lg mt-8 border border-blue-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              My Values
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Innovation and continuous learning
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                User-centered design approach
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Quality and attention to detail
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
