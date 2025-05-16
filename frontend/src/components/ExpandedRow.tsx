import { UserDetails } from "@/types";
import React from "react";

interface ExpandedRowProps {
  userDetails?: UserDetails;
}

export default function ExpandedRow({ userDetails }: ExpandedRowProps) {
  return (
    <tr className="bg-gray-50">
      <td colSpan={5} className="p-4 w-full">
        <div className="w-full">
          <table className="w-full text-sm text-center border rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="px-4 py-2">Address 01</th>
                <th className="px-4 py-2">Address 02</th>
                <th className="px-4 py-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-3">{userDetails?.address1 || "---"}</td>
                <td className="px-4 py-3">{userDetails?.address2 || "---"}</td>
                <td className="px-4 py-3">{userDetails?.phone || "---"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
}
