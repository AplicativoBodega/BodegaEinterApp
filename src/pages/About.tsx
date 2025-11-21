export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-bounce-slow">
            About Us 📝
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in">
            Learn more about what we do
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">BodegaEinter</span>, 
              a simple yet elegant web application built with modern technologies.
            </p>
            <p>
              This project showcases the power of React, TypeScript, Vite, and Tailwind CSS 
              working together to create beautiful, responsive user interfaces.
            </p>
            <p>
              Our focus is on simplicity, performance, and user experience - delivering 
              a clean interface with smooth animations and thoughtful interactions.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Built With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
              { name: 'TypeScript', icon: '📘', color: 'from-blue-400 to-blue-600' },
              { name: 'Vite', icon: '⚡', color: 'from-purple-400 to-pink-500' },
              { name: 'Tailwind', icon: '🎨', color: 'from-teal-400 to-cyan-500' },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-900 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className={`text-4xl mb-2 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent font-bold`}>
                  {tech.icon}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Features
          </h2>
          <ul className="space-y-3">
            {[
              'Dark mode toggle with persistent preferences',
              'Responsive sidebar navigation',
              'Smooth Tailwind CSS animations',
              'Clean and modern design',
              'TypeScript for type safety',
              'Lightning-fast Vite development',
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-300 animate-fade-in-up"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
