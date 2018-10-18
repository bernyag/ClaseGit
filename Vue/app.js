	// You may of course also outsource this script code into a separate file (e.g. app.js) and simply import this file here
new Vue({
	el: '#exercise',
	data: {
		YOUR_NAME: 'Bernardo'
	},
	methods: {
		changeGreeting: function(event) {
			this.greeting = event.target.value;
		}
	}
})
;