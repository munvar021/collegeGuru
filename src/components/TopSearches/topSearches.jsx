import React from 'react';
import { Search, X } from 'lucide-react';
import {popularSearches }from "./data"
import {
  SearchSection,
  SearchHeader,
  SearchBubbles,
  SearchBubble,
  ClearButton
} from './styledComponents';

const TopSearches = ({ onSearchSelect, selectedSearch }) => {
  const handleBubbleClick = (search) => {
    if (selectedSearch === search) {
      onSearchSelect('');
    } else {
      onSearchSelect(search);
    }
  };

  return (
    <SearchSection>
      <SearchHeader>
        <div className="header-content">
          <Search size={20} />
          <h2>Popular Searches</h2>
        </div>
        {selectedSearch && (
          <ClearButton onClick={() => onSearchSelect('')}>
            <X size={16} />
            Clear Search
          </ClearButton>
        )}
      </SearchHeader>

      <SearchBubbles>
        {popularSearches.map((search) => (
          <SearchBubble
            key={search}
            onClick={() => handleBubbleClick(search)}
            className={selectedSearch === search ? 'active' : ''}
          >
            {search}
          </SearchBubble>
        ))}
      </SearchBubbles>
    </SearchSection>
  );
};

export default TopSearches;