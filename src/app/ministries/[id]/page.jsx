"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";

// Dummy project data (same as Projects.jsx)
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

"How beautiful are the feet of those who bring good news!" – Romans 10:15`,
        images: ["/outdoor/Outdoorimg1.jpg", "/outdoor/Outdoorimg2.jpg"],
    },
    {
        id: "3",
        title: "Food distribution",
        description:
            `At Jesus Sharing Ministries, we believe in showing the love of Christ through practical acts of kindness. One of our key outreach efforts is our Food Relief Program, dedicated to supporting families in need.

In many communities, poverty and lack of resources leave families struggling to meet their daily needs. Through the generosity , we are able to distribute essential food packages to the most vulnerable. Each package contains basic food items to help sustain families and bring hope during difficult times.

Our mission is not only to meet physical needs but also to share the message of God's love and compassion. During each distribution, we take time to pray with recipients, encourage them, and remind them that they are not forgotten.

“For I was hungry and you gave me something to eat…” – Matthew 25:35

Together, we can make a difference—one family, one meal, and one act of love at a time.`,
        images: ["/food/Foodimg2.jpg", "/food/Foodimg1.jpg", "/food/Foodimg3.jpg"],
    },
    {
        id: "4",
        title: "Medical help",
        description:
            `At Jesus Sharing Ministries, we understand that many families in rural and underprivileged areas face serious health challenges but have little or no access to proper medical care. Through our Social Ministry, we extend the love of Christ by offering medical assistance to those in need.

Our medical outreach programs provide:

Free medical check-ups for individuals and families

Basic medicines for common illnesses

Guidance and health education to promote better living

Referrals for those requiring specialized care


This work is made possible through the dedication of compassionate volunteers and the generosity of donors who believe in our mission. Just as Jesus cared for the sick and healed the broken, we strive to follow His example by bringing hope, comfort, and healing to both body and soul.

“He heals the brokenhearted and binds up their wounds.” – Psalm 147:3

Your support enables us to reach more people with life-changing help. Together, we can save lives and share God’s love in practical ways.`,
        images: ["/medical/Medicalimg1.jpg", "/medical/Medica2.jpg", "/medical/Medicalimg3.jpg"],
    },
    {
        id: "5",
        title: "Kids ministry",
        description:
            `At Jesus Sharing Ministries, our heart beats for the children—especially those who are often forgotten. Many of the children we reach work in factories or labor alongside their families, unable to attend school or enjoy a normal childhood. Through our Kids Ministry, we are committed to bringing them hope, love, and the message of Jesus Christ.

We organize special gatherings where children can learn Bible stories, sing songs, express their creativity through drawing and crafts, and simply enjoy being kids. These moments not only plant seeds of faith but also encourage them to dream beyond their current struggles.

Our mission is to give these precious children a safe space where they are valued, encouraged, and reminded that they are loved by God and created for a purpose. By reaching them today, we believe we are shaping a brighter, faith-filled tomorrow.`,
        images: ["/kids/kidsimg1.jpg", "/kids/kidsimg2.jpg"],
    },
    {
        id: "6",
        title: "Reaching communities",
        description:
            `At Jesus Sharing Ministries, we believe that the Gospel is for everyone—no matter where they live or what their circumstances may be. Through our Reaching Communities Ministry, we go into villages, rural areas, and underprivileged neighborhoods to share the Good News of Jesus Christ.

Many of the communities we visit have limited access to churches, pastors, or any Christian fellowship. We gather with them in homes, courtyards, and open spaces, bringing worship, the Word of God, and prayer into their midst. These meetings are often filled with heartfelt worship, powerful preaching, and life-changing encounters with God’s presence.

Our mission is not only to preach but to build lasting relationships, encourage believers, and bring hope to those who feel forgotten. We believe that by reaching out in love and compassion, lives will be transformed, families restored, and entire communities impacted for the glory of God.`,
        images: ["/reaching/reachingimg1.jpg", "/reaching/reachingimg2.jpg"],
    },
];

const ProjectDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="px-8 md:px-20 py-12 text-center bg-white">
                <h2 className="text-2xl font-bold text-red-500">Project not found</h2>
            </div>
        );
    }

    return (
        <div className="px-8 md:px-20 py-12 bg-white">
            <button
                onClick={() => router.push("/ministries")}
                className="flex items-center gap-2 bg-[#5BB7E6] hover:bg-[#0085DD] cursor-pointer text-white font-semibold px-5 py-2 rounded-full shadow-md transition duration-200"
            >
                <span className="text-lg">←</span> Back
            </button>

            {/* Image Slider */}
            <div className="relative w-full max-w-4xl mt-10 mx-auto mb-8">
                <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
                    {project.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${project.title} ${index + 1}`}
                            className="w-[90%] md:w-[70%] flex-shrink-0 rounded-lg shadow-lg"
                        />
                    ))}
                </div>
            </div>

            {/* Title & Description */}
            <h1 className="text-3xl font-bold mb-4 text-black">{project.title}</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
                {project.description}
            </p>
        </div>
    );
};

export default ProjectDetails;
