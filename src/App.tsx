import './style.css';

function App() {
	const speak = () => {
		const text = new SpeechSynthesisUtterance('Максим го в моблу');

		speechSynthesis.speak(text);
		setTimeout(speak, 1);
	};

	return (
		<div className='app'>
			<button onClick={speak}>
				Click me plese senpai
				<p></p>
			</button>
		</div>
	);
}

export default App;
