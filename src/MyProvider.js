import React from 'react';

const MyProvider = (props) => {
	let myPromiseResolve;

	const myCB = () => {
		console.log("myCB called");
		myPromiseResolve();
	}

	const resultPromise = () => {
		 return new Promise((resolve) => {
			myPromiseResolve = () => {
				resolve("resolve");
			}

			console.log("new promise");
			props.myClass.StartDeferred();
		});
	}

	const asyncCall = async () => {
		console.log(props.myClass);
		props.myClass.cb = myCB;

		const myPromise = resultPromise();
		await myPromise;

		console.log("returned from await");
	}

	React.useEffect(() => {
		asyncCall();
	});
}

export default MyProvider;
