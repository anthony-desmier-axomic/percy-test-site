import React, { Component } from 'react';
import { Link, Route,Switch } from 'react-router-dom';


class App extends Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul> 
       </nav>
      
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/category" component={Category}/> 
    </Switch>
    
    </div>
    );
  }
}


/*Home component */
const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
)

/*Product component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

/*Category component*/
const Category = () => (
  <div>
    <h2>Category</h2>
    <div>This is the category page!!</div>
    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, debitis. Natus perferendis error veritatis explicabo ex aperiam, adipisci itaque facilis nisi accusamus, aliquam cum est? Quo dolorem ullam animi ipsum?</h6>
  </div>
)



export default App;
    