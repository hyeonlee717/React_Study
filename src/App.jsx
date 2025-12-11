import { useState } from 'react';
import './App.css'

// jsx는 javascript안에서 html을 쉽게 작성할 수 있게 도와주는 언어임
function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  // a: state에 보관했던 자료, b:state 변경 도와주는 함수
  // html에 바로바로 변경사항이 반영되게 하고 싶은 곳에 사용함, 자주 변경되는 곳
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className='App'>

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        글제목.map(function (a, i) {
          let [따봉, 따봉변경] = useState(0);
          return (
            <div className='list' key={i}>
              <h4 onClick={function () {
                setModal(!modal);
                setTitle(i);
              }}>{글제목[i]}
                <span onClick={function () {
                  따봉변경(따봉 + 1)
                }}>👍</span> {따봉} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal title={title} 글제목={글제목}></Modal> : null
      }
      {/* 3항 연산자 : 조건문 ? true일때 실행할 코드 : false일때 실행할 코드 */}

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App
