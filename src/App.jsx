import { useState } from 'react';
import './App.css'

// jsx는 javascript안에서 html을 쉽게 작성할 수 있게 도와주는 언어임
function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  // a: state에 보관했던 자료, b:state 변경 도와주는 함수
  // html에 바로바로 변경사항이 반영되게 하고 싶은 곳에 사용함, 자주 변경되는 곳
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className='App'>

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목].sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className='list'>
        <h4 id='subject'> {글제목[0]} <span onClick={function () {
          따봉변경(따봉 + 1)
        }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={function () {
          setModal(!modal)
        }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modal == true ? <Modal></Modal> : null
      }
      {/* 3항 연산자 : 조건문 ? true일때 실행할 코드 : false일때 실행할 코드 */}

    </div>
  )
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App
