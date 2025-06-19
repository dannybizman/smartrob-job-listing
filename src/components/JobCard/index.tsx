import Link from "next/link";
import Image from "next/image";
import { Briefcase, MapPin, DollarSign } from "lucide-react";
import clsx from "clsx";

export const JobCard = ({ job, viewMode }: { job: any, viewMode: "grid" | "list" }) => {
  const containerClass = clsx(
    "transition duration-300",
    viewMode === "grid"
      ? "rounded-lg border border-gray-200 bg-white p-4 hover:shadow-lg"
      : "flex flex-col sm:flex-row gap-4 p-0 rounded-none border-none items-start"
  );
  

  const imageWrapperClass = clsx(
    viewMode === "grid"
      ? "flex justify-center mb-4"
      : "flex justify-start sm:justify-center sm:mb-4"
  );
  
  const titleClass = clsx(
    "text-lg font-semibold text-gray-800 mb-1",
    viewMode === "grid"
      ? "flex items-center justify-center gap-2 text-center"
      : "flex items-center gap-2"
  );

  const descriptionClass = clsx(
    "text-gray-600 text-sm mb-2",
    viewMode === "grid" ? "text-center" : ""
  );

  return (
    <Link href={`/job/${job.id}`} className="block">
      <div className={containerClass}>
        <div className={imageWrapperClass}>
          <Image
            src={job.companyImage}
            alt={job.company}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>

        <div className={clsx(viewMode === "list" ? "flex-1" : "")}>
          <h2 className={titleClass}>
            <Briefcase size={18} />
            {job.title}
          </h2>

          <p className="text-sm text-gray-500 mb-1">{job.company}</p>

          <p className={descriptionClass}>{job.description}</p>

          <div
            className={clsx(
              "flex flex-wrap items-center gap-4 text-xs text-gray-500",
              viewMode === "grid" ? "justify-center mt-2" : ""
            )}
          >
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {job.location}
            </div>
            <div className="flex items-center gap-1 text-green-600 font-medium">
              <DollarSign size={14} />
              {job.salary}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
