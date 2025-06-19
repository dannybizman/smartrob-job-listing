import React from "react";
import Image from "next/image";
import { Info, BadgeCheck } from "lucide-react";

type Job = {
  title: string;
  company: string;
  description: string;
  location: string;
  salary: string;
  companyImage: string;
  experience?: string;
};

export default function JobDetailCard({ job }: { job: Job }) {
  return (
    
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-4">
    
      <div className="flex-shrink-0 p-4 rounded-lg bg-blue-50 flex items-center justify-center w-full md:w-[250px] h-[300px]">
        <Image
          src={job.companyImage}
          alt={job.company}
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>

     
      <div className="flex-1 border rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2 mb-2">
          {job.title}
          <BadgeCheck size={20} className="text-emerald-600" />
        </h1>

        <p className="text-gray-600 text-base">{job.company}</p>

        <div className="flex items-center gap-2 mt-3">
          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
            {job.location}
          </span>
          {job.experience && (
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
              {job.experience}
            </span>
          )}
        </div>

        <div className="mt-5 text-sm text-gray-800">
          <p className="flex items-center gap-1 font-semibold mb-1">
            About <Info size={14} />
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {job.description}
          </p>
        </div>

        <div className="mt-6 text-gray-800">
          <p className="font-medium">
            Salary Range:{" "}
            <span className="text-green-600 font-bold">{job.salary}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
