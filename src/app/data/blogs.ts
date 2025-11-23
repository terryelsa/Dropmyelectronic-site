// src/app/data/blogs.ts

export interface Blog {
  id: number;
  title: string;
  description: string;
  content?: {
    intro?: string;
    sections?: Array<{
      title: string;
      content: string;
    }>;
  };
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags?: string[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding E-Waste in Nairobi",
    description: "Learn about the growing e-waste problem in Nairobi and how proper disposal can make a difference.",
    content: {
      intro: "Electronic waste is one of the fastest-growing environmental challenges facing Nairobi today.",
      sections: [
        {
          title: "The Scale of the Problem",
          content: "Nairobi generates over 3,000 tons of e-waste annually, with only 10% being properly recycled..."
        },
        {
          title: "Health and Environmental Impacts",
          content: "Improper e-waste disposal leads to soil contamination, water pollution, and serious health risks..."
        }
      ]
    },
    image: "/images/blog1.jpg",
    category: "Education",
    author: "DropMyElectronic Team",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["e-waste", "nairobi", "recycling"]
  },
  {
    id: 2,
    title: "How to Properly Dispose of Your Old Electronics",
    description: "A step-by-step guide to responsibly recycling your electronic devices in Kenya.",
    content: {
      intro: "Proper e-waste disposal is easier than you think. Here's how to do it right.",
      sections: [
        {
          title: "Step 1: Data Security",
          content: "Before recycling any device, ensure all personal data is completely wiped..."
        },
        {
          title: "Step 2: Find Certified Centers",
          content: "Locate NEMA-approved e-waste recycling facilities near you..."
        }
      ]
    },
    image: "/images/blog2.jpg",
    category: "Guide",
    author: "DropMyElectronic Team", 
    date: "2024-01-10",
    readTime: "4 min read",
    tags: ["disposal", "guide", "recycling"]
  },
  {
    id: 3,
    title: "The Economic Benefits of E-Waste Recycling",
    description: "Discover how proper e-waste management creates jobs and economic opportunities.",
    image: "/images/blog3.jpg",
    category: "Economics",
    author: "DropMyElectronic Team",
    date: "2024-01-05", 
    readTime: "6 min read",
    tags: ["economics", "jobs", "recycling"]
  }
  // Add more blog posts as needed
];

// Function to get random blogs (for related articles)
export function randomBlogs(count: number): Blog[] {
  const shuffled = [...blogs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default blogs;