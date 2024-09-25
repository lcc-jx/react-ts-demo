import React, { FC } from 'react'
import './QuestionCard.css'
type PropsType = {
  id: string
  title: string
  isPublished: boolean
}
// FC: functional component
const QuestionCard: FC<PropsType> = props => {
  const { id, title, isPublished } = props
  function editQuestion(id: string) {
    console.log(id)
  }
  return (
    <div key={id} className="list-item">
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
}
export default QuestionCard
