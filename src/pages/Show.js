import { useState } from "react"
import { Link } from "react-router-dom"

function Show(props){
  // grab the id params from match
  const id = props.match.params.id;
  // save cheeses standalone variable
  const cheeses = props.cheeses;
  // find the person to show
  const cheese = cheeses.find((singleCheese) => {
    return singleCheese._id === id;
  });

  // state for our form
  const [editForm, setEditForm] = useState(cheese);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // const newState = {...editForm}
  // newState[event.target.name] = event.target.value
  // setEditForm(newState)
  
  // handleSubmit function for form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateCheeses(editForm, cheese._id)
    // redirect cheeses back to index
    props.history.push("/")
  }

  const removeCheese = () => {
    props.deleteCheeses(cheese._id)
    props.history.push("/")
  }

  return (
    <div className="cheese">
      <h1>{cheese.name}</h1>
      <h2>{cheese.countryOfOrigin}</h2>
      <img src={cheese.image} alt={cheese.name} />
      <button onClick={removeCheese} id="delete">
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.countryOfOrigin}
        name="countryOfOrigin"
        placeholder="countryOfOrigin"
        onChange={handleChange}
        />
        <input type="submit" value="update cheese"/>
      </form>
    </div>
  )
}  


export default Show;