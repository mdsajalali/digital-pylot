import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  rowsPerPage: number;
  setRowPerPage: (rows: number) => void;
  handlePageChange: (page: number) => void;
}

export default function PaginationControls({
  totalPages,
  currentPage,
  rowsPerPage,
  setRowPerPage,
  handlePageChange,
}: PaginationProps) {
    console.log({ totalPages });
  const renderPageNumbers = () => {
    const pages = [];
    const showPages = 3;
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + showPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 text-sm rounded  ${
            currentPage === i
              ? "text-[#007AFF] font-semibold"
              : "hover:bg-gray-200"
          } `}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <span key="ellipsis" className="px-2">
          ...
        </span>
      );
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 text-sm hover:bg-gray-200 rounded"
        >
          {totalPages}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 border-t">
      <div className="flex items-center text-sm gap-2">
        <span className="text-[#9A9EA5]">Rows per page</span>
        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowPerPage(Number(e.target.value));
            handlePageChange(1);
          }}
          className="cursor-pointer"
        >
          {[5, 10, 20].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">{renderPageNumbers()}</div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-[#9A9EA5]">Go to page</span>
        <input
          type="number"
          min="1"
          max={totalPages}
          value={currentPage}
          onChange={(e) => handlePageChange(Number(e.target.value))}
          className="border rounded w-16 px-2 py-1"
        />
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-1 px-2 py-1 disabled:opacity-50 cursor-pointer"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
