import React, {useState, useEffect} from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import TeamForm from './components/TeamForm';
import Teammates from './components/Teammates';


const initialTeamList =[
  {
    id:uuid(),
    username: 'Tony',
    email: 'Tony-Tone@ifigureditout.com',
    role: 'Team Lead',
  }
]

const initialFormValues ={
username: '',
email: '',
role: '',
}
const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}
const fakeAxiosPost = (url, { username, email, role }) => {
  const newTeamMate = { id: uuid(), username, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMate })
}

function App() {
  const [teammates, setTeamMates] = useState([]);
  const [formValues, setFormValues]= useState(initialFormValues);
  const updateForm = (inputName, InputValue) =>{
    setFormValues({...formValues, [inputName]: InputValue})
  }
  const submitForm = () =>{
    const teammate={
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.roles,
    }

    if(!teammate.username) return
    fakeAxiosPost('fake.com', teammate)
    .then(res => {
      setTeamMates([res.data, ...teammates])
    })
    .catch(err =>{
      console.log(err);
    })
    .finally(()=>{
      
      setFormValues(initialFormValues)
    })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeamMates(res.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header"><h1>Team-Members App</h1>
      </header>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
        {
        teammates.map(teammate => {
          return (
            <Teammates key={teammate.id} details={teammate} />
          )
        })
      }
    </div>
  );
}

export default App;
