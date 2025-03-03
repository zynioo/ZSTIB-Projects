<template>
  <SectionHero>
    <template v-slot:leftBlock>
      <h1 class="school-name display-4 fw-bold lh-1 text-body-emphasis mb-3">ZS<span class="">TIB</span></h1>
      <div class="hello">Lorem ipsum dolor</div>
      <p class="col-lg-10 fs-4 ">CodeCarrot Studio to inicjatywa dwóch uczniów technikum programistycznego. Tworzymy wysokiej jakości strony internetowe</p>
      <EmailMe></EmailMe>
    </template>
    
    <template v-slot:rightBlock>
      <img class="logo" src="@/assets/loho.png" alt="Logo">
    </template>
  </SectionHero>
  <!-- sekcja services -->
  <section class="services" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="services-header">
            <h2>Celujemy <br>w przyszłość</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services-header">
            <div class="services-header-content">
              <hr class="line"> <span>Co Potrafimy</span> 
            </div>
            <div class="services-description">
              <p>Posiadamy solidną wiedzę na temat nowoczesnych framework'ów frontendowych oraz umiemy z nich korzystać</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- cards -->
    <div class="row m-5" >
      <sevicesBlock
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :imgSrc="service.imgSrc"
          :description="service.description"
        />
    </div>
    <!-- cards end -->
  </section>
  <!-- koniec sekcji services -->
<section class="work">
  
  <div class="album py-5 bg-body-tertiary">
    <div class="container container-work">
        <div class="row">
          <div class="col-lg-6">
            <div class="services-header">
              <div class="services-header-content">
                <hr class="line"> <span>Ostatnie prace</span> 
              </div>
              <h2>Kilka naszych ostatnich<br> projektów.</h2>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="services-header">
            
              <div class="services-header-right-block">
                <RouterLink class="all-projects" to='/offer'>Zobacz wszystkie projekty</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="container-block">
        <SectionWork
          v-for="(work,index) in works"
          :key="index"
          :title="work.title"
          :imgSrc="work.imgSrc"
          :description="work.href"
        >
        </SectionWork>
        
      </div>
  </div>
</section>

<section id="contact">
    <div class="container container-contact ">
        <div class="row">
          <div class="col-lg-6">
            <div class="services-header">
              <div class="services-header-content">
                <hr class="line"> <span>Dołącz do nas</span> 
              </div>
              <h2>Jesteś zainteresowany współpracą? </h2>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="services-header">
            
              <div class="services-header-right-block">
                <EmailMe/>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
<Footer></Footer>       
</template>

<script setup lang="ts">
import SectionHero from "../components/HomeViewComponents/SectionHero.vue";
import sevicesBlock from "@/components/servicesBlock.vue";
import Footer from "@/components/Footer.vue"
import SectionWork from "@/components/HomeViewComponents/SectionWork.vue";
import EmailMe from "@/components/EmailMe.vue";

interface Service {
  title: string;
  imgSrc: string;
  description: string;
}

interface Work {
  title: string;
  imgSrc: string;
  href: string;
}

const services: Service[] = [
  {
    title: "TypeScript Developers",
    imgSrc: "ts_2.png",
    description: "Mamy doświadczenie w stosowaniu TypeScript w projekcie, co pozwala mi pisać bardziej niezawodny i skalowalny kod JavaScript. Znamy podstawowe typowanie danych jak i zaawansowane takie jak np. interfejsy. Pozwala to na łatwiejsze wyszukiwanie błędów w trakcie tworzenia strony"
  },
  {
    title: "Vue Develepoers",
    imgSrc: "logo.png",
    description: "Posiadamu solidną wiedzę i praktyczne doświadczenie w pracy z Vue.js. Z powodzeniem tworzyliśmy responsywne i reaktywne strony internetowe, wykorzystując Vue w różnych projektach. Zynam zarówno podstawowe jak i zaawansowane koncepty Vue, takie jak komponenty, reaktywność danych oraz routing"
  },
  {
    title: "React Developers",
    imgSrc: "react.png",
    description: "I help design strong and captivating brand strategies. Through thorough research and market analysis."
  }
];

const works: Work[] = [
  {
    title: "Alana - live data app",
    imgSrc: "alana.png",
    href: "/",
  },
  {
    title: "Wohoo - weather app",
    imgSrc: "wohoo.png",
    href: "/",
  },
  {
    title: "Pagee - real estate UI kit",
    imgSrc: "pagee.png",
    href: "/",
  },
  {
    title: "Keikoko - agency web",
    imgSrc: "keikoko.png",
    href: "/",
  }
];
</script>

<style >

.school-name>span{
  color: var(--primary) !important;
}

.line {
  background-color: var(--primary);
  width: 50px;
  border: 1.9px;
  height: 2px;
  float: left;
  margin-right: 10px;
  opacity: 1;
}

.services-header-content {
  display: flex;
  align-items: center;
  
}
.services-header-right-block {
  display: flex;
  justify-content: end;
  .all-projects {
    font-size: 14px;
    background-color: transparent;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 16px;
    border: 1px solid var(--primary);
    color: white;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    margin-top: 1rem;
  }

  .all-projects:hover {
    background-color: var(--primary);
    border-color: var(--lightDark);
    color: var(--lightDark);
  }
}

.services-header-content span {
  color: var(--primary);
  font-weight: bold;
  font-size: 1.25rem;
}

.services-header h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--white);
}

.services-description {
  font-size: 1.2rem;
  color: var(--gray);
}

@media (max-width: 574px) {
  .services-header h2 {
    font-size: 1.5rem;
  }

  .services-description {
    font-size: 1rem;
  }

  .services-header-content span {
    font-size: 1.1rem;
  }
  .services-header{
    margin-left: 1.2rem;
  }
 
}
@media (max-width: 991px) {
  .services-header-right-block {
    justify-content: start;
  }
  .row{
    display: flex;
    .services-header-content{
      order: 1;
    }
  }
  .container-block{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
}
.album{
  background-color: var(--lightDark) !important;

}
.container-block{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

/* contact */
.container-contact
.row {
  align-items: center;
  padding: 48px 0;
}

.row
p {
  color: var(--gray);
}



#footer 
.row {
  align-items: center;
}
#footer {
  padding: 48px 0;
  background-color: var(--deepDark);
  margin: 0;
}

#footer a {
  color: var(--primary);
  text-decoration: none;
}

#footer .bi {
  fill: var(--white);
  transition: .3s ease;
}
#footer .bi:hover {
  fill: var(--primary);
}

#footer hr {
  border: none;
  height: 2px;
  background-color: var(--white);
  
}
.footer-header p {
  margin: 0;
}
@media(max-width:995px) {
  .footer-header{
    justify-content: center;
    align-items: center;
    display: flex;
  }
  #footer p {
    margin-bottom: 10px;
  }
}
.display-5{
  color: var(--white) !important;
}
.hello{
  color: var(--primary);
  font-size: 38px;
  font-weight: bold;
}
.display-4{
  color: white !important;
  font-weight: 800;
}
.col-lg-10{
  color: var(--gray) !important;
  line-height: 28px !important;
}

.col-lg-10 {
  font-size: 1.2rem !important;
  
}
.col-md-10{
  display: flex;
  justify-content: center;
}
.logo{
  width: 100%;
  height: 50vh;
}
</style>
