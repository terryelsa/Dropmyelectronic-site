'use client';
import React, { useEffect, useState } from 'react';
import { blogs } from '@/app/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { randomBlogs } from '@/app/data/blogs';
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, 
  FaCalendar, FaClock, FaUser, FaArrowRight,
  FaShareAlt, FaBookmark, FaPrint
} from 'react-icons/fa';

interface BlogPageProps {
  params: {
    id: string;
  };
}

const Blog: React.FC<BlogPageProps> = ({ params }) => {
  const [relatedBlogs, setRelatedBlogs] = useState(() => {
    const randomBlogsResult = randomBlogs(4);
    return randomBlogsResult.filter(blog => blog.id !== Number(params.id)).slice(0, 3);
  });
  const [readingProgress, setReadingProgress] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blog?.title || 'Check out this article';
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
        break;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!params?.id) return <div>invalid blog id</div>;
  const id = Number(params.id);
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">blog not found</h1>
        <p className="text-gray-600 mb-8">the blog you&apos;re looking for doesn't exist or has been removed.</p>
        <Link href="/education" className="text-green-600 hover:text-green-800 font-medium">
          return to education hub
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-green-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      <div className="relative h-96 md:h-[500px] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover brightness-[0.7]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                {blog.category}
              </span>
              {blog.tags?.slice(0, 2).map(tag => (
                <span key={tag} className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              {blog.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{blog.author}</p>
                    <p className="text-sm opacity-80">{blog.date}</p>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <FaClock className="text-sm" />
                <span>{blog.readTime}</span>
              </div>
              
              <div className="flex items-center gap-4 ml-auto">
                <button 
                  onClick={() => setIsSaved(!isSaved)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                  title={isSaved ? 'unsave article' : 'save article'}
                >
                  <FaBookmark className={isSaved ? 'text-yellow-400 fill-yellow-400' : 'text-white'} />
                </button>
                <button 
                  onClick={handlePrint}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                  title="print article"
                >
                  <FaPrint />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content and sidebar */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* main content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              {/* blog intro */}
              <div className="text-xl text-gray-700 mb-8 leading-relaxed font-medium bg-green-50 p-6 rounded-2xl border border-green-100">
                {blog.content?.intro || blog.description}
              </div>

              {/* blog content */}
              {blog.content?.sections ? (
                blog.content.sections.map((section, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                ))
              ) : (
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">understanding e-waste</h2>
                    <p className="text-gray-700 leading-relaxed">
                      electronic waste consists of discarded devices containing valuable materials and hazardous substances that require proper handling.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">the nairobi context</h2>
                    <p className="text-gray-700 leading-relaxed">
                      as a growing tech hub, nairobi faces unique e-waste challenges that require locally-adapted solutions and community engagement.
                    </p>
                  </section>
                </div>
              )}

              {/* key takeaways */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 my-12">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  key takeaways
                </h3>
                <ul className="space-y-3 text-blue-900">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>proper e-waste recycling protects our environment and conserves resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>nairobi has certified centers that ensure safe and responsible disposal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>every recycled device contributes to a cleaner, healthier city</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* share section */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">share this article</h3>
                  <p className="text-gray-600 text-sm">help spread awareness about e-waste in nairobi</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook className="text-lg" />
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                  >
                    <FaTwitter className="text-lg" />
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedin className="text-lg" />
                  </button>
                  <button 
                    onClick={() => handleShare('whatsapp')}
                    className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <span className="text-lg">📱</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* author card */}
              {blog.author && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4">about the author</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{blog.author}</p>
                      <p className="text-gray-600 text-sm mt-1">e-waste education specialist</p>
                    </div>
                  </div>
                </div>
              )}

              {/* table of contents */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4">in this article</h3>
                <nav className="space-y-2">
                  {blog.content?.sections ? (
                    blog.content.sections.map((section, index) => (
                      <a 
                        key={index}
                        href={`#section-${index}`}
                        className="block text-gray-600 hover:text-green-600 transition-colors py-2 border-b border-gray-100 last:border-0"
                      >
                        {section.title}
                      </a>
                    ))
                  ) : (
                    <>
                      <a href="#understanding" className="block text-gray-600 hover:text-green-600 transition-colors py-2 border-b border-gray-100">understanding e-waste</a>
                      <a href="#nairobi" className="block text-gray-600 hover:text-green-600 transition-colors py-2 border-b border-gray-100">the nairobi context</a>
                      <a href="#takeaways" className="block text-gray-600 hover:text-green-600 transition-colors py-2">key takeaways</a>
                    </>
                  )}
                </nav>
              </div>

              {/* cta card */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3">ready to act?</h3>
                <p className="text-green-100 mb-6">
                  turn knowledge into action by recycling your electronics responsibly.
                </p>
                <Link 
                  href="/findcenters" 
                  className="w-full bg-white text-green-700 px-4 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <span>📍</span>
                  find recycling centers
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* related articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">continue reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  href={`/education/${relatedBlog.id}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-green-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                        {relatedBlog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedBlog.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedBlog.date}</span>
                      <span className="text-green-600 group-hover:translate-x-1 transition-transform">
                        read article →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;