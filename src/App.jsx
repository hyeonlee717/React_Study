import './App.css'

// jsx는 javascript안에서 html을 쉽게 작성할 수 있게 도와주는 언어임
function App() {

  let post = '강남 우동 맛집';

  return (
    <div className='App'>
      <div className="black-nav">
        {/* jsx 문법1. class가 아니라 className */}
        <h4 style={{ color: 'red', fontSize: '16px' }}>블로그임</h4>
      </div>
      <h4>{post}</h4>
      {/* jsx 문법2. 데이터바인딩 {중괄호} */}
    </div>
  )
}

export default App
