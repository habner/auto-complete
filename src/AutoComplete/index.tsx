import React, { useEffect, useState } from 'react';
import './styles.css';

export default function AutoComplete ({suggestions}: {suggestions: string[]}) {
  const [searchValue, setSearchValue] = useState('');
  const [suggestionFilter, setSuggestionFilter] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    filterData(suggestions, searchValue)
    .then(filteredData => setSuggestionFilter(filteredData));
  }, [searchValue]);

  const filterData = (data: string[], filter: string) => {
    return new Promise<string[]>((resolve, reject) => {
      try {
        const filteredData = data.filter(item => item.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        resolve(filteredData);
      } catch {
        reject(new Error('Something went wrong!'))
      }
    });
  }

  const handleBlur = () => { setShowSuggestions(false); }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchValue(value);
    setShowSuggestions(value != '' ? true : false);
  }
  const boldSubstring = (string: string, substring: string) => {
    const splittedString: string[] = string.split(substring);
    return (
      splittedString.map((el: string, index: number) => (
        <>
          {el}
          {index !== splittedString.length - 1 && (<strong>{substring}</strong>)}
        </>
      ))
    );
  }
  const update = (value: string) => {
    setSearchValue(value);
    setShowSuggestions(false)
  }
  
  return (
    <div className='auto-complete'>
      <input className='input' type='text' value={searchValue} onChange={handleChange} onBlur={handleBlur} />
      {showSuggestions && <ul className='list'>
        {suggestionFilter.map((item) => (
          <li className='item' key={item} onMouseDown={(e) => { update(item); }}>
            {boldSubstring(item, searchValue)}
          </li>
        ))}
      </ul>}
    </div>
  );
}