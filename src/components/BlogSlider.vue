<template>
    <div :class="`TotalWrapper ${expand?'TotalWrapper--Expand':''}`">
        <a name="top" ref="BackToTop"></a>
        <article :class="`BlogWrapper ${expand?'BlogWrapper--Expand':''}`" :style="`background-image: url('${image}');`">
            <div :class="`TextWrapper ${expand?'TextWrapper--Expand':''}`">
                <h1 class="Title">This is an example title.</h1>
                <p class="SummaryText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <p class="WrittenBy"><span class="WrittenByText">Written By:</span>Troy Bjorn</p>
                <p class="Date"><span class="DateText">Published:</span>January 20th, 2020</p>
                <button @click="toggleExpand()" class="Button">Read More</button>
            </div>
            <div class="TitleBlogTop">
                <h1 :class="`TitleBlogTop--h1 ${expand?'TitleBlogTop--h1__Expand':''}`">This is an example title.</h1>
            </div>
            <div :class="`Arrow LeftArrow ${expand?'LeftArrow--Expand':''}`"></div>
            <div :class="`Arrow RightArrow ${expand?'RightArrow--Expand':''}`"></div>
        </article>
        <div :class="`BlogWrapperContent ${expand?'BlogWrapperContent--Expand':''}`">
            <div class="BlogWrapperMain">
                <section :class="`BlogWrapper--TextWrapper ${expand?'BlogWrapper--TextWrapper__Expand':''}`">
                    <button @click="toggleExpand()" class="ButtonClose"></button>
                    <vue-showdown id="ShowDown" :markdown="blogContent"/>
                    <p class="WrittenBy"><span class="WrittenByText">Written By:</span>Troy Bjorn</p>
                    <p class="Date"><span class="DateText">Published:</span>January 20th, 2020</p>
                    <button @click="scrollToTop()" class="Button">Back To Top</button>
            </section>
           </div>
           <aside class="SupportingColumn">
               <section class="SupportingColumn--InnerContent">
                   <div class="SupportingColumn--UserInfoWrapper">
                       <div class="SupportingColumn--Figure">
                           <figure class="SupportingColumn--Frame">
                                <img class="SupportingColumn--Image" src="http://204.48.22.152/uploads/291_bfb9167864.jpeg">
                           </figure>
                       </div>
                       <div class="UserInfoWrapper">
                           <div class="UserInfoWrapper--Username">
                               <span class="WrittenByText">Author:</span>Trey
                           </div>
                            <div class="UserInfoWrapper--JoinedDate">
                               <span class="WrittenByText">Date:</span>July 12, 2020
                           </div>
                            <div class="UserInfoWrapper--PostCount">
                               <span class="WrittenByText">Blog Posts:</span>2
                           </div>
                       </div>
                   </div>
                   <div class="OtherPostsWrapper">
                       <div class="PostsWrapper">
                            <figure class="PostsWrapper--Figure">
                                <img calss="PostsWrapper--Image" src="http://204.48.22.152/uploads/thumbnail_014_850afaab4f.jpeg">
                            </figure>
                            <p class="PostsWrapper--PostsTitle">
                                Some title lmao
                            </p>
                       </div>
                   </div>
               </section>
           </aside>
        </div>
    </div>
</template>
<style>
#ShowDown {
    font-size: 1em;
    font-family: 'Montserrat', Courier, monospace;
    line-height: 1.5em;
    font-weight: 100;
    color: #414141;
    margin-bottom: 16px;
    width: 100%;
}
</style>

<style scoped>
.SupportingColumn--UserInfoWrapper {
    display: flex;
}

.BlogWrapperMain {
    padding: 20px;
    box-sizing: border-box;
    width: 70%;
    padding-right: 0;
}

.SupportingColumn--Figure {
    width: 100px;
    height: 100px;
    background: linear-gradient(151deg, rgba(200, 32, 144, .5), rgba(106, 20, 209, .5), #146bd1, #1ed114, rgba(209, 147, 20, .5), rgba(209, 20, 20, .5));
    background-size: 1200% 1200%;
    animation: bgshift 15s ease infinite reverse;
    border-radius: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: nowrap;
}

.SupportingColumn--Frame {
    background-color: white;
    border-radius: 100%;
    border: 3px solid white;
    height: 80px;
    width: 80px;
    margin: 0;
    overflow: hidden;
    display: flex;
    align-content: center;
    flex-direction: row;
}

.SupportingColumn--Image {
    width: 100px;
    object-fit: cover;
}

.UserInfoWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    box-sizing: border-box;
    font-family: 'Montserrat', 'courrier', sans-serif;
}



