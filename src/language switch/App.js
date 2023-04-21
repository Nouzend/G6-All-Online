import React from "react";
import PropTypes from "prop-types";

import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from "react-switch-lang";
import en from "en.json";
import th from "th.json";


setTranslations({ en, th });
setDefaultLanguage("en");

setLanguageCookie();

class SomeComponent extends React.Component {
  handleSetLanguage = (key) => () => {
    setLanguage(key);
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <button type="button" onClick={this.handleSetLanguage("th")}>
          Switch language
        </button>
      </div>
    );
  }
}

SomeComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(SomeComponent);