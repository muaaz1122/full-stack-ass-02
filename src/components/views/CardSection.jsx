import React from 'react'

const CardSection = () => {
  return (
    <div>{/* Cards Section */}
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
          <p className="mb-4">Modern responsive websites with clean design.</p>
          <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Development</h3>
          <p className="mb-4">High-quality frontend &amp; backend development.</p>
          <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">SEO &amp; Marketing</h3>
          <p className="mb-4">Improve your website visibility and reach.</p>
          <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  </section></div>

    
  )
}

export default CardSection