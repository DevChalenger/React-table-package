import PropTypes from "prop-types";

const Theme = (backgroundTheme, contentTheme) => {
  const primary = () => {
    const background = "#7dc8dd";
    const content = "#fafafa";
    return { background, content };
  };

  const backgroundContent = backgroundTheme
    ? backgroundTheme
    : primary().background;

  const textContent = contentTheme ? contentTheme : primary().content;

  return { backgroundContent, textContent };
};

Theme.propTypes = {
  backgroundTheme: PropTypes.string,
  contentTheme: PropTypes.string,
};

export default Theme;
