import ai from "../assets/projects/ai.png";
import blog from "../assets/projects/blog.jpg";
import repair from "../assets/projects/repair.jpg";
import chat from "../assets/projects/chat.jpg";

export const data = [
  {
    id: 1,
    name: "Anoop's Blog",
    image: blog,
    live: "https://anoopsblog.onrender.com",
    details:
      "Anoop's Blog is a dynamic blogging platform that empowers users to share their thoughts, insights, and stories.",
  },

  {
    id: 2,
    name: "Anoop's AI",
    image: ai,
    details:
      "Unleash your creativity with my AI-powered image generator! Simply input a prompt, and watch as the intelligent algorithms create stunning images. Save and share your masterpieces with others, or download them for personal use.",
    live: "https://anoopsai.onrender.com",
  },

  {
    id: 3,
    name: "Anoop's Chat",
    image: chat,
    details:
      "Welcome to Anoop's Chat, where conversations come alive! Built with Firebase and React, Anoop's Chat offers seamless communication between users.",
    live: "https://anoopschat.onrender.com",
  },
  {
    id: 4,
    name: "Your Repair",
    image: repair,
    live: "https://yourrepairs.onrender.com",
    details:
      "At YourRepair, we empower small repair store owners with a comprehensive digital solution. Our user-friendly platform allows store workers to efficiently manage repair requests, assign tasks to employees, and track repair statuses seamlessly. Whether it’s a malfunctioning appliance or a broken gadget, YourRepair ensures smooth communication, organized workflows, and timely updates. ",
  },
];