.TitleBlogTop {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.TitleBlogTop--h1 {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3), 0 1px 3px 0 rgba(0, 0, 0, .3);
    background: linear-gradient(151deg, rgba(200, 32, 144, .5), rgba(106, 20, 209, .5), #146bd1, #1ed114, rgba(209, 147, 20, .5), rgba(209, 20, 20, .5));
    background-size: 1200% 1200%;
    animation: bgshift 15s ease infinite;
    border-radius: 200px;
    font-family: 'Fredoka One', Courier, monospace;
    color: #2f3030;
    width: auto;
    padding: 20px;
    font-size: 4em;
    opacity: 0;
    transition: opacity .75s;
    transition-delay: .25;
}

.TitleBlogTop--h1__Expand {
    opacity: 1;
}

.TotalWrapper {
    overflow-y: hidden;
    height: 100%
}

.TotalWrapper--Expand {
    display: block;
    overflow-y: scroll;
}
.BlogWrapper {
    background-position: center center;
    background-size: cover;
    background-color: lightslategray;
    position: relative;
    width: 100%;
    height: 100%;
    transition: all 1s;
}

.BlogWrapper--Expand {
    height: 400px;
}

.BlogWrapperContent {
    width: 100%;
    max-width: 1900px;
    height: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.BlogWrapperContent--Expand {
    height: fit-content;
    
}

.SupportingColumn {
    width: 30%;
    padding: 20px;
    box-sizing: border-box;
}

.SupportingColumn--InnerContent {
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgb(238, 238, 238);
}

@media screen and (max-width: 1200px) {
    .BlogWrapperContent {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 20px;
        box-sizing: border-box;
    }   

    .BlogWrapperMain {
        width: 100%;
        padding: 0px;
    }

    .TitleBlogTop--h1 {
        font-size: 1.5em;
        width: 100%;
        border-radius: 0;
        text-align: center;
    }

    .SupportingColumn {
        width: 100%;
        padding: 0;
        margin-top: 20px;
    }

    .SupportingColumn--InnerContent {

    }
}

.BlogWrapper--TextWrapper {
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgb(238, 238, 238);
    border-radius: 10px;
    box-sizing: border-box;
    right: 0;
    height: 100%;
    min-height: 500px;
    transition: all 1s;
    opacity: 0;
}

.BlogWrapper--TextWrapper__Expand {
    height: 100%;
    opacity: 1;
}

.TextWrapper {
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    right: 0;
    width: 40%;
    background-color: rgba(255, 255, 255, 0.7);
    height: 100%;
    transition: all .25s;
    opacity: 1;
    z-index: 5;
}

.TextWrapper--Expand {
    opacity: 0;
}

.TextWrapper::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: -5px;
    display: block;
    width: 5px;
    background: rgba(255,255,255, .5);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,.1) 100%);
    height: 100%;
}

@media screen and (max-width: 1200px) {
    .BlogWrapper--TextWrapper {
        margin: 0px;
    }


    .TextWrapper {
        width: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .TextWrapper::after {
        display: none;
    }
}

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

.LeftArrow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3), 0 1px 3px 0 rgba(0, 0, 0, .3);
    transition: all 1s ease-in-out;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 8px;
    width: 75px;
    height: 75px;
    z-index: 100;
}

.LeftArrow--Expand {
    width: 50px;
    height: 75px;
    border-bottom-right-radius: 75px;
    border-top-right-radius: 75px;
}

.LeftArrow--Expand.LeftArrow::after {
    bottom: calc(55% - 20px);
    left: calc(50% - 20px);
}

.LeftArrow::after {
    content: '<';
    font-size: 50px;
    max-width: 50px;
    max-height: 50px;
    color: white;
    font-family: 'Fredoka One', Courier, monospace;
    position: absolute;
    bottom: calc(50% - 25px);
    left: calc(50% - 25px);

}

