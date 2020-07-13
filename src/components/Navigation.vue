<template>
    <div>
        <div class="MenuWrapper" v-for="(route, i) in this.$router.options.routes" :key="i">
            <div ref="Link" :class="`${currentRoute === child.name? 'CurrentSlide':''} MenuLink`" v-for="(child, k) in route.children" :key="k">
                <div @click="menuClicked($event, child.name, k)">{{ child.title }}</div>
            </div>
            <div :v-if="currentElementPosition.x" ref="MenuSlide" id="MenuSlide" :class="`MenuSlide ${isMoving? animationToUse:''}`" :style="`top: ${currentElementPosition.y - 10}px;left: ${currentElementPosition.x - 10}px; width: ${currentElementPosition.width}px; height: ${currentElementPosition.height}px;`"></div>
        </div>
    </div>
</template>

<style scoped>
.MenuWrapper {
    display: flex;
    flex-direction: row;
}
.MenuLink {
    cursor: pointer;
    font-family: 'Fredoka One', Courier, monospace;
    font-size: 1.5em;
    color: white;
    -webkit-text-stroke: 1px rgb(0, 0, 0);
    z-index: 1;
    max-height: 56px;
    padding-left: 25px;
    padding-right: 25px;
    line-height: 56px;
}

#MenuSlide {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3), 0 1px 3px 0 rgba(0, 0, 0, .3);
    
}

.MenuSlide {
    position: absolute;
    border-radius: 8px;
    background: linear-gradient(151deg, rgba(200, 32, 144, 1), rgba(106, 20, 209, 1), #146bd1, #1ed114, rgba(209, 147, 20, 1), rgba(209, 20, 20, 1));
    background-size: 1200% 1200%;
    animation: btn-bg 15s ease infinite;
    transition-duration: .1s;
    transition-property: left right height width;
    transition-timing-function: linear;

}

.MenuSlidingAnimationLeft {
    animation: shakeReverse .2s linear .1s;

}

.MenuSlidingAnimationRight {
    animation: shake .2s ease-out .1s;
}

@keyframes btn-bg {
    0%{background-position:0% 50%}
    50%{background-position:100% 90%}
    100%{background-position:0% 50%}
}

@keyframes shake {
  0% {transform:translate(0px);}
  50% {transform:translate(40px);}
  100% {transform:translate(0px);}
}
@keyframes shakeReverse {
  0% {transform:translate(0px);}
  50% {transform:translate(-40px);}
  100% {transform:translate(0px);}
}

</style>

<script>
export default {
    props: [
        'router'
    ],
    mounted() {
        this.$refs['Link'].forEach((elem, i)=>{
            if (elem.classList.contains('CurrentSlide')) {
                this.currentElement = elem
                this.currentElementPosition = this.currentElement.getBoundingClientRect();
                console.log(this.currentElementPosition)
                this.currentIndex = i;
            }
        })
        this.interval = setInterval(this.updateShadowElement, 1000);

    },
    methods: {
        menuClicked: function(event, pathtogo, index) {
            this.getMenuSlideDirection(index);
            this.currentIndex = index;
            this.isMoving = true;
            setTimeout(() => {
                this.isMoving = false;
                console.log(this.isMoving)
            }, 400)

            this.currentRoute = this.$router.currentRoute.name;
            if (this.currentRoute !== pathtogo){
                this.$router.push({name: pathtogo})
            }

            this.currentElement = event.target.parentNode;
            this.currentElementPosition = event.target.parentNode.getBoundingClientRect();
        },
        updateShadowElement: function () {
            if (this.currentElementPosition.x !== this.currentElement.getBoundingClientRect().x){
                this.currentElementPosition = this.currentElement.getBoundingClientRect();
            }
        },
        getMenuSlideDirection: function (newIndex) {
            if (this.currentIndex === newIndex) {
                this.animationToUse = '';
                return;
            }
            if (this.currentIndex > newIndex){
                this.animationToUse = 'MenuSlidingAnimationLeft';
                return;
            }
            this.animationToUse = 'MenuSlidingAnimationRight'
            return;
        }
    },
    data() {
        return {
            currentRoute: this.$router.currentRoute.name,
            currentElement: Object,
            currentElementPosition: Object,
            interval: Function,
            isMoving: false,
            currentIndex: Number,
            animationToUse: String
        }
    }
}
</script>