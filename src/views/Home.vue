<template>
	<v-row class="ma-0">
		<v-col class="pa-0">
			<div class="intro">
				<h1>Web Development Projects</h1>
				<p>I like making open source projects for the web: my favorite ones are web applications, and stuff that could make someone's life easier.</p>
				<p>
					All of the projects are
					<a href="https://github.com/DuyguKeskek" class="hover-black" target="_blank">public on GitHub</a> where you can follow along.
				</p>
			</div>
			<Projects></Projects>
		</v-col>
	</v-row>
</template>

<script>
import Projects from '@/components/Projects.vue'
export default {
    name: "Home",
    components: {
        Projects
    }
};
</script>

<style lang="scss">
.intro {
    max-width: 540px;
	margin-bottom: 4em;
}
</style>
