//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import React, {useState, useEffect} from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AddPersonForm(props){
  const [person, setPerson] = useState("")

  function handleChange(e){
    setPerson(e.target.value);
  }

  function handleSubmit(e){
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }

  function handleAdd(e){
    const arr =  props.data;
    const val = e.target.value;
    const ListItems = arr.append((val, index) =>
    <li key={index}>{val}</li>);
    return <ul>{ListItems}</ul>;
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>Contact Manager</h1>
      <input type="text" id="NewTache" placeholder="Add new contact" onChange={handleChange} value={person}/>
      <button type="submit" onClick={handleAdd}>Ajouter</button>
    </form>);
}

function PeopleList(props){
  const arr =  props.data;
  const ListItems = arr.map((val, index) =>
    <li key={index}>{val}</li>);
    return <ul>{ListItems}</ul>;
}

function ContactManager(props){
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name){
    setContacts([...contacts, name]);
  }

  return(
    <div>
      <AddPersonForm handleSubmit={addPerson}/>
      <PeopleList data={contacts} />
    </div>);
}

const contacts = ["Faire la lessive", "Manger le riz", "Aller au marché"];
const el = (
  <div>
    <AddPersonForm />
    <PeopleList data={contacts} />
  </div>);

ReactDOM.render(
  el,
  document.getElementById('root')
)

reportWebVitals();
