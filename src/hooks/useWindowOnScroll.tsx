import React from "react";
import { throttle } from "throttle-debounce";

const useWindowOnScroll = (handleWindowScroll: () => void, loadOnceOnMount = true) => {
  const internalHandleScroll = React.useMemo(() => {
    // 166 -> 60HZ
    return handleWindowScroll ? throttle(166, handleWindowScroll) : handleWindowScroll;
  }, [handleWindowScroll]);

  React.useEffect(() => {
    if (internalHandleScroll === null) {
      return undefined;
    }

    window.addEventListener("scroll", internalHandleScroll);
    return () => {
      window.removeEventListener("scroll", internalHandleScroll);
      internalHandleScroll.cancel();
    };
  }, [internalHandleScroll]);

  React.useEffect(() => {
    if (loadOnceOnMount) {
      handleWindowScroll();
    }
  }, []);
};

export default useWindowOnScroll;
