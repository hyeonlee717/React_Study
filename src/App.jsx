import { useState } from 'react';
import './App.css'

// jsx는 javascript안에서 html을 쉽게 작성할 수 있게 도와주는 언어임
function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [thumb, setThumb] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState('');

  return (
    <div className='App'>

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        글제목.map(function (a, i) {
          return (

            <div className='list' key={i}>

              <h4 onClick={function () {
                setModal(!modal);
                setTitle(i);
              }}>

                {글제목[i]}

                <span onClick={function (e) {
                  e.stopPropagation();
                  let copy = [...thumb]
                  copy[i] = copy[i] + 1
                  setThumb(copy);
                }}>👍</span>

                {thumb[i]}

              </h4>

              <p>2월 17일 발행</p>

              <button onClick={() => {

                let copyTitle = [...글제목];
                copyTitle.splice(i, 1);
                글제목변경(copyTitle);

                let copyThumb = [...thumb];
                copyThumb.splice(i, 1);
                setThumb(copyThumb);

              }}>삭제</button>

            </div>
          )
        })
      }

      <input type="text" onChange={(e) => { setInput(e.target.value); }} />

      <button onClick={() => {

        let copyTitle = [...글제목];
        copyTitle.unshift(input);
        글제목변경(copyTitle);

        let copyThumb = [...thumb];
        copyThumb.unshift(0);
        setThumb(copyThumb);

        setInput('');

      }}>글발행</button>

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
