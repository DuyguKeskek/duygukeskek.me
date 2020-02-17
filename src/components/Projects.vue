<template>
<div class="projects-list">
    <div class="projects" v-for="project in projects" v-bind:key="project.id">
        <img class="mb-5" v-bind:src="project.projectImg"/>
        <h2>
            <a class="no-underline" v-bind:href="project.url" target="_blank">{{ project.title }}</a>
        </h2>
        <p>{{ project.description }}</p>
        <small class="project-link d-flex flex-row justify-start mb-2" v-for="projectLink in project.projectLinks" v-bind:key="projectLink.id">
            <img v-bind:src="projectLink.favicon"/>
            <a class="ml-2" v-bind:href="projectLink.link" target="_blank">{{ projectLink.label }}</a>
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
                            link: "sunpy.org",
                            label: "sunpy.org"
                        },
                        {
                            favicon: require("./../assets/github_icon.svg"),
                            link: "sunpy.org",
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
                        },
                        {
                            favicon: require("./../assets/github_icon.svg"),
                            link: "sunpy.org",
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
    @media only screen and (min-width: 768px) {
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

.project-link {
    span {
        vertical-align: middle;
    }
}
</style>