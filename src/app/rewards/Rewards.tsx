"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaGift, 
  FaTrophy, 
  FaStar, 
  FaCoins, 
  FaShoppingBag, 
  FaTree, 
  FaRecycle, 
  FaAward, 
  FaUsers, 
  FaChartLine,
  FaMobileAlt,
  FaLaptop,
  FaTv,
  FaTabletAlt,
  FaSeedling,
  FaCoffee,
  FaShieldAlt,
  FaHandHoldingHeart
} from 'react-icons/fa';

interface EarningMethodProps {
  icon: React.ReactNode;
  title: string;
  points: string;
  description: string;
  color: 'green' | 'blue' | 'purple';
}

const EarningMethod = ({ icon, title, points, description, color }: EarningMethodProps) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
      <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-green-600 font-bold text-lg mb-2">{points}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface RewardCardProps {
  title: string;
  points: number;
  description: string;
  icon: React.ReactNode;
  category: string;
  onRedeem: (reward: any) => void;
}

const RewardCard = ({ title, points, description, icon, category, onRedeem }: RewardCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
        {icon}
      </div>
      <div className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-2 py-1 rounded mb-3">
        {category}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-600">Cost:</span>
        <span className="text-green-600 font-bold text-lg">{points} points</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button 
        onClick={() => onRedeem({ title, points, description })}
        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Redeem Now
      </button>
    </div>
  );
};

const leaderboardData = [
  { id: 1, name: 'Sarah Johnson', points: 3250 },
  { id: 2, name: 'Mike Chen', points: 2980 },
  { id: 3, name: 'Emily Davis', points: 2750 },
  { id: 4, name: 'Alex Rodriguez', points: 2420 },
  { id: 5, name: 'Priya Patel', points: 2180 },
];

const rewardsData = [
  {
    id: 1,
    title: "Eco-Store Voucher",
    points: 100,
    description: "$10 discount at partner eco-stores",
    icon: <FaShoppingBag className="text-2xl" />,
    category: "Shopping"
  },
  {
    id: 2,
    title: "Tree Planting",
    points: 50,
    description: "Plant a tree in your name",
    icon: <FaTree className="text-2xl" />,
    category: "Environment"
  },
  {
    id: 3,
    title: "Premium Membership",
    points: 200,
    description: "3 months of premium features",
    icon: <FaAward className="text-2xl" />,
    category: "Membership"
  },
  {
    id: 4,
    title: "Organic Coffee Kit",
    points: 75,
    description: "Sustainable coffee delivery",
    icon: <FaCoffee className="text-2xl" />,
    category: "Lifestyle"
  },
  {
    id: 5,
    title: "Eco Education Course",
    points: 150,
    description: "Access to sustainability courses",
    icon: <FaSeedling className="text-2xl" />,
    category: "Education"
  },
  {
    id: 6,
    title: "Carbon Offset",
    points: 120,
    description: "Offset 1 ton of CO₂ emissions",
    icon: <FaShieldAlt className="text-2xl" />,
    category: "Environment"
  }
];

