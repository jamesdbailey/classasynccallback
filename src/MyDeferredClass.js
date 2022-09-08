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
			this.cb();
		}
	}
}

export default MyDeferredClass;
