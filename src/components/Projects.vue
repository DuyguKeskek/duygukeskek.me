<template>
	<v-row class="ma-0">
		<v-col class="pa-0">
            <v-hover
                v-slot:default="{ hover }"
                open-delay="100"
            >
                <v-card 
                    :elevation="hover ? 16 : 2"
                    max-width="540" 
                    outlined>
                        <v-img
                            src="./../assets/sunpy.png"
                            height="300px"
                            dark
                            >
                        </v-img>
                </v-card>
            </v-hover>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="pa-0">
            <v-hover
                v-slot:default="{ hover }"
                open-delay="100"
            >
                <v-card 
                    :elevation="hover ? 16 : 2"
                    max-width="540" 
                    outlined>
                        <v-img
                            src="./../assets/radius.png"
                            height="300px"
                            dark
                            >
                        </v-img>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Projects"
};
</script>

<style lang="scss">
</style>