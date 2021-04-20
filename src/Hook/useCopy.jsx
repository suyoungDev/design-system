import { useCallback } from 'react';
import { useAlert } from 'react-alert';

const useCopy = (item) => {
  const alert = useAlert();

  const toasting = useCallback(() => {
    alert.success('복사 완료');
  }, [alert]);

  const save = useCallback(
    (item) => {
      navigator.clipboard.writeText(item);
      toasting('복사 완료');
    },
    [toasting]
  );

  return [save];
};

export default useCopy;
