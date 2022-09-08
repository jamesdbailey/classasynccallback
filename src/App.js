import './App.css';
import MyDeferredClass from './MyDeferredClass';
import MyProvider from './MyProvider';

const App = () => {
	const myClass = new MyDeferredClass();

	return (
		<MyProvider myClass={myClass}>
		</MyProvider>
	);
}

export default App;
