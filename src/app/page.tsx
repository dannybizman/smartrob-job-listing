"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { JobList } from "@/components/JobList";
import Banner from "@/components/Banner";
import { LayoutGrid, LayoutList } from "lucide-react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <>
      <Navbar onSearch={setSearchTerm} />

      <main className="min-h-screen w-full bg-white">
        <Banner />
 
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-black">Job Listings</h1>

            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded border ${
                  viewMode === "list"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                } transition`}
              >
                <LayoutList size={20} />
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded border ${
                  viewMode === "grid"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                } transition`}
              >
                <LayoutGrid size={20} />
              </button>
            </div>
          </div>

          <JobList
            searchTerm={searchTerm}
            visibleCount={visibleCount}
            onLoadMore={handleLoadMore}
            viewMode={viewMode}
          />
        </section>
      </main>
    </>
  );
}
