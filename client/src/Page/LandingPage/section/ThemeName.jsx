import React, { useState, useEffect, useCallback } from 'react';
import FormInput from '../../../Components/FormInput/FormInput';
import { HeadingRow } from '../../../Components/Row';
import useInput from '../../../Hook/useInput';
import { Wrapper } from '../../../Components/Wrapper';
import { Button } from '../../../Components/Button';
import { Row } from '../../../Components/Row';

const ThemeName = () => {
  const [willChangeName, setWillChangeName] = useState(false);
  const [themeTitle, setThemeTitle] = useState('');
  const [input, handler] = useInput({ title: '' });
  const { title } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    setThemeTitle(title);
    setWillChangeName(false);
  };

  const cancleSubmit = () => {
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

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <Wrapper first>
      <HeadingRow first onDoubleClick={() => setWillChangeName(true)}>
        {!willChangeName && (
          <Row className='al_ct jc_sb'>
            <h1>{themeTitle ? themeTitle : '사용자 테마 이름'}</h1>
            <Button
              onClick={() => {
                setWillChangeName(true);
              }}
            >
              수정
            </Button>
          </Row>
        )}
        {willChangeName && (
          <form onSubmit={handleSubmit}>
            <Row className='al_ct jc_sb'>
              <FormInput
                type='text'
                value={title}
                handleChange={handler}
                name='title'
                id='themeName'
                setThemeName
              />
              <Button secondary type='submit'>
                저장
              </Button>
              <Button tertiary onClick={cancleSubmit}>
                취소
              </Button>
            </Row>
          </form>
        )}
      </HeadingRow>
    </Wrapper>
  );
};

export default ThemeName;
