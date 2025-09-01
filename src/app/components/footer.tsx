"use client";
import Link from "next/link";
// import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Company</h2>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About</h2>
          <ul className="space-y-2">
            <li><Link href="/company">Company</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/updates">Recent Updates</Link></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/tutorials">Development Tutorials</Link></li>
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Support</h2>
          <ul className="space-y-2">
            <li><Link href="/support">Customer Support</Link></li>
            <li><Link href="/project-updates">Project Updates</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-600"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          {/* <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaFacebook /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaGithub /></a> */}
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/support">Support</Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-400">
          © {new Date().getFullYear()} Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
