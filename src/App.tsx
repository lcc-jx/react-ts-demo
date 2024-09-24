import React from 'react'

// 语义：
function App() {
  const questionList = [
    { id: 'q1', title: '问卷1', isPublished: true },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: true },
    { id: 'q4', title: '问卷4', isPublished: false },
  ]
  function editQuestion(id: string) {
    console.log(id)
  }
  return (
    <div className="App">
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <div key={id}>
              <strong>{title}</strong>
              &nbsp;
              {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
              &nbsp;
              <button
                onClick={() => {
                  editQuestion(id)
                }}
              >
                编辑问卷
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
