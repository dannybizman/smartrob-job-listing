"use client";

import { useState } from "react";
import {  ImagePlus } from "lucide-react";

export default function PostJob() {
   const [form, setForm] = useState({
      title: "",
      company: "",
      description: "",
      location: "",
      salary: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Submitted job:", form);
      alert("Job submitted! (mock)");
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8 mt-6"
      >
         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Job</h2>


         <div className="flex items-center gap-8 mb-8">
            <div className="flex-shrink-0 w-32 h-32 rounded-full border border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
               <ImagePlus className="text-gray-400" size={40} />
            </div>
            <label className="cursor-pointer text-sm text-[#3179A0] hover:underline">
               Upload job photo
               <input type="file" className="hidden" />
            </label>
         </div>


         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
               <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. UI Designer"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  required
               />
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
               <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="e.g. Figma Inc."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  required
               />
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
               <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Remote or Lagos"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  required
               />
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
               <input
                  name="salary"
                  value={form.salary}
                  onChange={handleChange}
                  placeholder="e.g. ₦300,000/month"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  required
               />
            </div>
         </div>


         <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
            <textarea
               name="description"
               value={form.description}
               onChange={handleChange}
               placeholder="Write about the job role..."
               rows={5}
               className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
               required
            />
         </div>


         <div className="mt-6">
            <button
               type="submit"
               className="bg-[#3179A0] hover:bg-[#3179A0] text-white px-6 py-2 rounded-full text-sm"
            >
               Add Job
            </button>
         </div>
      </form>
   );
}
