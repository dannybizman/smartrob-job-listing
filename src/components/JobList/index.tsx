"use client";

import { jobs as jobData } from "@/data/jobs";
import { JobCard } from "../JobCard";
import LoadMoreButton from "../_atoms/LoadMoreButton";

type JobListProps = {
  searchTerm: string;
  visibleCount: number;
  onLoadMore: () => void;
  viewMode: "grid" | "list";
  jobs?: any[];
};

export const JobList = ({
  searchTerm,
  visibleCount,
  onLoadMore,
  viewMode,
  jobs = jobData,
}: JobListProps) => {
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
    <div>
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            : "flex flex-col gap-6"
        }
      >
        {visibleJobs.map((job) => (
          <JobCard key={job.id} job={job} viewMode={viewMode} />
        ))}

      </div>

      {visibleCount < filteredJobs.length && (
        <LoadMoreButton onClick={onLoadMore} />
      )}
    </div>
  );
};
