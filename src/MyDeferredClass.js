class MyDeferredClass {
	constructor() {
		this.cb = null;
		this.timer = null;
		this.anotherTimer = null;
	}

	StartDeferred() {
		console.log("Start Deferred");

		this.timer = setTimeout(() => {
			this.Deferred();
		}, 3000);
	}

	Deferred() {
		console.log("Deferred timeout");
		this.timer = null;
		if (this.cb) {
			const cb = this.cb;
			this.cb = null;
			cb();
		}
	}

	StartAnotherDeferred() {
		console.log("Start Another Deferred");

		this.anotherTimer = setTimeout(() => {
			this.Deferred();
		}, 1000);
	}

	AnotherDeferred() {
		console.log("Another deferred timeout")
		this.anotherTimer = null;
		if (this.cb) {
			const cb = this.cb;
			this.cb = null;
			cb();
		}
	}
}

export default MyDeferredClass;
