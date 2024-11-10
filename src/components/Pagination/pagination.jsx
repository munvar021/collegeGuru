import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  PaginationContainer,
  PaginationButton,
  PageNumber,
  PageInfo
} from './styledCompnents';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;
    
    for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
      pages.push(i);
    }

    if (pages[0] > 1) {
      if (pages[0] > 2) {
        pages.unshift('...');
      }
      pages.unshift(1);
    }

    if (pages[pages.length - 1] < totalPages) {
      if (pages[pages.length - 1] < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (totalPages <= 1) return null;

  return (
    <PaginationContainer>
      <PaginationButton 
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
        Previous
      </PaginationButton>

      <div className="pages-wrapper">
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <PageNumber className="ellipsis">...</PageNumber>
            ) : (
              <PageNumber
                className={currentPage === page ? 'active' : ''}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PageNumber>
            )}
          </React.Fragment>
        ))}
      </div>

      <PaginationButton 
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight size={20} />
      </PaginationButton>

      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
    </PaginationContainer>
  );
};

export default Pagination;