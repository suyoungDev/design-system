import { useCallback } from 'react';
import chroma from 'chroma-js';

const useContrast = (hexId) => {
  const getColor = useCallback((hexId) => {
    return hexId && chroma.contrast(hexId, 'white') > 2 ? 'white' : '#212224';
  }, []);

  const getBorderColor = useCallback((hexId) => {
    return hexId && chroma.contrast(hexId, 'white') <= 1.15
      ? chroma(hexId).darken()
      : hexId;
  }, []);

  return { getColor, getBorderColor };
};

export default useContrast;
