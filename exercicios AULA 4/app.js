// Criando uma nova instância do Vue.js
new Vue({
    // Definindo o elemento do DOM onde o Vue.js deve operar
    el: '#app',
    // Definindo o objeto de dados do Vue.js
    data: {
      // Propriedade 'contador' inicializada em 0
      contador: 0,
      // Propriedade 'mostrarTexto' inicializada como false
      // Esta propriedade controla a exibição do texto
      mostrarTexto: false,

      nome: "" ,
      
      itens: ["item 1", "item 2", "item 3"]
    },
  
    // Definindo métodos do Vue.js
    methods: {
      // Método para incrementar o valor do contador
      incrementar() {
        this.contador += 1;
      },
      // Método para decrementar o valor do contador
      decrementar() {
        this.contador -= 1;
      }
    }
});  