"use client";

import JobPost from "@/components/JobPost";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PostJobPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <nav className="flex items-center text-sm text-gray-600 mb-6 mt-5">
        <Link href="/" className="hover:underline text-[#3179A0]">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2 text-gray-400" />
        <span className="text-gray-500">Post Job</span>
      </nav>

      <div className="mt-5 mb-5">

        <JobPost />

      </div>

    </div>
  );
}
