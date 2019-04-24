import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import Cart from './components/Cart';
import Shop from './components/Shop';
import GlobalState from './context/GlobalState';

const App = () => {
    return (
		<BrowserRouter>
			<GlobalState>
				<div className="App">
					<Link to='/'>Shop</Link>
					<Link to="/cart">Cart</Link>
					<Switch>
						<Route exact path ="/cart" component={Cart}/>
						<Route path ="/" component={Shop}/>
					</Switch>
				</div>
			</GlobalState>
		</BrowserRouter>
    );
}

export default App;
