<template>
<div class="projects-list">
    <div class="projects" v-for="project in projects" v-bind:key="project.id">
        <a v-bind:href="project.url" target="_blank">
            <img class="project-image mb-5" v-bind:src="project.projectImg"/>
        </a>
        <h2>
            <a class="no-underline hover-black" v-bind:href="project.url" target="_blank">{{ project.title }}</a>
        </h2>
        <p>{{ project.description }}</p>
        <small class="project-link d-flex flex-row justify-start mb-2" v-for="projectLink in project.projectLinks" v-bind:key="projectLink.id">
            <img v-bind:src="projectLink.favicon"/>
            <a class="ml-2 hover-black" v-bind:href="projectLink.link" target="_blank">{{ projectLink.label }}</a>
        </small>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    projectImg: require("./../assets/sunpy.png"),
                    url: "https://sunpy.org/",
                    title: "SunPy",
                    description: "Sphinx based, open source static website for SunPy solar data analysis environment for Python.",
                    projectLinks: [
                        {
                            favicon: require("./../assets/sunpy_icon.svg"),
                            link: "https://sunpy.org/",
                            label: "sunpy.org"
                        },
                        {
                            favicon: require("./../assets/github_icon.svg"),
                            link: "https://github.com/sunpy/sunpy-sphinx-theme",
                            label: "GitHub"
                        }
                    ]
                },
                {
                    id: 2,
                    projectImg: require("./../assets/radius.png"),
                    url: "https://radiusanesthesia.com/",
                    title: "Radius Anesthesia",
                    description: "Redesign and development of Radius Anesthesia WordPress company website.",
                    projectLinks: [
                        {
                            favicon: require("./../assets/radius_icon.svg"),
                            link: "http://radiusanesthesia.com/",
                            label: "radiusanesthesia.com"
                        }
                    ]
                },
                {
                    id: 3,
                    projectImg: require("./../assets/yoloo.png"),
                    url: "https://play.google.com/store/apps/details?id=com.yoloo.android",
                    title: "Yoloo",
                    description: "Ask travelers, get answers! A mobile app startup where all travelers share their experience and plan their trip together.",
                    projectLinks: [
                        {
                            favicon: require("./../assets/yoloo_icon.svg"),
                            link: "https://play.google.com/store/apps/details?id=com.yoloo.android",
                            label: "play.google.com"
                        },
                        {
                            favicon: require("./../assets/github_icon.svg"),
                            link: "https://github.com/DuyguKeskek/Yoloo",
                            label: "GitHub"
                        }
                    ]
                },
                {
                    id: 4,
                    projectImg: require("./../assets/npm.png"),
                    url: "https://www.npmjs.com/package/vue-graphql-auth",
                    title: "vue-graphql-auth",
                    description: "Token based email & password authentication template using GraphQL & Apollo Client for VueJS applications.",
                    projectLinks: [
                        {
                            favicon: require("./../assets/npm_icon.svg"),
                            link: "https://www.npmjs.com/package/vue-graphql-auth",
                            label: "npmjs.com/package/vue-graphql-auth"
                        },
                        {
                            favicon: require("./../assets/github_icon.svg"),
                            link: "https://github.com/DuyguKeskek/vue-graphql-auth",
                            label: "GitHub"
                        }
                    ]
                }
            ]
        }
    }
};
</script>

<style lang="scss">
.projects-list {
    @media only screen and (min-width: 801px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3em;
    }
}

img {
    max-width: 100%;
}

h2 {
    font-size: 1.24em;
}

#content .no-underline {
    background-image: none;
}

.projects-list {
    .projects {
        margin-bottom: 5em;;
    }
}

.project-link {
    span {
        vertical-align: middle;
    }
}

.project-image {
    border: 1px solid #ddd;
}
</style>