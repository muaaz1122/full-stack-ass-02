import React from 'react'

const RandomContent = () => {
  return (
  <section className="py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10">My Skills</h2>
    <div className="flex flex-wrap justify-center gap-6">
      <span className="bg-blue-500 text-white px-4 py-2 rounded-full">HTML</span>
      <span className="bg-purple-500 text-white px-4 py-2 rounded-full">CSS</span>
      <span className="bg-green-500 text-white px-4 py-2 rounded-full">Tailwind</span>
      <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">JavaScript</span>
    </div>
  </div>
</section>

  )
}

export default RandomContent