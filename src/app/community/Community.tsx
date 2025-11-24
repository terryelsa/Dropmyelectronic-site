"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaUsers,
  FaCalendarAlt,
  FaTrophy,
  FaHandsHelping,
  FaComments,
  FaShareAlt,
  FaHeart,
  FaTree,
  FaRecycle,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaUserFriends,
  FaChartLine,
  FaAward,
  FaHandHoldingHeart,
  FaLightbulb
} from 'react-icons/fa';

const Community = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Community events in Nairobi
  const communityEvents = [
    {
      id: 1,
      title: "Nairobi E-Waste Cleanup Drive",
      date: "2024-02-15",
      time: "8:00 AM - 12:00 PM",
      location: "Dandora Dumpsite, Nairobi",
      organizer: "Green Kenya Initiative",
      participants: 127,
      description: "Join us for a community cleanup focusing on electronic waste in and around Dandora. Gloves and collection bags provided.",
      points: 100,
      image: "/events/cleanup-dandora.jpg",
      type: "cleanup"
    },
    {
      id: 2,
      title: "E-Waste Awareness Workshop",
      date: "2024-02-20",
      time: "2:00 PM - 4:00 PM",
      location: "Kibera Community Hall",
      organizer: "DropMyElectronic Team",
      participants: 45,
      description: "Learn about the dangers of improper e-waste disposal and how to recycle safely. Perfect for community leaders and educators.",
      points: 75,
      image: "/events/workshop-kibera.jpg",
      type: "workshop"
    },
    {
      id: 3,
      title: "School Electronics Collection Day",
      date: "2024-02-25",
      time: "9:00 AM - 3:00 PM",
      location: "Nairobi Primary School",
      organizer: "Youth Environmental Club",
      participants: 89,
      description: "Special collection event for schools. Bring old phones, tablets, and laptops. Educational activities for students.",
      points: 50,
      image: "/events/school-collection.jpg",
      type: "collection"
    },
    {
      id: 4,
      title: "Community Recycling Champions Training",
      date: "2024-03-05",
      time: "10:00 AM - 1:00 PM",
      location: "Kawangware Social Hall",
      organizer: "Nairobi County Environment Dept",
      participants: 62,
      description: "Become a certified recycling champion in your community. Training on e-waste handling and community mobilization.",
      points: 150,
      image: "/events/champions-training.jpg",
      type: "training"
    }
  ];

  // Community success stories
  const successStories = [
    {
      id: 1,
      name: "Mama Grace",
      location: "Mathare, Nairobi",
      role: "Community Leader",
      achievement: "Organized 5 cleanup events in 2023",
      impact: "Collected 2.3 tonnes of e-waste",
      story: "Started with just her family's old phones, now leads community-wide recycling efforts.",
      image: "/community/mama-grace.jpg",
      points: 2500
    },
    {
      id: 2,
      name: "Youth Green Warriors",
      location: "Kibera, Nairobi",
      role: "Youth Group",
      achievement: "Mobile phone collection champions",
      impact: "3,000+ phones recycled",
      story: "Transformed old phones into school fees through our rewards program.",
      image: "/community/youth-warriors.jpg",
      points: 18000
    },
    {
      id: 3,
      name: "Jamil Recyclers",
      location: "Eastleigh, Nairobi",
      role: "Small Business",
      achievement: "First certified e-waste micro-enterprise",
      impact: "Created 8 green jobs",
      story: "From informal collectors to certified recycling partners.",
      image: "/community/jamil-recyclers.jpg",
      points: 12000
    }
  ];

  // Community groups in Nairobi
  const communityGroups = [
    {
      name: "Nairobi Green Champions",
      members: 342,
      focus: "Urban cleanup and awareness",
      location: "Across Nairobi",
      joined: true
    },
    {
      name: "Kibera E-Waste Warriors",
      members: 156,
      focus: "Mobile phone recycling",
      location: "Kibera, Nairobi",
      joined: false
    },
    {
      name: "Youth for Clean Nairobi",
      members: 278,
      focus: "School and youth engagement",
      location: "Nairobi Schools",
      joined: true
    },
    {
      name: "Women in E-Recycling",
      members: 89,
      focus: "Women empowerment in recycling",
      location: "Mathare & Kawangware",
      joined: false
    }
  ];

  // Community leaderboard
  const leaderboard = [
    { rank: 1, name: "Green Warriors Kibera", points: 18450, members: 45 },
    { rank: 2, name: "Mama Grace", points: 12780, members: 1 },
    { rank: 3, name: "Nairobi Youth Club", points: 11560, members: 32 },
    { rank: 4, name: "Eastleigh Recyclers", points: 9870, members: 28 },
    { rank: 5, name: "Karen Environmental", points: 8450, members: 18 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <FaUsers className="text-purple-300" />
              <span className="text-purple-300 font-semibold">Community Power</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nairobi <span className="text-yellow-300">Community</span> Action
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of Nairobi residents working together to tackle e-waste. Participate in events, share stories, and make a real difference in our city.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">5,000+</div>
                <div className="text-purple-200">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">127</div>
                <div className="text-purple-200">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">45T</div>
                <div className="text-purple-200">E-Waste Collected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'events' 
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaCalendarAlt />
              Events
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'stories' 
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaHeart />
              Success Stories
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'groups' 
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaUserFriends />
              Community Groups
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'leaderboard' 
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaTrophy />
              Leaderboard
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Events Tab */}
            {activeTab === 'events' && (
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                  Upcoming Community <span className="text-purple-600">Events</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {communityEvents.map(event => (
                    <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl">
                        {event.type === 'cleanup' && <FaRecycle />}
                        {event.type === 'workshop' && <FaComments />}
                        {event.type === 'collection' && <FaHandHoldingHeart />}
                        {event.type === 'training' && <FaLightbulb />}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {event.points} pts
                          </span>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <FaCalendarAlt className="text-purple-500" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <FaClock className="text-purple-500" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <FaMapMarkerAlt className="text-purple-500" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <FaUsers className="text-purple-500" />
                            <span>{event.participants} participants</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        
                        <div className="flex gap-3">
                          <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                            Join Event
                          </button>
                          <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                            <FaShareAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Success Stories Tab */}
            {activeTab === 'stories' && (
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                  Community <span className="text-purple-600">Success Stories</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {successStories.map(story => (
                    <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center text-white text-4xl">
                        <FaUsers />
                      </div>
                      
                      <div className="p-6">
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                          <p className="text-purple-600 font-semibold">{story.location}</p>
                          <p className="text-gray-600 text-sm">{story.role}</p>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          <div className="bg-green-50 rounded-lg p-3">
                            <div className="font-semibold text-green-800">Achievement</div>
                            <div className="text-green-700 text-sm">{story.achievement}</div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <div className="font-semibold text-blue-800">Impact</div>
                            <div className="text-blue-700 text-sm">{story.impact}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 italic">&quot;{story.story}&quot;</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-purple-600 font-bold">
                            {story.points.toLocaleString()} pts
                          </div>
                          <button className="text-purple-600 hover:text-purple-700 font-semibold">
                            Read Full Story →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Community Groups Tab */}
            {activeTab === 'groups' && (
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                  Join Community <span className="text-purple-600">Groups</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {communityGroups.map((group, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{group.name}</h3>
                        {group.joined ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            Member
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                            Join Now
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaUsers className="text-purple-500" />
                          <span>{group.members} members</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaRecycle className="text-purple-500" />
                          <span>{group.focus}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaMapMarkerAlt className="text-purple-500" />
                          <span>{group.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        {group.joined ? (
                          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            View Group
                          </button>
                        ) : (
                          <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                            Join Group
                          </button>
                        )}
                        <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                          <FaShareAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leaderboard Tab */}
            {activeTab === 'leaderboard' && (
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                  Community <span className="text-purple-600">Leaderboard</span>
                </h2>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800">Top Recycling Champions</h3>
                    <p className="text-gray-600">Ranked by points earned through community activities</p>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {leaderboard.map((entry, index) => (
                      <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                              entry.rank === 1 ? 'bg-yellow-500' : 
                              entry.rank === 2 ? 'bg-gray-400' : 
                              entry.rank === 3 ? 'bg-orange-500' : 'bg-purple-500'
                            }`}>
                              {entry.rank}
                            </div>
                            <div>
                              <div className="font-bold text-gray-800">{entry.name}</div>
                              <div className="text-gray-600 text-sm">{entry.members} {entry.members === 1 ? 'member' : 'members'}</div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="font-bold text-purple-600 text-xl">
                              {entry.points.toLocaleString()} pts
                            </div>
                            <div className="text-gray-600 text-sm">Total points</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Start Your Own Initiative */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Start Your Own <span className="text-purple-600">Community Initiative</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Want to lead change in your neighborhood? We provide resources, training, and support for community leaders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FaHandsHelping className="text-3xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get Training</h3>
                <p className="text-gray-600">Become a certified community recycling champion</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FaChartLine className="text-3xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Access Resources</h3>
                <p className="text-gray-600">Event kits, educational materials, and funding guidance</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FaUsers className="text-3xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Build Your Team</h3>
                <p className="text-gray-600">Connect with volunteers and like-minded community members</p>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
            >
              <FaHandsHelping />
              Start a Community Project
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-yellow-300">Nairobi Community</span> Movement
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we&apos;re cleaning up Nairobi and creating a sustainable future. Your community needs you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaUsers />
              Join Community
              <FaArrowRight />
            </Link>
            <Link 
              href="/events" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaCalendarAlt />
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Component */}
    </div>
  );
};

export default Community;