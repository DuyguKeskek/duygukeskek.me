<template>
	<v-app id="app">
		<v-container class="pa-6 pa-lg-12">
			<v-row id="nav" class="ma-0">
				<div class="nav-home">
					<router-link to="/" class="font-weight-bold d-inline-block mr-sm-10 mb-4 mb-sm-0">Duygu Keskek</router-link>
				</div>
				<router-link to="/about" class="mr-5">About</router-link>
				<router-link to="/thoughts" class="mr-5">Thoughts</router-link>
				<router-link to="/resume" class="mr-5">Resume</router-link>
				<router-link to="/contact">Contact</router-link>
			</v-row>
			<router-view/>
		</v-container>
	</v-app>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,700&display=swap');
#app {
	font-family: 'Raleway', Helvetica, Arial, sans-serif;
	height: 100%;
	font-weight: 300;
	font-size: 17px;
	line-height: 1.5;
	color: #444;

	::selection { 
		background-color: #0ff;
		color: #000;
	}
}

a {
	background-repeat: no-repeat;
	background-size: 100% 1px;
	background-position: center bottom;
	text-decoration: none;
}

#nav {
	a {
		color: #000;

		&:not(.nav-home) {
			&:not(:first-child) {
				&.router-link-exact-active {
					background-image: linear-gradient(to right,#ee65de,#26cbff);
				}
			}
		}

		&:hover {
			background-image: linear-gradient(to right,#000,#000);
		}
	}

	.nav-home {
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
}
</style>