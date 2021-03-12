import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/wellchrys/portifolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork wellchrys/portifolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/wellchrys/portifolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star wellchrys/portifolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
