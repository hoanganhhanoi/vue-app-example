module.exports = {
	RouterConfig: function(router, components) {
		router.map({
			'*': {
				component: components.Home
			},
			'signin': {
				component: components.SignIn
			},
			'signup': {
				component: components.SignUp
			},
			'weather': {
				component: components.Weather
			},
			'users': {
				component: components.Users
			}
		})
	}
}