.RightArrow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3), 0 1px 3px 0 rgba(0, 0, 0, .3);
    transition: all 1s ease-in-out;
    position: absolute;
    bottom: 0;
    right: 0;
    border-top-left-radius: 100%;
    border-bottom-right-radius: 8px;
    width: 75px;
    height: 75px;
    z-index: 100;
}

.RightArrow--Expand {
    width: 50px;
    height: 75px;
    border-bottom-left-radius: 75px;
    border-top-left-radius: 75px;
}

.RightArrow--Expand.RightArrow::after {

    bottom: calc(55% - 20px);
    right: calc(50% - 20px);
}

.RightArrow::after {
    content: '>';
    font-size: 50px;
    max-width: 50px;
    max-height: 50px;
    color: white;
    font-family: 'Fredoka One', Courier, monospace;
    position: absolute;
    bottom: calc(55% - 30px);
    right: calc(50% - 25px);
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

.ButtonClose {
    position: absolute;
    top: 25px;
    right: 25px;
    margin-top: 3px;
    border-radius: 25px;
    width: 50px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3), 0 1px 3px 0 rgba(0, 0, 0, .3);
    background: linear-gradient(151deg, #c82090, #6a14d1, #146bd1, #1ed114, #d19314, #d11414);
    background-size: 1200% 1200%;
    animation: bgshift 15s ease infinite;
    transition-duration: .4s;
    transition-property: left right height width;
    height: 50px;
    color: white;
    padding: 25px;
    border: 0;
}

.ButtonClose::after {
    content: 'X';
    font-family: 'Fredoka One', sans-serif;  
    font-size: 25px;
    height: 50px;
    width: 50px;
    line-height: 50px;
    position: absolute;
    left: 0;
    top: 0;
}

.ButtonClose:hover {
    content: 'X';
    transition: all 1s ease-in-out;
    transform: rotate(360deg);
}

.Arrow {
    background: linear-gradient(151deg, #c82090, #6a14d1, #146bd1, #1ed114, #d19314, #d11414);
    background-size: 1200% 1200%;
    animation: bgshift 15s ease infinite;
}

@media screen and (max-width: 1200px) {
    .ButtonClose {
        left: -15px;
        top: -35px;
    }

    .TextWrapper {
        width: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .TextWrapper::after {
        display: none;
    }
    .LeftArrow {
        bottom: calc(100% - 50px);
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 100%;
        width: 50px;
        height: 50px;
    }

    .LeftArrow--Expand {
        height: 50px;
    }
    
    .LeftArrow--Expand.LeftArrow::after {
        bottom: calc(55% - 12px);
        left: calc(50% - 20px);
    }

    .LeftArrow::after {
        font-size: 40px;
        max-width: 40px;
        max-height: 40px;
        bottom: calc(70% - 20px);
        left: calc(50% - 20px);

    }

    .RightArrow {
        bottom: calc(100% - 50px);
        border-top-left-radius: 0;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 100%;
        width: 50px;
        height: 50px;
    }

    .RightArrow--Expand.RightArrow::after {
        bottom: calc(55% - 12px);
        right: calc(50% - 20px);
    }

    .RightArrow--Expand {
        height: 50px;
        border-bottom-left-radius: 100px;
        border-top-left-radius: 0;
    }

    .RightArrow::after {
        content: '>';
        font-size: 40px;
        max-width: 40px;
        max-height: 40px;
        color: white;
        font-family: 'Fredoka One', Courier, monospace;
        position: absolute;
        bottom: calc(70% - 20px);
        right: calc(50% - 20px);

    }
}

@keyframes btn-bg {
    0%{background-position:0% 50%}
    50%{background-position:100% 90%}
    100%{background-position:0% 50%}
}


@keyframes bgshift {
    0%{background-position:18% 0%}
    50%{background-position:83% 100%}
    100%{background-position:18% 0%}
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'BlodSlider',
    components: {
        
    },
    mounted() {        

    },
    methods: {
        scrollToTop: function() {
            this.$refs.BackToTop.scrollIntoView({
                behavior: 'smooth' 
            });
        },
        toggleExpand: function() {
            this.$refs.BackToTop.scrollIntoView({
                behavior: 'smooth' 
            });
            this.expand = !this.expand;
        }
    },
    data() {
        return {
            image: 'https://gblobscdn.gitbook.com/assets%2F-LcLCJpmM20WiKnO4rN9%2F-Llp6GN4CRlnJKGvOBKw%2F-Llp6fAyRJkv9q6CWGC_%2FspaceIdentification.png?alt=media&token=1f6027bb-4e34-4781-a714-3ddaa20f1423',
            expand: false,
            blogContent: `:kissing_heart: # Minimum ego obliquum diuque altera vaporibus templa\n\n## In tremulae calcat festaque\n\nLorem markdownum portitor paulatim es adhuc litis tersis tactu quae **ab** pars\nbracchia deinde in in in petisti, de. Firmo dissuadet aurea sidera, tabuerant\n*occiduo*.\n\n## Clementissimus velox si oculorum copula labore venit\n\nLignea sua fele turba quoque et sed maneas dextera quique *fila* praeteriit\ncaede. Sententia corpore praepositam plaga [domestica\nantra](http://www.fractae-tamen.org/): quem!\n\n## Reddita nurus forte et veneror sororum\n\nVixisse virginis tumidus vetustas saepe. Audet liceat penetravit quod Hospitis\ncorpus despondet divitior adventum celsis vulgat quoque victima, erat vesicam.\n**Reperire** inpune eque orbe velox inpedit: sanguine deus pendens; aliquid\ncrimenque parentum ubi cunctis numero iras prima Confremuere. Orphea femina\nsolus aditumque mare, huc nuper quid, oculisque genialis: quam egit timoris\nnutu.\n\n## Iuno manum inscribenda referre missus\n\nNefas praecipitant undas tribuitque parva attonitas, posset aquis movit tenens?\nDubitabilis herbis constitit. Quid mores inmitis ista traxere? Sic deos, qua\nmutum pontus breve; credita de quater, cava dixi habes, tormentis mecumque.\nParva infit *et* Oeclides sacer.\n\n    if (sound / -4) {\n        bare_gamma_gigabyte -= margin_word_process;\n    } else {\n        sound_requirements_lag *= ide_affiliate + multicastingInkjet + lion;\n        font_syn.word(file_hertz_ibm + camera_thyristor,\n                enterpriseHover.virtual.ttlUndoIpod(bot, baudSuperscalar,\n                gigoKey), vlb_mamp_mca.express(tutorialDvd, array_matrix_access,\n                active_pack));\n        rowSecondary.worm_edi_eps.ide_optical_nat(inputDigitize(core,\n                technologyCardRosetta, 5), 3, olapWindowsRegistry);\n    }\n    row /= storageTweakWord + optical_moodle_flaming;\n    if (93 - 5) {\n        zip_right_goodput.expansion_program = synDos + supercomputer -\n                web_column_log;\n        lionDhcpMemory(pop_command_digital, 1 * 77, meme_interactive_cgi *\n                saas);\n    } else {\n        pppoe.encodingDtd.miniEngine(unfriendFile);\n    }\n\n## Pennis vires meritis hac fusus\n\nPrecaria Achille tangunt, silvas timetque nunc declivibus: nocens Orchomenon\ntibi, vidit latoque seductus ieiunia a te [ab](http://splendidior.io/). Focos i\ndedit Rhodopen ille saxum esse, ut dubitati admotum, tellus. Ea\n[casuque](http://graminein.com/) voce, despexitque puerili forte. Vultum\npurpura.\n\nSi ingreditur occupat velox exsiluere lacrimas latus adnuit ab poscitis Achelous\ntempora caelum patuisse speciosa negat urbesque dici aratri sensit. Praecipuum\nfecit notam merentem heros Ledam adcommodat, hinc per. Visceribus summo vocant\npatris, videbor nos voces candidus ipsi et. In in dextra visa mulcendaque vota\niuvenis aura nomina, quoque **hoc attollere**. Vi matrona, ad quos crescentis\nsolito, admonita referuntur.\n\nPraeponere bracchia Iphis triumphos pauperque est saxum; est pompa scorpius\nillis sed, laborum pia rutilum timido, rupti. Cadit hic, natura ripa his turba\nversae adsensere afuerunt, male!`,

        }
    }
})
</script>