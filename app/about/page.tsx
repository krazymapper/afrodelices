export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Yebesse</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Yebesse is your comprehensive guide to African and Malagasy cuisine, featuring an extensive collection
          of authentic recipes that have been passed down through generations. Our mission is to preserve and
          share the rich culinary heritage of Africa and Madagascar while highlighting the therapeutic
          properties of traditional dishes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We aim to bridge the gap between traditional African cooking and modern dietary needs by providing
          detailed information about the health benefits and therapeutic properties of each dish. Our platform
          helps users make informed decisions about their meals while exploring the diverse and flavorful
          world of African cuisine.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>300+ authentic African and Malagasy recipes</li>
          <li>Detailed therapeutic properties and health benefits</li>
          <li>Comprehensive cooking instructions and ingredient lists</li>
          <li>Regional cuisine categorization</li>
          <li>Meal type filtering</li>
          <li>User-friendly interface for easy recipe discovery</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
        <p className="text-gray-600 mb-6">
          We are committed to maintaining the authenticity of traditional recipes while making them accessible
          to a global audience. Each recipe is carefully researched and documented to ensure accuracy in
          ingredients, preparation methods, and cultural context.
        </p>

        <div className="bg-orange-50 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold text-orange-800 mb-4">Contribute</h2>
          <p className="text-orange-700">
            We welcome contributions from food enthusiasts, cultural experts, and health professionals who
            want to help expand our database and enhance the quality of our content. If you'd like to
            contribute, please reach out through our contact page.
          </p>
        </div>
      </div>
    </div>
  );
} 