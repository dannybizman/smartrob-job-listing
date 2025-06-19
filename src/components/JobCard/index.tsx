import Link from "next/link";
import Image from "next/image";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

export const JobCard = ({ job }: { job: any }) => (
  <Link href={`/job/${job.id}`} className="block">
    <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">
        <Image
          src={job.companyImage}
          alt={job.company}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />

      </div>
      <h2 className="text-lg font-semibold text-center text-gray-800 flex items-center justify-center gap-2 mb-1">
        <Briefcase size={18} />
        {job.title}
      </h2>
      <p className="text-sm text-center text-gray-500 mb-2">{job.company}</p>

      <div className="text-center text-gray-600 text-sm mb-2">{job.description}</div>

      <div className="flex justify-center items-center gap-2 text-gray-500 text-xs mt-2">
        <MapPin size={14} />
        {job.location}
      </div>
      <div className="flex justify-center items-center gap-2 text-green-600 text-xs mt-1 font-medium">
        <DollarSign size={14} />
        {job.salary}
      </div>
    </div>
  </Link>
);