const Rewards = () => {
  const [activeTab, setActiveTab] = useState('earn');
  const [userPoints, setUserPoints] = useState(1250);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState<any>(null);
  const [redeemedRewards, setRedeemedRewards] = useState<any[]>([]);

  const handleRedeem = (reward: any) => {
    if (userPoints >= reward.points) {
      setSelectedReward(reward);
      setShowRedeemModal(true);
    } else {
      alert(`You need ${reward.points - userPoints} more points to redeem this reward!`);
    }
  };

  const confirmRedeem = () => {
    if (selectedReward) {
      setUserPoints(userPoints - selectedReward.points);
      setRedeemedRewards([...redeemedRewards, { ...selectedReward, redeemedAt: new Date().toISOString() }]);
      setShowRedeemModal(false);
      setSelectedReward(null);
      alert(`Successfully redeemed ${selectedReward.title}!`);
    }
  };

  const cancelRedeem = () => {
    setShowRedeemModal(false);
    setSelectedReward(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
              <FaGift className="text-3xl text-yellow-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Rewards & <span className="text-green-600">Benefits</span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Get rewarded for being eco-friendly! Earn points for recycling electronics and redeem them for amazing benefits.
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <FaUsers className="text-2xl text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">100+</div>
                <div className="text-2sm text-gray-600 font-medium">Active Members</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <FaRecycle className="text-2xl text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-2sm text-gray-600 font-medium">Items Recycled</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <FaCoins className="text-2xl text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">10k+</div>
                <div className="text-2sm text-gray-600 font-medium">Points Earned</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <FaTree className="text-2xl text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">2T</div>
                <div className="text-2sm text-gray-600 font-medium">CO₂ Reduced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">How it works</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start earning rewards for your eco-friendly actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaRecycle className="text-2xl text-blue-600" />
                </div>
              </div>
              <div className="text-blue-600 text-2xl font-bold mb-2">Step 1</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Recycle electronics</h3>
              <p className="text-gray-600 leading-relaxed">
                Bring your old electronics to any certified recycling center in our network.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <FaStar className="text-2xl text-green-600" />
                </div>
              </div>
              <div className="text-green-600 text-2xl font-bold mb-2">Step 2</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Earn points</h3>
              <p className="text-gray-600 leading-relaxed">
                Get points based on the type and quantity of electronics you recycle.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <FaGift className="text-2xl text-yellow-600" />
                </div>
              </div>
              <div className="text-yellow-600 text-2xl font-bold mb-2">Step 3</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Redeem rewards</h3>
              <p className="text-gray-600 leading-relaxed">
                Use your points to get discounts, products, or support environmental causes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Points system</h2>
              <p className="text-2xl text-gray-600">
                Earn points for different types of electronic devices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
                <FaMobileAlt className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Smartphones</h3>
                <div className="text-3xl font-bold mb-2">50 pts</div>
                <p className="text-blue-100 text-2sm">per device</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
                <FaLaptop className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Laptops</h3>
                <div className="text-3xl font-bold mb-2">100 pts</div>
                <p className="text-green-100 text-2sm">per device</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
                <FaTv className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">TVs & Monitors</h3>
                <div className="text-3xl font-bold mb-2">150 pts</div>
                <p className="text-purple-100 text-2sm">per device</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center">
                <FaTabletAlt className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Tablets</h3>
                <div className="text-3xl font-bold mb-2">75 pts</div>
                <p className="text-orange-100 text-2sm">per device</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Redeem your points</h2>
              <p className="text-2xl text-gray-600">
                Turn your eco-efforts into amazing rewards
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your points balance</h3>
                  <div className="text-4xl font-bold text-green-600">{userPoints} points</div>
                  <p className="text-gray-600 mt-2">Available for redemption</p>
                </div>
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <div className="text-green-600 font-bold text-2lg">Ready to redeem!</div>
                  <p className="text-green-700 text-sm">Choose from rewards below</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rewardsData.map((reward) => (
                <RewardCard
                  key={reward.id}
                  title={reward.title}
                  points={reward.points}
                  description={reward.description}
                  icon={reward.icon}
                  category={reward.category}
                  onRedeem={handleRedeem}
                />
              ))}
            </div>

            {userPoints === 0 && (
              <div className="text-center mt-12 bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
                <FaCoins className="text-4xl text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No points available</h3>
                <p className="text-gray-600 mb-4">Start recycling electronics to earn points!</p>
                <Link href="/map" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Find recycling centers
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Your rewards dashboard</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Current points:</span>
                    <span className="text-2xl font-bold">{userPoints}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Recycled items:</span>
                    <span className="text-xl font-semibold">15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rank:</span>
                    <span className="text-xl font-semibold">#42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rewards redeemed:</span>
                    <span className="text-xl font-semibold">{redeemedRewards.length}</span>
                  </div>
                </div>
                <button className="w-full bg-white text-green-600 py-3 rounded-lg font-bold mt-6 hover:bg-gray-100 transition-colors">
                  View full dashboard
                </button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Top recyclers</h3>
                <div className="space-y-4">
                  {leaderboardData.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-yellow-500' : 
                          index === 1 ? 'bg-gray-400' : 
                          index === 2 ? 'bg-orange-500' : 'bg-green-500'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-semibold">{user.name}</span>
                      </div>
                      <div className="text-green-600 font-bold">{user.points} pts</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-500 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start earning today!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of eco-conscious individuals turning e-waste into rewards and making a positive environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/map" className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Find recycling centers
            </Link>
            <Link href="/sign-up" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:-translate-y-1">
              Join rewards program
            </Link>
          </div>
        </div>
      </section>

      {showRedeemModal && selectedReward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <FaGift className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Redeem reward</h3>
              <p className="text-gray-600 mb-6">Confirm you want to redeem this reward:</p>
              
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-lg text-gray-800">{selectedReward.title}</h4>
                <p className="text-green-600 font-bold">{selectedReward.points} points</p>
                <p className="text-gray-600 text-sm mt-2">{selectedReward.description}</p>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Your points after redemption:</span>
                <span className="text-lg font-bold text-green-600">{userPoints - selectedReward.points} points</span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={cancelRedeem}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRedeem}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Confirm redeem
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Rewards;