class MyDeferredClass {
	constructor() {
		//super();
		this.timeout = 500;
		this.cb = null;
		this.timer = null;
	}

	StartDeferred() {
		console.log("Start Deferred");

		this.timer = setTimeout(() => {
			this.Deferred();
		}, this.timeout);
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

		this.timer = setTimeout(() => {
			this.Deferred();
		}, this.timeout);
	}

	AnotherDeferred() {
		console.log("Another deferred timeout")
		this.timer = null;
		if (this.cb) {
			const cb = this.cb;
			this.cb = null;
			cb();
		}
	}
}

export default MyDeferredClass;
