import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';

let taches = [{task: "Analyser le marché", Status: "Fait"},
                {task: "Exposer le projet", Status: "En cour"},
                  {task: "Avoir l'idée", Status: "Fait"},
                  {task: "Valider le projet", Status: "En cour"},
                  {task: "Collecter les données", Status: "En cour"},
                  {task: "Faire des tests", Status: "En cour"},
                  {task: "Définir le html", Status: "Pas fait"},
                  {task: "Receuillir les avis", Status: "Pas fait"},
                  {task: "Remplir le CSS", Status: "Pas fait"},
                  {task: "Travailler le projet", Status: "Pas fait"}
];

function TacheRow({tache}){
  return <tr>
      <td>{tache.task}</td>
      <td>{tache.Status}</td>
  </tr>
}

function TacheTable (){

  const rows = []

  taches.forEach(tache => {
    rows.push(<TacheRow key={tache.task} tache={tache} />)
  })

  return <table className="table mt-4">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Etat de la tache</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
}

class AddTask extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        userInput: '',
        userStatus: 'Etat de la tâche à effectuer',
        rows: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
      this.setState({
        userInput: e.target.value
      })
    }

    handleClick(e){
      e.preventDefault()
      this.setState({
        userInput: '',
        userStatus: ''
      })
    }

    render(){
    return <div>
      {/*Permet d'ajouter une tache*/}
      <div className="form-group mt-4 mb-0">
        <input type="text" value={this.state.userInput} className="form-control" placeholder="Tâche à ajouter" onChange={this.handleChange}/>
      </div>
      <div>
        <select className="form-select">
          <option>{this.state.userStatus}</option>
          <option>Fait</option>
          <option>Pas Fait</option>
          <option>En cour</option>
        </select>
      </div>
      <button onClick={this.handleClick} className="btn btn-primary mx-5 my-3">Ajouter une tâche</button>

      {/*Partie pour supprimer*/}
      <div className="form-group mt-4 mb-0">
        <input type="text" className="form-control" placeholder="Rechercher la tâche à supprimer..."/>
      </div>
      <button className="btn btn-primary mx-5 my-3">Supprimer une tâche</button>
    </div>}
}

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-md-8">
      <h1 className="titre_principal">TODO LIST</h1>
      <TacheTable />
      </div>

      <div className="col-md-4 mt-5">
        <AddTask />
      </div>
    </div>
  </div>, 
  document.getElementById('root')
)
