import React from "react";


// Component form tìm kiếm theo name hoặc username
interface Props {
  keyword: string;
  onChangeValue: (value: string) => void;
}

const SearchForm: React.FC<Props> = ({ keyword, onChangeValue }) => {
  return (
    <div className="toolbar">
      <input
        type="search"
        placeholder=" Tìm kiếm theo tên hoặc username..."
        value={keyword}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
};

export default SearchForm;
