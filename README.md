# 목적

디자인 theme을 색상을 위주로 하여 정의할 수 있다.

# 기획

## 사용 스택

- React.js
- mobx
- styled-components

## 주요 기능

- 색상 추가, 수정
- 색상끼리 blend 기능
- 카드, 버튼 디자인 기능(정해진 옵션 내에서)
- 설정한 옵션들을 저장, 가져오기 가능.
- 순서 변경 가능

## 문제 해결 경험

## 주요 코드

### mobx를 이용한 상태관리

설정한 옵션들을 로컬스토리지에 저장하고, 가져올 수 있다.

```js
  saveList() {
    const baseColorList = this.baseColorList.map((item) => ({
      hexId: item.hexId,
      label: item.label,
      role: item.role,
    }));
    localStorage.setItem('baseColorList', JSON.stringify(baseColorList));
  }

  loadList() {
    const list = localStorage.getItem('baseColorList');
    const dataList = JSON.parse(list);
    if (!dataList) return;

    this.clearList();
    for (let i = 0; i < dataList.length; i++) {
      const { role, label, hexId } = dataList[i];
      this.addNewBaseColor(hexId, label, role);
    }
  }
```

[전체 코드](https://github.com/mochapoke/design-system/blob/main/src/Store/BaseColorStore.jsx)

### landing page에서 파란색 그라데이션이 sticky한 코드

```js
const Section3 = ({ history }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [visibility, setvisibility] = useState(true);

  const onSticky = () => {
    let offset = window.scrollY;
    let height = window.innerHeight;
    if (offset < height * 2) setIsSticky(false);
    if (offset >= height * 2) setIsSticky(true);
    if (offset > height * 3) setIsSticky(false);
    if (offset > height * 2.7) setvisibility(false);
    if (offset <= height * 2.7) setvisibility(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', onSticky);
    return () => {
      window.removeEventListener('scroll', onSticky);
    };
  }, []);

  return (
    <BasicContainer>
      <TitleContainer
        className={`${isSticky && 'fixed'}`}
        style={{ opacity: visibility ? 1 : 0 }}
      >
        <BlueGradation />
        <MainTitle small>
          <span>더이상 시간을 낭비하지 마세요.</span>
        </MainTitle>
        <SubText subSmall>
          <span>색상을 쉽게 고르고 저장하세요.</span>
          <span>한번 저장해둔 셋팅을 불러와서 다시 사용 할 수 있습니다.</span>
        </SubText>
        <Button primary onClick={() => history.push('/main')}>
          바로 시작하기
        </Button>
      </TitleContainer>
    </BasicContainer>
  );
};
```

스타일드 컴포넌트의 props을 활용하여 재사용 가능성을 높임.

```js
export const TitleContainer = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease;
  overflow: hidden;

  &.fixed {
    position: fixed;
    top: 0;
    z-index: 10;

    @media screen and (min-width: 768px) {
      top: 80px;
    }
  }
`;
```

### Mixin의 옵션을 선택할 때...

자료구조 stack을 참고하여 작성함.
mixin options은 처음, 중간, 마지막만 옵션창을 열 수 있다.
따라서 index 1,3은 못열게 하였다.
그리고 indexLog라는 stack을 만들어서, 동일한 index의 small mixin을 선택했을 때 indexLog와 해당 index를 비교하여 여닫게 하였고, indexLog와 다른 index일때는 해당 index의 option창을 열 수 있게 하였다.

```js
const openOptions = (index) => {
  if (index === 1 || index === 3) return null;
  if (index !== indexLog) {
    setIndexLog(index);
    setIsOptionOpen(true);
  }
  if (index === indexLog) {
    setIndexLog('');
    setIsOptionOpen(false);
  }
};
```

# 문제 해결 경험

## Mixin의 옵션

mixin이 여러개고 그 여러개의 옵션들이 다 펼쳐져있을때, 첫번째 mixin 옵션의 checkbox만 토글 됨.
이유: input(체크박스)의 id, value, name을 static하게 작성하였기때문
mixin이 갖고있는 id를 개개별적으로 unique하게 만들어서 문제를 해결함.

### before

```js
<Check
  type='checkbox'
  value='saveMiddle'
  id='saveMiddle'
  name='test'
  onChange={toggle}
/>
```

### after

```js
<Check
  type='checkbox'
  id={id}
  name={id}
  value={id}
  onChange={toggle}
  checked={`${isChecked ? 'checked' : ''}`}
/>
```

쉽게 놓치는 html tag에 대해 좀더 관심을 갖게 됨

## react의 key에 대한 중요성

key를 색상의 hexId로 주었음.
따라서 동일한 색상으로 list가 될 때,
list 갯수를 초과한 list가 생성됨
(elem이 5개인데 9개의 list가 생성)

### before

```js
{
  item.listOfColors?.map((smallColor, index) => (
    <SmallMixin
      key={smallColor}
      smallColor={smallColor}
      index={index}
      open={openOptions}
    />
  ));
}
```

동일한 색상때문에 일어난 일이기 때문에 index를 추가하여 key를 판별력 있게 만듦.
물런 이건 완벽한 해결책이 아니고, 미봉책일 뿐이지만
해당 리스트의 요소의 순서를 변경할 것이 아니기때문에 간단하게 조취함.

### after

```js
{
  item.listOfColors?.map((smallColor, index) => (
    <SmallMixin
      key={`${smallColor}_${index}`}
      smallColor={smallColor}
      index={index}
      open={openOptions}
    />
  ));
}
```
