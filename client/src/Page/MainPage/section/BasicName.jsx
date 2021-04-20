import React from 'react';
import { BiPencil } from 'react-icons/bi';

import { Button } from '../../../Components/Button';
import { Row } from '../../../Components/Row';

const BasicName = ({ themeTitle, setWillChangeName }) => {
  return (
    <Row className='al_ct jc_sb'>
      <h1>{themeTitle}</h1>
      <Button
        title='제목 변경'
        onClick={() => {
          setWillChangeName(true);
        }}
      >
        <BiPencil />
      </Button>
    </Row>
  );
};

export default BasicName;
