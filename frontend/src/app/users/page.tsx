"use client";

import PaginationControls from "@/components/PaginationControls";
import UserTable from "@/components/UserTable";
import { User, UserDetails } from "@/types";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rowsPerPage, setRowPerPage] = useState(10);
  const [userDetails, setUserDetails] = useState<{
    [key: number]: UserDetails;
  }>({});
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const fetchUsers = async (page: number, limit: number) => {
    setLoading(true);
    const res = await fetch(
      `http://localhost:3000/api/users?page=${page}&limit=${limit}`
    );
    const data = await res.json();
    setUsers(data?.data);
    setTotalPages(data?.meta?.pages);
    setLoading(false);
  };

  // get single user
  const fetchUserDetails = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const data = await res.json();
    setUserDetails((prev) => ({
      ...prev,
      [id]: {
        address1: data?.address1,
        address2: data?.address2,
        phone: data?.phone,
      },
    }));
  };

  useEffect(() => {
    fetchUsers(currentPage, rowsPerPage);
  }, [currentPage, rowsPerPage]);

  useEffect(() => {
    if (expandedRow !== null && !userDetails[expandedRow]) {
      fetchUserDetails(expandedRow);
    }
  }, [expandedRow]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#00244A] to-[#0054AF] flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl">
        {loading ? (
          users?.length === 0 ? (
            <div className="flex items-center justify-center w-full h-96">
              <p className="text-gray-500 text-lg">No users found.</p>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#00244A] border-solid"></div>
            </div>
          )
        ) : (
          <>
            <div className="overflow-x-auto">
              <UserTable
                users={users}
                userDetails={userDetails}
                expandedRow={expandedRow}
                toggleRow={(id) =>
                  setExpandedRow(expandedRow === id ? null : id)
                }
              />
            </div>
            <PaginationControls
              totalPages={totalPages}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              setRowPerPage={setRowPerPage}
              handlePageChange={(page) => {
                setCurrentPage(page);
                setExpandedRow(null);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
