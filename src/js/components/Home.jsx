import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

//create your first component
const Home = () => {
	const [input, setInput] = useState("");

	const handleClick = (value) => {
		setInput(input + value);
	};

	const clearInput = () => {
		setInput("");
	};

	const calculateResult = () => {
		try {
			setInput(eval(input).toString());
		} catch (error) {
			setInput("Error");
		}
	};

	return (
		<div className="container mt-5">
			<div className="calculator mx-auto bg-dark p-4 rounded">
				<Display value={input} />

				<div className="row g-2 mt-3">
					<Button value="7" onClick={handleClick} />
					<Button value="8" onClick={handleClick} />
					<Button value="9" onClick={handleClick} />
					<Button value="/" onClick={handleClick} />

					<Button value="4" onClick={handleClick} />
					<Button value="5" onClick={handleClick} />
					<Button value="6" onClick={handleClick} />
					<Button value="*" onClick={handleClick} />

					<Button value="1" onClick={handleClick} />
					<Button value="2" onClick={handleClick} />
					<Button value="3" onClick={handleClick} />
					<Button value="-" onClick={handleClick} />

					<Button value="0" onClick={handleClick} />
					<Button value="." onClick={handleClick} />
					<Button value="+" onClick={handleClick} />

					<div className="col-6">
						<button className="btn btn-danger w-100" onClick={clearInput}>
							C
						</button>
					</div>
					<div className="col-6">
						<button className="btn btn-success w-100" onClick={calculateResult}>
							=
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;