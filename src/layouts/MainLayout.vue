<template>
    <div id="page">
        <main>
            <div id="wrapper">
                <nav>
                    <Navigation :router="this.$router.options.routes"></Navigation>
                </nav>
                <section id="content">
                    <router-view></router-view>
                </section>
            </div>
        </main>
    </div>
</template>

<style scoped>
#page {
    width: 100%;
    max-width: 1920px;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    flex-direction: row;
}
main {
    max-width: 1920px;
    width: 100%;
    min-height: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(151deg, #c82090, #6a14d1, #146bd1, #1ed114, #d19314, #d11414);
    background-size: 1200% 1200%;
    animation: bgshift 15s ease infinite;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#wrapper {
    max-width: 1920px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

nav {
    max-width: 1900px;
    position: relative;
    width: 100%;
    height: 56px;
    background-color: white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    box-sizing: border-box;
}

#content {
    background-color: white;
    height: fit-content;
    max-width: 1900px;
    width: 100%;
    height: calc(100% - 65px);
    overflow-x: hidden;
    overflow-y: hidden;
    margin-top: 10px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    box-sizing: border-box;
}

@keyframes bgshift {
    0%{background-position:18% 0%}
    50%{background-position:83% 100%}
    100%{background-position:18% 0%}
}
</style>

<script>
import Navigation from '../components/Navigation.vue';
export default {
    name: 'MainLayout',
    components: {
        Navigation
    },
    props: [],
    data() {
        return {

        }
    }
}
</script>