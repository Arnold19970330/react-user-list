import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
}) => {
  const getVisiblePages = (): number[] => {
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(currentPage - half, 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisible + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-zinc-800 text-green-300 disabled:opacity-30"
      >
        &larr;
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page
              ? "bg-green-600 text-white"
              : "bg-zinc-800 text-green-300 hover:bg-zinc-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-zinc-800 text-green-300 disabled:opacity-30"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
