<template>
    <v-app id="app">
        <v-container class="pa-6 pa-12">
            <v-row id="nav" class="ma-0 mb-12">
                <div class="nav-home">
                    <router-link
                        to="/"
                        class="font-weight-bold d-inline-block mr-sm-10 mb-4 mb-sm-0"
                    >Duygu Keskek</router-link>
                </div>
                <router-link to="/" class="mr-5">Home</router-link>
                <router-link to="/about" class="mr-5">About</router-link>
                <router-link to="/thoughts" class="mr-5">Thoughts</router-link>
                <router-link to="/resume" class="mr-5">Resume</router-link>
                <router-link to="/contact">Contact</router-link>
            </v-row>
            <div id="content">
                <router-view />
            </div>
            <v-footer id="footer">
				<div class="motto">
					Made with<i class="far fa-heart mx-2"></i>and<i class="fab fa-vuejs ml-2"></i>
				</div>
				<v-spacer></v-spacer>
				<div class="icon-block">
					<v-btn v-for="icon in icons" :key="icon.name" :href="icon.link" class="icon-right mr-1" target="_blank" icon>
						<v-icon size="20px">{{ icon.name }}</v-icon>
					</v-btn>
				</div>
            </v-footer>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data () {
		return {
			icons: [
                {
                    name: "fab fa-facebook-square",
                    link: "https://www.facebook.com/duygu.keskek.9"
                },
                {
                    name: "fab fa-twitter-square",
                    link: "https://twitter.com/_NimrodeL_"
                },
                {
                    name: "fab fa-linkedin",
                    link: "https://www.linkedin.com/in/duygukeskek/"
                },
                {
                    name: "fab fa-github-square",
                    link: "https://www.facebook.com/duygu.keskek.9"
                },
                {
                    name: "fab fa-medium",
                    link: "https://medium.com/@duygukeskek"
                }
			]
		}
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:400,500,700&display=swap");
#app {
    font-family: "Raleway", Helvetica, Arial, sans-serif;
    height: 100%;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.5;
    color: #000;

    ::selection {
        background-color: #0ff;
        color: #000;
    }

    h1, h2, h3, p, ul {
        margin-bottom: 32px;
    }
}

p {
    color: #444;
}

a {
    background-repeat: no-repeat;
    background-size: 100% 1px;
    background-position: center bottom;
    text-decoration: none;
}

h1 {
    font-size: 21px;
}

#content {
    a.hover-black {
        color: #000;
        font-weight: 600;
        background-image: linear-gradient(to right, #000, #000);
        display: inline-block;

        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
}

#nav {
    margin-bottom: 4em;

    a {
        color: #000;

        &:not(.nav-home) {
            &:not(:first-child) {
                &.router-link-exact-active {
                    background-image: linear-gradient(
                        to right,
                        #ee65de,
                        #26cbff
                    );
                }
            }
        }

        &:hover {
            background-image: linear-gradient(to right, #000, #000);
        }
    }

    .nav-home {
        @media only screen and (max-width: 600px) {
            width: 100%;
        }
    }
}

#footer {
	padding: 1em 0;
	background-color: #fff;
	background-image: linear-gradient(to right,#ee65de,#26cbff);
	background-size: 100% 1px;

	.motto {
		font-size: 14px;
	}

	.icon-right {
		color: #000;
		right: -13px;

		&:hover {
			border: 1px solid #000;
			background-color: transparent;
			background-size: 50%;
			transition: all 150ms ease-in-out;

			&:before {
				opacity: 0;
			}
		}
	}
}
</style>