import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//fonction pour créer le formulaire où on insère une nouvelle tâche
function AddTaskForm(props){
  const [task, setTask] = useState("");

  function handleChange(e){
    setTask(e.target.value);
  }

  function handleSubmit(e){
    props.handleSubmit(task);
    setTask('');
    e.preventDefault();
  }
  return(
    <div className="container d-flex">
      <form className="form form-group justify-content-center mx-auto" onSubmit={handleSubmit}>
        <input type="text" value={task} placeholder="Ajouter une nouvelle tâche" onChange={handleChange}/>
        <button className="btn btn-primary" type="submit">Ajouter</button>
      </form>
    </div>);
}

//fonction qui insère les valeurs de la liste dans un tableau et les affiche
function TaskList(props){
  const arr = props.data;
  const listItems =  arr.map((val, index) =>
    <tr>
      <td key={index}>{val}</td>
    </tr>);
  return <div>
    <table className="table container table-bordered">
      <th><tr><td>Liste de tâches</td></tr></th>
      {listItems}</table>
  </div>
}

//Fonction parent pour les fonctions précédemment crées
function TaskManager(props){
  const [taches, setTaches] = useState(props.data);

  function addTask(name){
    if (name == ""){
      setTaches([...taches]);
    }else{
      setTaches([...taches, name]);
    }
  }

  return(<div className="container">
      <h1 className="justify-content-center mx-auto">TODO LIST</h1>
      <AddTaskForm handleSubmit={addTask}/>
      <TaskList data={taches} />
    </div>)
}

//Variable qui contient les valeurs initiales de la liste
const taches = ["Faire la vaiselle", "Aller au marché", "Laver les habits", "Préparer le ndolè plantain"];

ReactDOM.render(<TaskManager data={taches}/>, document.getElementById('root'));
