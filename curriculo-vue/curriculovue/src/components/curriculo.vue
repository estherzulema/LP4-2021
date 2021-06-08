
<template>
  <div class="curriculo">
    <div class="tela">
      <h1>Curriculo Vitae</h1>

      <div class="dados">
        <h2 id="name">{{ name }}</h2>
        <img src="../assets/img/pessoais.png" alt="eu" id="perfil" />
        <h2>Informações Pessoais</h2>
        <p>Idade: {{ idade }} anos</p>
        <p>Naturalidade: {{ naturalidade }}</p>
        <p>
          <img src="../assets/img/phone.png" alt="Telefone" id="phone" />
          Telefone: 67 99999999
        </p>

        <p><img src="../assets/img/email.png" alt="E-mmail" id="email" /> Email:
          esther.esther@gmail.com  </p>                          
         <p> <img src="../assets/img/linkedin.png" alt="Linkedin" id="linkedin" /> Linkedin:
          esther </p>


        <div class="end">
          <p></p>
          <br />
        </div>
      </div>

      <div class="dados">
        <h2>Experiências Profissionais</h2>
        <p>Estagiária</p>
        <p>Função - Auxiliar Tecnologico</p>
        <br />
      </div>

      <div class="dados">
        <h2>Formação Acadêmica</h2>
        <p>
          Tecnologia em Sistemas para Internet - Mato Grosso do Sul (IFMS) -
          Cursando
        </p>
        <br />
      </div>

      <div class="dados">
        <h2>Formação Completamentar</h2>
        <p>Curso - Marketing Digital</p>
        <br />
      </div>
      <div class="dados">
        <h2>Objetivo</h2>
        <p>meu Objetivo é</p>
        <br />
      </div>
      <div class="dados">
        <h2>Habilidade</h2>
        <p>
          Habilidades na área da tecnologia, organizada, criativa, comunicativa,
          autoconfiante, trabalho em equipe entre outras habilidades.
        </p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "curriculo",
  props: {
    name: String,
    idade: Number,
    naturalidade: String,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "decorativo";
  src: url(../assets/fonts/PTSerif-Bold.ttf);
}

@font-face {
  font-family: "decorativo2";
  src: url(../assets/fonts/PTSerif-Regular.ttf);
}



h1 {
  border-bottom: 3px solid rgb(223, 223, 223);
  background-color: #979797;
  color: #ddd;
  text-align: center;
  font-family: "decorativo";
  padding: 5px;
}

h2 {
  
  background-color: #ddd;
  padding-left: 5px;
  margin: 0 0 0 -15px;
  font-weight: normal;
  font-family: "decorativo2";
}

.dados {
  background-color: #eee;
  padding-left: 15px;
}


#perfil {
  border-radius: 50%;
  margin-top: 1%;
  width: 20%;
}
img {
  width: 20px;
  vertical-align: middle;
  padding-bottom: 6px;
}

#name {
  text-align: center;
}

</style>