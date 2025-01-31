export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-4">&copy; 2025 Sisir Tamang. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="#privacy-policy"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="#terms-of-service"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-6">Built with❤️ | Designed by Sisir Tamang</p>
      </div>
    </footer>
  )
}

