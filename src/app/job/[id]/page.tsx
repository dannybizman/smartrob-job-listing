"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { jobs } from "@/data/jobs";
import Navbar from "@/components/Navbar";
import JobDetailCard from "@/components/JobDetailCard";
import { JobList } from "@/components/JobList";

export default function JobDetailPage() {
  const { id } = useParams(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [viewMode] = useState<"grid" | "list">("grid");

  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

  const job = jobs.find((j) => j.id === id);

  if (!job) return <p className="p-6 text-red-500">Job not found.</p>;

  return (
    <>
      <Navbar onSearch={setSearchTerm} />

      <div className="mt-7 mb-4">
        <JobDetailCard job={job} />
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-xl font-semibold text-black mb-4">Other related jobs</h2>

        <JobList
          searchTerm={searchTerm}
          visibleCount={visibleCount}
          onLoadMore={handleLoadMore}
          viewMode={viewMode}
          jobs={jobs.filter((j) => j.id !== id)}
        />
      </section>
    </>
  );
}
