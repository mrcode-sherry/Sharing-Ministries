import React from 'react'

const Welcome = () => {
  return (
    <div className="px-8 md:px-20 py-16 bg-gray-50">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Jesus Sharing Ministries
        </h1>
        
        {/* Slogan */}
        <p className="text-xl md:text-2xl text-[#5BB7E6] font-semibold mb-8">
          Spreading Hope Through Christ
        </p>
        
        {/* Decorative underline */}
        <div className="flex justify-center mb-8">
          <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
          <span className="w-4 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
        </div>
      </div>

      {/* Bible Verse */}
      <div className="text-center mb-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-2">
            "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another."
          </p>
          <p className="text-[#5BB7E6] font-semibold text-lg">
            John 13:34-35
          </p>
        </div>
      </div>

      {/* Content Paragraphs */}
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
          At Jesus Sharing Ministries, this command of Jesus is the foundation of everything we do. We believe that sharing Jesus is not only about preaching, but about demonstrating His love in real and practical ways. Our desire is to reach people by building genuine relationships, caring for their needs, and walking alongside them in their journey of life and faith.
        </p>
        
        <p className="text-gray-600 text-lg leading-relaxed text-justify">
          As we go into communities and connect with those who may have never heard about Christ, we carry His love as our greatest message. Through acts of kindness, service, and compassion, we reflect the heart of Jesus so that people don't just hear about Him they experience Him. We believe that when love is lived out, it opens hearts and reveals the true nature of Christ.
        </p>
      </div>
    </div>
  )
}

export default Welcome