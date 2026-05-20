import React from "react";
import AdminNav from "./AdminNav";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-400">
      <AdminNav />
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Admin Page
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <a className="no-underline text-white text-2xl" href="/adminproduct">
          Product Management
        </a>
      </div>
    </div>
  );
}
