import React from 'react'
import { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from './store/actions';
import { v4 as uuid } from 'uuid';

function AddQuestion() {

  const dispatch = useDispatch();
  const [question, setQuestion] = useState('')
  const questions = useSelector(store => store.questions);
  const loading = useSelector(store => store.questionLoading);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  }

  const handleAddQuestion = () => {
    dispatch(addQuestion(question));
    setQuestion('')
  }

  return (
    <div>
      <input type='text' value={question} onChange={handleQuestionChange} />
      <button onClick={handleAddQuestion}>Add Question</button>
      {questions.map(q => (<div key={q}>{q}</div>))}
    </div>
  )
}

export default AddQuestion