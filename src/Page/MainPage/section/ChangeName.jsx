import React from 'react';
import { Button } from '../../../Components/Button';
import { Row } from '../../../Components/Row';
import FormInput from '../../../Components/FormInput/FormInput';
import { Form } from '../../../Components/Form';

const ChangeName = ({ handler, title, handleSubmit, cancleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Row className='al_ct jc_sb'>
        <FormInput
          type='text'
          value={title}
          handleChange={handler}
          name='title'
          id='themeName'
          setThemeName
          required
          autoFocus
        />
        <>
          <Button secondary type='submit'>
            저장
          </Button>
          <Button tertiary onClick={cancleSubmit}>
            취소
          </Button>
        </>
      </Row>
    </Form>
  );
};

export default ChangeName;
