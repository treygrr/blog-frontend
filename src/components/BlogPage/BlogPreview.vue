<template>
    <div :class="`TextWrapper`">
        <h1 class="Title">{{ this.$props.Title }}</h1>
        <p class="SummaryText">
            {{ this.$props.SummaryText }}
        </p>
        <p class="WrittenBy">
            <span class="WrittenByText">
                Written By:
            </span>
            {{ this.$props.WrittenBy }}
        </p>
        <p class="Date"><span class="DateText">Published: </span>{{ this.$props.Date }}</p>
        <button v-on:click="toggleExpand()" class="Button">Read More</button>
    </div>
</template>


<style scoped>
.Title {
    font-size: 2em;
    font-family: 'Fredoka One', Courier, monospace;
    color: #2f3030;
}

.SummaryText {
    font-size: 1em;
    font-family: 'Montserrat', Courier, monospace;
    line-height: 1.5em;
    font-weight: 100;
    color: #414141;
    margin-bottom: 16px;
}

.WrittenBy {
    font-size: 1em;
    font-family: 'Montserrat', Courier, monospace;
    line-height: 1.5em;
    font-weight: 100;
    color: #414141;
    margin-bottom: 16px;
}

.WrittenByText {
    font-size: 1.2em;
    font-family: 'Fredoka One', Courier, monospace;
    font-weight: 100;
    padding-right: .5em;
    color: #414141;
}

.Date {
    font-size: 1em;
    font-family: 'Montserrat', Courier, monospace;
    line-height: 1.5em;
    font-weight: 100;
    color: #414141;
    margin-bottom: 25px;
}

.DateText {
    font-size: 1.2em;
    font-family: 'Fredoka One', Courier, monospace;
    font-weight: 100;
    padding-right: .5em;
    color: #414141;
}

.Button {
    margin-top: 3px;
    border-radius: 25px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3), 0 1px 3px 0 rgba(0, 0, 0, .3);
    background: linear-gradient(151deg, rgba(200, 32, 144, .5), rgba(106, 20, 209, .5), #146bd1, #1ed114, rgba(209, 147, 20, .5), rgba(209, 20, 20, .5));
    background-size: 1200% 1200%;
    animation: bgshift 15s ease infinite;
    transition-duration: .4s;
    transition-property: left right height width;
    font-family: 'Fredoka One', Courier, monospace;
    font-size: 1.5em;
    height: 50px;
    color: #2f3030;
    padding-left: 25px;
    border: 0;
    padding-right: 25px;
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'BlogPreview',
    props: [
        'Title',
        'SummaryText',
        'WrittenBy',
        'Date',
        'Toggle'
    ],
    methods: {
        toggleExpand: function(){
            this.Toggle()
        }
    }   
})
</script>