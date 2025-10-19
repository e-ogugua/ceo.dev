'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const storyChapters = [
  {
    id: 1,
    title: 'The Curious Kid',
    year: 'Early Years',
    image: '/images/curiousKidAboutImage1.webp',
    story: 'My journey began with an insatiable curiosity about how things work. As a young child, I was always taking apart toys, asking endless questions, and trying to understand the world around me. This natural curiosity laid the foundation for my problem-solving mindset and love for technology.',
    lesson: 'Curiosity is the spark that ignites innovation and drives lifelong learning.'
  },
  {
    id: 2,
    title: 'Early 2000s Discovery',
    year: '2000s',
    image: '/images/aboutImage2Early2000s.webp',
    story: 'The early 2000s marked my introduction to computers and the internet. I spent countless hours exploring this new digital world, learning basic programming concepts, and discovering the power of technology to solve real-world problems. This period shaped my technical foundation.',
    lesson: 'Technology is a tool for empowerment and positive change in our communities.'
  },
  {
    id: 3,
    title: 'The Hacking Years',
    year: '2010s',
    image: '/images/aboutImage3EarlyHackingYrs.webp',
    story: 'My teenage years were defined by deep dives into cybersecurity and ethical hacking. I learned about system vulnerabilities, network security, and the ethical responsibility that comes with technical knowledge. This hands-on experience taught me the importance of security in software development.',
    lesson: 'Knowledge comes with responsibility - use your skills to build, not destroy.'
  },
  {
    id: 4,
    title: 'University Projects',
    year: 'University',
    image: '/images/aboutImage4GroupProject.webp',
    story: 'University provided my first taste of collaborative software development. Working on group projects taught me the value of teamwork, communication, and dividing complex problems into manageable tasks. These experiences prepared me for real-world development challenges.',
    lesson: 'Great achievements are rarely solo endeavors - collaboration amplifies success.'
  },
  {
    id: 5,
    title: 'Active Lifestyle',
    year: 'Active Life',
    image: '/images/AboutImage5Roadbiking.webp',
    story: 'Road biking became my sanctuary for mental clarity and physical well-being. The discipline, endurance, and strategic thinking required in cycling parallel the mindset needed for software development and business leadership. It taught me balance and resilience.',
    lesson: 'Physical and mental fitness are essential foundations for sustained success.'
  },
  {
    id: 6,
    title: 'Strategic Leadership',
    year: 'Leadership',
    image: '/images/aboutImage6StrategistLeader.webp',
    story: 'As I grew in my career, I discovered the power of strategic thinking and leadership. I learned to bridge the gap between technical solutions and business objectives, developing the ability to lead teams and drive projects to successful completion.',
    lesson: 'True leadership combines technical expertise with emotional intelligence and vision.'
  },
  {
    id: 7,
    title: 'Present Day',
    year: 'Present',
    image: '/images/aboutImage7InOffice.webp',
    story: 'Today, I stand at the intersection of technology and entrepreneurship. As a software engineer and business strategist, I continue to build innovative solutions while leading ventures that make a positive impact. My journey continues to evolve as I embrace new challenges and opportunities.',
    lesson: 'Growth never stops - every day brings new opportunities to learn and improve.'
  }
]

export function InteractiveStory() {
  const [activeChapter, setActiveChapter] = useState(0)

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Journey{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Click on any chapter to explore my story in detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {storyChapters.map((chapter, index) => (
              <motion.button
                key={chapter.id}
                onClick={() => setActiveChapter(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeChapter === index
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50'
                    : 'bg-slate-800/30 border-white/10 hover:border-white/20 hover:bg-slate-800/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-bold text-lg ${activeChapter === index ? 'text-white' : 'text-gray-300'}`}>
                    {chapter.title}
                  </h3>
                  <span className={`text-sm px-2 py-1 rounded ${
                    activeChapter === index
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {chapter.year}
                  </span>
                </div>
                <p className={`text-sm ${activeChapter === index ? 'text-gray-200' : 'text-gray-400'}`}>
                  {chapter.lesson}
                </p>
              </motion.button>
            ))}
          </motion.div>

          {/* Story Content */}
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="mb-6">
                <Image
                  src={storyChapters[activeChapter].image}
                  alt={storyChapters[activeChapter].title}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {storyChapters[activeChapter].title}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                    {storyChapters[activeChapter].year}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {storyChapters[activeChapter].story}
                </p>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 rounded-lg p-4">
                  <p className="text-blue-300 italic font-medium">
                    &quot;{storyChapters[activeChapter].lesson}&quot;
                  </p>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {storyChapters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveChapter(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeChapter === index
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-8'
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to chapter ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
