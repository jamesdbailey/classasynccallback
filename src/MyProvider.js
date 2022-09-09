import React from 'react';

const MyProvider = (props) => {
	let myPromiseResolve;
	let promiseOutcome = true;

	const myCB = () => {
		console.log("myCB called");
		myPromiseResolve(promiseOutcome);
	}

	const resultPromise = () => {
		 return new Promise((resolve, error) => {
			myPromiseResolve = (val) => {
				if (val) {
					resolve("resolve");
				} else {
					error("oops");
				}
			}

			console.log("new promise");
			props.myClass.StartDeferred();
		});
	}

	const anotherResultPromise = () => {
		 return new Promise((resolve, error) => {
			myPromiseResolve = (val) => {
				if (val) {
					resolve("resolve");
				} else {
					error("oops");
				}
			}

			console.log("another new promise");
			props.myClass.StartAnotherDeferred();
		});
	}

	const asyncCall = async () => {
		console.log(props.myClass);
		props.myClass.cb = myCB;

		const myPromise = resultPromise();
		const res = await myPromise.catch((e) => {
			console.log(e);
			return e;
		});

		console.log(`returned from await with ${res}`);
	}

	const anotherAsyncCall = async () => {
		console.log(props.myClass);
		props.myClass.cb = myCB;

		const myPromise = anotherResultPromise();
		const res = await myPromise.catch((e) => {
			console.log(e);
			return e;
		});

		console.log(`returned from another await with ${res}`);
	}

	React.useEffect(() => {
		promiseOutcome = false;
		asyncCall();
	});

	function click(val) {
		promiseOutcome = true;
		asyncCall().then(anotherAsyncCall);
	}

	return (
		<div>
			<button onClick={click}>Button</button>
		</div>
	)
}

export default MyProvider;
