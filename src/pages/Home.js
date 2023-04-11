import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import ShowGrid from '../components/show/ShowGrid';
import MainPageLayout from '../components/MainPageLayout';

import { apiGet } from '../misc/config';

function Home() {
  const [input, setInput] = useState('');
  const [results, setResult] = useState(null);

  const [searchOption, setSearchOption] = useState('shows');
  const Search = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResult(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  const onRadioChecked = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Enter"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            type="radio"
            id="shows-search"
            value="shows"
            checked={Search}
            onChange={onRadioChecked}
          />
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            type="radio"
            id="actors-search"
            value="people"
            checked={!Search}
            onChange={onRadioChecked}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>

      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
