import { Search, X } from "lucide-react";
import { popularSearches } from "./data";
import {
  SearchSection,
  SearchHeader,
  SearchBubbles,
  SearchBubble,
  ClearButton,
  HeaderContent,
  HeaderTitle,
} from "./styledComponents";

const TopSearches = ({ onSearchSelect, selectedSearch }) => {
  const handleBubbleClick = (search) => {
    onSearchSelect(selectedSearch === search ? "" : search);
  };

  return (
    <SearchSection>
      <SearchHeader>
        <HeaderContent>
          <Search size={20} />
          <HeaderTitle>Popular Searches</HeaderTitle>
        </HeaderContent>
        {selectedSearch && (
          <ClearButton onClick={() => onSearchSelect("")}>
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
            $active={selectedSearch === search}
          >
            {search}
          </SearchBubble>
        ))}
      </SearchBubbles>
    </SearchSection>
  );
};

export default TopSearches;
