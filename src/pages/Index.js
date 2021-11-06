import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    countryOfOrigin: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

    // handle submit function for form
    const handleSubmit = (event) => {
      event.preventDefault();
      props.createCheese(newForm);
      setNewForm({
        name: "",
        image: "",
        countryOfOrigin: "",
      });
    };

  // loaded function
  const loaded = () => {
    return props.cheese.map((cheese) => (
      <div key={cheese._id} className="cheese">
        <Link to={`/cheese/${cheese._id}`}><h1>{cheese.name}</h1></Link>
        <img src={cheese.image} alt={cheese.name} />
        <h3>{cheese.countryOfOrigin}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="countryOfOrigin"
          onChange={handleChange}
        />
        <input type="submit" value="Create a Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );

}

export default Index;



