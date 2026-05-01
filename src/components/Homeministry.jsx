import React from 'react'
import Link from "next/link";

// Real projects data
const projects = [
    {
        id: "1",
        title: "Crusade ministry",
        description:
            `At Jesus Sharing Ministries, our Crusade Ministry stands at the heart of our calling—to take the Gospel of Jesus Christ beyond church walls and into the streets, villages, and unreached communities. We are deeply committed to fulfilling the Great Commission by reaching people who may have never heard the message of salvation, hope, and freedom in Christ.

Our crusades are prayerfully organized in both rural and urban areas, especially focusing on places where access to the Gospel is limited. Before every crusade, our team spends time in fasting and prayer, seeking the guidance of the Holy Spirit so that each gathering becomes a divine appointment for those who attend.

During these open-air meetings, the atmosphere is filled with passionate worship, heartfelt prayers, and powerful preaching of God's Word. We boldly proclaim the message of the cross—repentance, salvation, healing, deliverance, and restoration through Jesus Christ. We believe that the Gospel is not just words, but the power of God that transforms lives.

As the Word is preached, we witness the Holy Spirit moving among the people—touching hearts, breaking chains, and bringing freedom. Many respond to the altar call with open hearts, surrendering their lives to Jesus Christ. Testimonies of healing, deliverance, and personal transformation are a regular part of our crusade gatherings, giving glory to God for what He is doing.

We also place a strong emphasis on ministering to individual needs. Our team prays for the sick, encourages the brokenhearted, and stands in faith with those seeking breakthrough in their lives. We believe in showing not only the message of Christ but also His compassion and love in action.

Our mission does not end with the crusade event. We are committed to follow-up and discipleship. New believers are connected with local churches and small groups where they can grow in their faith, learn God's Word, and become strong disciples of Jesus Christ. We also continue to visit these areas to strengthen and encourage the believers.

Through our Crusade Ministry, we are seeing communities impacted, lives restored, and hope revived. What begins as a simple gathering often becomes the starting point of a powerful spiritual transformation in entire families and villages.

"Go into all the world and preach the gospel to all creation." – Mark 16:15

With this calling in our hearts, Jesus Sharing Ministries continues to go wherever God leads—carrying the light of Christ, sharing His love, and proclaiming His truth to the nations.`,
        images: ["/crusade/1. crusade.jpg", "/crusade/2. crusade.jpg", "/crusade/3. crusade.jpg", "/crusade/4. crusade.jpg", "/crusade/5. crusade.jpg"],
    },
    {
        id: "2",
        title: "Outreach Ministry",
        description:
            `At Jesus Sharing Ministries, our Outreach Ministry is the expression of God's love in action. We are passionate about going beyond the church walls to reach people in their everyday lives—especially those who are hurting, broken, neglected, and in need of hope.

Our outreach efforts focus on building genuine relationships within communities. We regularly visit villages, homes, and local areas, taking time to listen to people, understand their struggles, and share the love of Jesus Christ in a personal and meaningful way. We believe that true ministry begins with compassion and connection.

Through our outreach, we share the Gospel one-on-one and in small gatherings, allowing people to ask questions, open their hearts, and experience the truth of God's Word. Whether it is through a simple conversation, prayer, or encouragement, we aim to reflect Christ in everything we do.

We also engage in practical acts of kindness—helping families in need, supporting children, praying for the sick, and standing with those who are going through difficult times. Our desire is not only to preach the Gospel but to demonstrate it through love, service, and care.

Children and youth are a special focus of our outreach. We organize activities, Bible lessons, and small events that help them learn about Jesus in a joyful and engaging way. These moments often become seeds that grow into strong faith in their lives.

Every outreach is guided by prayer and led by the Holy Spirit. We believe that even the smallest act of love can open a door for God to move powerfully in someone's life. Many people we meet through outreach later become part of our church family, growing in their relationship with Christ.

Our mission is to reach the unreached, strengthen the weak, and bring hope to every heart we encounter. Through Outreach Ministry, we continue to be the hands and feet of Jesus—serving people, loving unconditionally, and pointing them to the Savior.

"Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." – Matthew 5:16

At Jesus Sharing Ministries, we are committed to shining that light—one life, one family, and one community at a time.`,
        images: ["/outreach/1. outreach.jpg", "/outreach/2. outreach.jpg", "/outreach/3. outreach.jpg", "/outreach/4. outreach.jpg", "/outreach/5. oureach.jpg"],
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
          Explore our impactful Ministries around the world
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