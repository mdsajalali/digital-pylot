import { User, UserDetails } from "@/types";
import React, { Fragment } from "react";
import ExpandedRow from "./ExpandedRow";

interface UserTableProps {
  users: User[];
  userDetails: { [key: number]: UserDetails };
  expandedRow: number | null;
  toggleRow: (id: number) => void;
}

export default function UserTable({
  users,
  userDetails,
  expandedRow,
  toggleRow,
}: UserTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-4 text-xs font-semibold text-left flex items-center gap-2">
            <input type="checkbox" />
            <span className="flex items-center gap-2 text-xs font-semibold text-left text-[#575F6E]">
              ID
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L5 5L10 0H0Z" fill="#242731" />
              </svg>
            </span>
          </th>
          {["First Name", "Last Name", "Email"].map((label) => (
            <th
              key={label}
              className="p-4 text-xs font-semibold text-left text-[#575F6E]"
            >
              <span className="flex items-center gap-2">
                {label}
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L5 5L10 0H0Z" fill="#242731" />
                </svg>
              </span>
            </th>
          ))}
          <th className="p-4 text-xs font-semibold text-left text-[#575F6E]">
            Phone
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <Fragment key={user.id}>
            <tr
              onClick={() => toggleRow(user?.id)}
              className="hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <td className="p-4 text-sm flex items-center gap-2">
                <input type="checkbox" />
                {user?.id}
              </td>
              <td className="p-4 text-sm">{user?.first_name}</td>
              <td className="p-4 text-sm">{user?.last_name}</td>
              <td className="p-4 text-sm">{user?.email}</td>
              <td className="p-4 text-sm">
                {userDetails[user?.id]?.phone || "---"}
              </td>
            </tr>
            {expandedRow === user?.id && (
              <ExpandedRow userDetails={userDetails[user?.id]} />
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
