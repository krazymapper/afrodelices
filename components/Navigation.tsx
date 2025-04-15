import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">Yebesse</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 