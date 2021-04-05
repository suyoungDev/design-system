import React, { useState } from 'react';
import FormInput from '../../../Components/FormInput/FormInput';
import { HeadingRow } from '../../../Components/Row';
import useInput from '../../../Hook/useInput';
import { Wrapper } from '../../../Components/Wrapper';

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

  return (
    <Wrapper first>
      <HeadingRow first onDoubleClick={() => setWillChangeName(true)}>
        {!willChangeName && (
          <h1>{themeTitle ? themeTitle : '사용자 테마 이름'}</h1>
        )}
        {willChangeName && (
          <form onSubmit={handleSubmit}>
            <FormInput
              type='text'
              value={title}
              handleChange={handler}
              name='title'
              id='themeName'
              setThemeName
              required
            />
          </form>
        )}
      </HeadingRow>
    </Wrapper>
  );
};

export default ThemeName;
