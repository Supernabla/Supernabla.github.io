import React from "react";
import { scroller, animateScroll } from "react-scroll";

const useSmoothScrollTo = (anchorOrPosition: string | number, options = {}) => {
  const opts = { smooth: "easeInOutQuart", ...options };

  const handleScrollTo = React.useCallback(() => {
    if (typeof anchorOrPosition === "string") {
      scroller.scrollTo(anchorOrPosition, opts);
    } /* number */ else {
      animateScroll.scrollTo(anchorOrPosition, opts);
    }
  }, [anchorOrPosition, opts]);

  return handleScrollTo;
};

export default useSmoothScrollTo;
