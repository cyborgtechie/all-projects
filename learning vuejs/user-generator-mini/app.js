const app = Vue.createApp({
	data() {
		return {
			firstName: 'Alex',
			lastName: 'Thronberry',
			email: 'athorn@gmail.com',
			gender: 'male',
			picture: 'https://randomuser.me/api/portraits/men/11.jpg',
		};
	},
	methods: {
		//call api to fetch random user
		async getUser() {
			const res = await fetch('https://randomuser.me/api/');
			const { results } = await res.json();

			this.firstName = results[0].name.first;
			this.lastName = results[0].name.last;
			this.email = results[0].email;
			this.gender = results[0].gender;
			this.picture = results[0].picture.large;
		},
	},
});

// this will mount our data into the #app div in our html
app.mount('#app');
