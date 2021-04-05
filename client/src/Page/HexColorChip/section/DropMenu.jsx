import React from 'react';
import { Button } from '../../../Components/Button';

const MENU = ['수정', '메인컬러추가', '삭제'];
const MAIN_COLOR = [
  'Background',
  'Ink',
  'Action',
  'Negative',
  'Positive',
  'Primary',
  'Secondary',
  'Warning',
];

const DropMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Button>수정</Button>
        </li>
      </ul>
      <Button></Button>
      <Button>삭제</Button>
    </div>
  );
};

export default DropMenu;
