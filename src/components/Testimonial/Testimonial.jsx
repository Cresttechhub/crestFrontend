{/*import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Developer',
    text: 'This product changed my life! It made my workflow so much smoother and more efficient.',
    image: 'https://via.placeholder.com/100', // Replace with real image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Project Manager',
    text: 'I love how intuitive the interface is. It helped me save so much time every day.',
    image: 'https://via.placeholder.com/100', // Replace with real image URL
  },
  {
    id: 3,
    name: 'Sarah Lee',
    position: 'Designer',
    text: 'A must-have tool for any designer! The features are super useful, and the support team is awesome.',
    image: 'https://via.placeholder.com/100', // Replace with real image URL
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="relative">
        <div className="flex items-center space-x-8">
          {/* Left Side: Image and Name 
          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <p className="mt-2 text-center font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </p>
          </div>

          {/* Right Side: Testimonial Text 
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl italic text-gray-600">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="mt-4 text-right">
              <p className="font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
        </div>

        {/* Bullet Navigation 
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
*/}
