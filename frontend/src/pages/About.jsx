import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  const techStack = [
    {
      name: 'MongoDB',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
    },
    {
      name: 'Express.js',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
    },
    {
      name: 'React',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
    },
    {
      name: 'Node.js',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
    },
    {
      name: 'Redis',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg'
    },
    {
      name: 'Socket.IO',
      image: 'https://socket.io/images/logo.svg'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
    },
    {
      name: 'OpenAI',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Driving Innovation in Modern Communication
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
              At InsightChat, we aim to revolutionize how individuals and teams communicate, share ideas, and collaborate seamlessly. 
              With AI-powered insights and real-time interaction, we're transforming everyday conversations into meaningful exchanges 
              that drive productivity and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-16">
            Why Choose InsightChat?
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {/* Smart Messaging */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                Smart Messaging
              </h3>
              <p className="text-gray-600 text-center">
                Experience intelligent conversations with AI-powered suggestions and real-time insights.
              </p>
            </div>

            {/* AI Assistant */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                AI Assistant
              </h3>
              <p className="text-gray-600 text-center">
                Get intelligent responses, summaries, and suggestions powered by advanced AI models.
              </p>
            </div>

            {/* Real-Time Sync */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                Real-Time Sync
              </h3>
              <p className="text-gray-600 text-center">
                Never miss a message with instant synchronization and seamless cloud backup.
              </p>
            </div>

            {/* Team Collaboration */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                Team Collaboration
              </h3>
              <p className="text-gray-600 text-center">
                Connect and collaborate with team members through shared spaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-16">
              Built with Modern Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
                <div className="flex items-center justify-center h-20 w-20 mb-4">
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default About;