import React, {
  useState,
  useEffect,
  useCallback,
  Suspense,
  useLayoutEffect,
} from 'react';
import useInput from '../../../Hook/useInput';

import { HeadingRow } from '../../../Components/Row';
import { Wrapper } from '../../../Components/Wrapper';
import { themeNameStore } from '../../../Store/ThemeNameStore';
import { observer } from 'mobx-react-lite';
const ChangeName = React.lazy(() => import('./ChangeName'));
const BasicName = React.lazy(() => import('./BasicName'));

const ThemeName = observer(() => {
  const [willChangeName, setWillChangeName] = useState(false);
  const [themeTitle, setThemeTitle] = useState('사용자 테마 제목');
  const [input, handler] = useInput({ title: '' });
  const { title } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    setThemeTitle(title);
    setWillChangeName(false);
    themeNameStore.changeName(title);
  };

  const cancleSubmit = (e) => {
    e.preventDefault();
    setWillChangeName(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && willChangeName) {
        setWillChangeName(false);
      }
    },
    [willChangeName]
  );

  useLayoutEffect(() => {
    themeNameStore.loadName();
    if (themeNameStore.name) {
      setThemeTitle(themeNameStore.name);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <Wrapper first id='title'>
      <HeadingRow first onDoubleClick={() => setWillChangeName(true)}>
        {!willChangeName && (
          <Suspense fallback={<div>...loading</div>}>
            <BasicName
              themeTitle={themeTitle}
              setWillChangeName={setWillChangeName}
            />
          </Suspense>
        )}
        {willChangeName && (
          <Suspense fallback={<div>...loading</div>}>
            <ChangeName
              handler={handler}
              handleSubmit={handleSubmit}
              cancleSubmit={cancleSubmit}
              title={title}
            />
          </Suspense>
        )}
      </HeadingRow>
    </Wrapper>
  );
});

export default ThemeName;
