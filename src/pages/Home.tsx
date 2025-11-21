export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-bounce-slow">
            Welcome Home! 🏠
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in">
            Your journey starts here
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: 'Simple & Clean',
              description: 'A minimalist design that focuses on what matters most.',
              icon: '✨',
              gradient: 'from-blue-400 to-blue-600',
            },
            {
              title: 'Dark Mode',
              description: 'Toggle between light and dark themes with ease.',
              icon: '🌙',
              gradient: 'from-purple-400 to-purple-600',
            },
            {
              title: 'Smooth Animations',
              description: 'Delightful transitions that bring the interface to life.',
              icon: '🎭',
              gradient: 'from-pink-400 to-pink-600',
            },
            {
              title: 'Fully Responsive',
              description: 'Looks great on any device, from mobile to desktop.',
              icon: '📱',
              gradient: 'from-green-400 to-green-600',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 animate-pulse-slow`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to explore?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out the About page to learn more about this project.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 animate-pulse-slow">
              Get Started 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
