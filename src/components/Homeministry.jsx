import React from 'react'
import Link from "next/link";

// Real projects data
const projects = [
    {
        id: "1",
        title: "Crusade ministry",
        description:
            `Jesus Sharing Ministry is dedicated to proclaiming the life-changing message of Jesus Christ to people from all walks of life. Our crusades are powerful gatherings where the gospel is preached with passion, the presence of God is experienced, and lives are transformed by His grace.
Our vision is to see the gospel spread across nations, bringing light to dark places and hope to the hopeless — fulfilling the Great Commission to “Go into all the world and preach the gospel to all creation” (Mark 16:15).

Through worship, prayer, and the preaching of God’s Word, we bring together communities to encounter the love, hope, and salvation found only in Jesus. We believe that every soul is precious to God, and our mission is to reach as many as possible with His truth.

In each crusade, we witness hearts turning to Christ, chains of bondage being broken, and faith being ignited. Men, women, and children come together in unity, lifting their hands in praise and opening their hearts to receive God’s blessings.`,
        images: ["/crusade/Crusadeimg1.jpg", "/crusade/Crusadeimg2.jpg", "/crusade/Crusadeimg3.jpg"],
    },
    {
        id: "2",
        title: "Outdoor evangelism",
        description:
            `Jesus Sharing Ministry is committed to taking the Gospel beyond the walls of the church and into the heart of communities. Our outdoor evangelism is about meeting people right where they are — in streets, villages, and open grounds — so that no one misses the opportunity to hear about the saving love of Jesus Christ.

In these gatherings, we share God’s Word in a simple, powerful way that speaks to every age and background. Worship and praise echo under the open sky, drawing people closer to God. We pray for the sick, encourage the brokenhearted, and offer the message of hope to those who feel forgotten.

These meetings are often the first encounter many have with the Gospel, and we have witnessed countless lives transformed — families restored, hearts healed, and faith awakened. Outdoor evangelism is our way of carrying light into the darkest places and showing that Jesus cares for every soul.

"How beautiful are the feet of those who bring good news!" – Romans 10:15`,
        images: ["/outdoor/Outdoorimg1.jpg", "/outdoor/Outdoorimg2.jpg"],
    },
]

const Homeministry = () => {
  return (
    <div className="px-8 md:px-20 py-12 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-[#5BB7E6] uppercase tracking-widest text-[18px] font-bold">
          Our Ministries
        </p>
        <h2 className="text-2xl md:text-[40px] w-full md:w-[600px] mx-auto font-semibold text-black mt-2">
          Explore our impactful Minsitries around the world
        </h2>

        {/* Decorative underline */}
        <div className="flex justify-center mt-4">
          <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
          <span className="w-4 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/ministries/${project.id}`}
            className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* First Image */}
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-black">{project.title}</h3>
              {/* Only one line excerpt */}
              <p className="text-gray-600 mb-6 line-clamp-1">
                {project.description}
              </p>
              <span className="px-4 py-2 border border-[#0085DD] duration-300 cursor-pointer hover:bg-[#0085DD] text-black hover:text-white rounded-lg text-sm inline-block">
                View Ministry
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-12 justify-center flex">
            <Link
              href="/ministries"
              className="bg-[#5BB7E6] hover:bg-[#0085DD] text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Ministries
            </Link>
          </div>
    </div>
  )
}

export default Homeministry
