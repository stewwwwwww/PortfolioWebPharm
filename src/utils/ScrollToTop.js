import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    // Access the history object through the window to avoid ESLint warnings
    const { history } = window;

    if ('scrollRestoration' in history) {
      const originalScrollRestoration = history.scrollRestoration;
      history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);

      return () => {
        history.scrollRestoration = originalScrollRestoration;
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

export default ScrollToTop;