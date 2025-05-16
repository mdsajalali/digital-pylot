import { UserDetails } from "@/types";
import React from "react";

interface ExpandedRowProps {
  userDetails?: UserDetails;
}

export default function ExpandedRow({ userDetails }: ExpandedRowProps) {
  return (
    <tr className="bg-gray-50 text-left mx-auto">
      <td colSpan={5} className="p-4 w-full">
        <div className="w-full">
          <div className="w-full max-w-6xl mx-auto">
            <div className="w-full border rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-center">
                  <th className="px-4 py-2">Address 01</th>
                  <th className="px-4 py-2">Address 02</th>
                  <th className="px-4 py-2">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-center align-middle">
                  <td className="px-4 py-3">
                    {userDetails?.address1 || "---"}
                  </td>
                  <td className="px-4 py-3">
                    {userDetails?.address2 || "---"}
                  </td>
                  <td className="px-4 py-3">{userDetails?.phone || "---"}</td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
