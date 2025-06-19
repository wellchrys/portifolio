import React from 'react';
import PropTypes from 'prop-types';

const SwitchLanguage = React.memo(({ onClick, headData }) => {
  const flags = {
    pt: '🇧🇷',
    es: '🇪🇸',
  };

  return (
    <div className="switch-language-wrapper">
      {headData.languages.map((lng) => (
        <button key={lng} onClick={() => onClick(lng)} type="button">
          {flags[lng]}
        </button>
      ))}
    </div>
  );
});

SwitchLanguage.propTypes = {
  onClick: PropTypes.func.isRequired,
  headData: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SwitchLanguage;
