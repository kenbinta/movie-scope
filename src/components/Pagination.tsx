import React from "react";

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, maxPage, onPageChange }) => {
  const renderDots = () => {
    const key = Math.random().toString(36).substring(7);
    return (
      <span key={key} className="dark:text-primary-400 text-primary-700 mx-1">
        ...
      </span>
    );
  };

  const renderPageButton = (page: number) => {
    return (
      <button
        key={page}
        className={`relative block rounded  py-1.5 px-3 text-sm  ${
          currentPage === page
            ? " bg-primary-400 hover:bg-primary-500 dark:bg-primary-700"
            : " text-primary-700  hover:bg-primary-500 dark:text-primary-200 dark:hover:bg-primary-600 dark:hover:text-primary-400"
        }`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    );
  };

  const renderPageButtons = () => {
    const buttons = [];

    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(4, maxPage); i++) {
        buttons.push(renderPageButton(i));
      }
      if (maxPage > 4) {
        buttons.push(renderDots());
        buttons.push(renderPageButton(maxPage));
      }
    } else if (currentPage >= maxPage - 2) {
      buttons.push(renderPageButton(1));
      if (maxPage > 4) {
        buttons.push(renderDots());
      }
      for (let i = maxPage - 3; i <= maxPage; i++) {
        buttons.push(renderPageButton(i));
      }
    } else {
      buttons.push(renderPageButton(1));
      buttons.push(renderDots());
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        buttons.push(renderPageButton(i));
      }
      buttons.push(renderDots());
      buttons.push(renderPageButton(maxPage));
    }

    return buttons;
  };

  return (
    <div className="flex justify-center ">
      <nav className="flex">
        <button
          className={`${
            currentPage === 1 ? `hidden` : "block"
          } relative  rounded bg-transparent py-1.5 px-3 text-sm text-primary-700 transition-all duration-300 hover:bg-primary-500 dark:text-primary-200 dark:hover:bg-primary-600 dark:hover:text-primary-400`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <ul className="list-style-none flex">{renderPageButtons()}</ul>
        <button
          className={`${
            currentPage === maxPage ? `hidden` : `block`
          } relative  rounded bg-transparent py-1.5 px-3 text-sm text-primary-700 transition-all duration-300 hover:bg-primary-500 dark:text-primary-200 dark:hover:bg-primary-600 dark:hover:text-primary-400`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === maxPage}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
