<script>
export default {
  data() {
    return { 
        images:  [
                {
                    "id": 1,
                    "img": "https://super7tech.com/web_developer_exam_sr/layout/images/OLE777_OCT_31.webp",
                    "name": "Slide One",
                    "link": "#"
                },
                {
                    "id": 2,
                    "img": "https://super7tech.com/web_developer_exam_sr/layout/images/slide_two.png",
                    "name": "Slide Two",
                    "link": "#"
                },
                {
                    "id": 3,
                    "img": "https://super7tech.com/web_developer_exam_sr/layout/images/slide_three.png",
                    "name": "Slide Three",
                    "link": "#"
                }
                ]

     };
  },
};

</script>

<template>
    <div id="slider">
    <Splide :options="{ rewind: true }" aria-label="Slider images" v-if="images">
        <SplideSlide>
        <img v-bind:src="images[0].img" >
        </SplideSlide>
        <SplideSlide>
        <img v-bind:src="images[0].img" alt="Sample 1">
        </SplideSlide>
    </Splide>
    </div>
    <div class="wrapper">

        <div class="row p-0" id="images-col">
            <div class="col-lg-4 py-2">
                <img src="../assets/img-cta-3.jpg" />
            </div>
            <div class="col-lg-4 py-2">
                <img src="../assets/img-cta-2.jpg"/>
            </div>
            <div class="col-lg-4 py-2">
                <img src="../assets/img-cta-1.jpg" />
            </div>
        </div>
        <div id="details" class="p-3">
            <div id="details_p">
                <p>
                    <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong>
                <ul>
                    <li>
                        <span>1</span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </li>
                    <li>
                        <span>2</span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </li>
                    <li>
                        <span>3</span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </li>
                    <li>
                        <span>4</span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </li>
                    <li>
                        <span>5</span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </li>
                </ul>
            </div>
        </div>

        <div id="images-col-4-div" class="mobile-hide">
            <div class="row p-0" id="images-col-4" >
                <div class="col-lg-3 text-center">
                    <img src="../assets/img-group.svg"/>
                    <h5>Lorem Ipsum is simply</h5>
                    <p id="mobile-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div class="col-lg-3 text-center">
                    <img src="../assets/img-domino.svg" />
                    <h5>Lorem Ipsum is simply</h5>
                    <p id="mobile-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div class="col-lg-3 text-center">
                    <img src="../assets/img-document.svg" />
                    <h5>Lorem Ipsum is simply</h5>
                    <p id="mobile-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div class="col-lg-3 text-center">
                    <img src="../assets/img-settings.svg" />
                    <h5>Lorem Ipsum is simply</h5>
                    <p id="mobile-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
        </div>

        <div id="images-col-4-div" class="desktop-hide">
            <div class="row pb-5 " id="images-col-4" >
                <div class="col-lg-6  text-center d-flex justify-content-around">
                    <div>
                        <img src="../assets/img-group.svg"/>
                        <h5>Lorem Ipsum is simply</h5>
                        <p id="mobile-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div>
                        <img src="../assets/img-domino.svg" />
                        <h5>Lorem Ipsum is simply</h5>
                        <p id="mobile-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>
                <div class="col-lg-6 text-center d-flex justify-content-around">
                    <div>
                        <img src="../assets/img-document.svg" />
                    <h5>Lorem Ipsum is simply</h5>
                    <p id="mobile-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div>
                        <img src="../assets/img-settings.svg" />
                        <h5>Lorem Ipsum is simply</h5>
                        <p id="mobile-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="app-link">
            <img src="../assets/Sticker WhatsApp Gratis - Kongsi OLE777.gif"/>
        </div>

        <div id="social-link">
            <div class="row">
                <div class="col-lg-4" id="item">
                    <img src="../assets/icon-skype.svg" /> 
                    <p>Pelayanan Pelanggan Skype:</p>
                    <a href="mailto:affiliasi.id@eleintl.com">Example</a>
                </div>
                <div class="col-lg-4" id="item">
                    <img src="../assets/icon-email.svg" /> 
                    <p>Pelayanan Pelanggan Skype:</p>
                    <a href="mailto:affiliasi.id@eleintl.com">Example</a>
                </div>
                <div class="col-lg-4" id="item">
                    <img src="../assets/icon-whatsapp.svg" /> 
                    <p>Pelayanan Pelanggan Skype:</p>
                    <a href="mailto:affiliasi.id@eleintl.com">Example</a>
                </div>
            </div>
        </div>
        <div id="footer">
            <div class="row">
                <div class="col-lg-3">
                    <img src="../assets/logo-chelsea.svg" /> 
                </div>
                <div class="col-lg-3">
                    <img src="../assets/logo-pagcor.png" /> 
                </div>
                <div class="col-lg-3">
                    <img src="../assets/logo-iom.png" /> 
                </div>
                <div class="col-lg-3">
                    <img src="../assets/ole777-white.png" /> 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
p, strong, li {
    color:rgb(127 127 127);
}
.wrapper {
    background: #d9d9d9;
    padding-top: 50px;
}
div#images-col div img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
}
div#images-col {
    padding-top: 30px;
    max-width: 1440px;
    margin: 0px auto;
}
div#images-col-4 {
    padding-top: 30px;
    max-width: 1440px;
    margin: 0px auto;
    
}
div#details,
#images-col-4-div {
    background: rgb(210 210 210);
}
#details_p {
    max-width: 1440px;
    margin: 0px auto;
    padding: 50px 0px 50px 0px;
}
#details_p ul{
    padding: 0;
}
#details_p li{
    list-style: none;
}
div#details_p ul li span {
    background: rgb(250 164 29);
    color: white;
    padding: 3px 5px 3px 5px;
    font-size: 9px;
    border-radius: 3px;
    position: relative;
    top: -2px;
    margin-right: 5px;
}
div#images-col-4 h5 {
    color:rgb(14 39 108);
    padding: 10px;
}
div#app-link {
    text-align: center;
    padding: 20px 0 20px 0;
    max-width: 1440px;
    margin: 0px auto;
}
div#app-link img {
    width: 100%;
}
div#social-link #item {
    display: flex;
    align-items: center;
}
div#social-link {
    background: rgb(20 60 131);
}
div#social-link .row {
    max-width: 1440px;
    margin: 0px auto;
}
div#item p {
    padding: 0;
    margin: 0;
    color:white;
    font-weight: bold;
    padding: 20px 0 20px 10px
}
div#footer {
    background: rgb(10 30 90);
    padding: 20px;
}
div#footer .row {
    max-width: 1440px;
    margin: 0px auto;
}
.splide__slide img {
    vertical-align: bottom;
    width: 100%;
}


@media only screen and (min-width: 768px){
    .desktop-hide {
        display: none;
    }
}

@media only screen and (max-width: 768px){
    #footer img {
        width: 100%;
        padding: 10px; 
    }
    div#social-link {
        display: none;
    }
    div#app-link {
        padding: 0;
        margin: 0;
    }
    #mobile-hide, .mobile-hide {
        display: none;
    }

}

</style>