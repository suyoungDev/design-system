import { useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({ duration: 700, smooth: 'easeOutQuad' });
  }, [pathname]);

  return null;
}

export default withRouter(ScrollToTop);
