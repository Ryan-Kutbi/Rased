import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1> Rased </h1>
				<div class="login">
					<input
						type="button"
						onclick="check(this.form)"
						value="Run analysis"
					/>
				</div>
			</div>
		);
	}
}

export default App;
