import PropTypes from "prop-types";

const Theme = (
  backgroundThemePrimary,
  contentThemePrimary,
  backgroundThemeSecondary,
  contentThemeSecondary
) => {
  const primaryTheme = () => {
    const backgroundPrimary = "#fafafa";
    const contentPrimary = "black";

    const backgroundSecondary = "#7dc8dd";
    const contentSecondary = "white";

    return {
      backgroundPrimary,
      contentPrimary,
      backgroundSecondary,
      contentSecondary,
    };
  };

  const backgroundPrimary =
    backgroundThemePrimary && contentThemePrimary
      ? backgroundThemePrimary
      : primaryTheme().backgroundPrimary;

  const contentPrimary =
    contentThemePrimary && backgroundPrimary
      ? contentThemePrimary
      : primaryTheme().contentPrimary;

  const backgroundSecondary =
    backgroundThemeSecondary && contentThemeSecondary
      ? backgroundThemePrimary
      : primaryTheme().backgroundSecondary;

  const contentSecondary =
    contentThemeSecondary && backgroundThemeSecondary
      ? contentThemeSecondary
      : primaryTheme().contentSecondary;

  return {
    backgroundPrimary,
    contentPrimary,
    backgroundSecondary,
    contentSecondary,
  };
};

Theme.propTypes = {
  contentTheme: PropTypes.string,
  backgroundThemePrimary: PropTypes.string,
  contentThemePrimary: PropTypes.string,
  backgroundThemeSecondary: PropTypes.string,
  contentThemeSecondary: PropTypes.string,
};

export default Theme;
