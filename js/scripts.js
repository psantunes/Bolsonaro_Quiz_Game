
new Vue({
    el: '#game',
    data: {
        area: [true,false,false,false,false,false,false],
        jogando: true,
        contador: 0, //pode ser derrubado
        acertos: 0,
        resp1: null,
        resp2: null,
        resp3: null,
        resp4: null,
        resp5: null,
        l1: 'red',        
        l2: 'red',       
        l3: 'red',        
        l4: 'red',
        l5: 'red'        
    },
    methods: {
        inicia() {
                Vue.set(this.area, 0, false)
                Vue.set(this.area, 1, true)
                },
        grava1(valor) {
            this.resp1 = valor
            if (valor == "f") {
                this.acertos++
            }
            Vue.set(this.area, 1, false)
            Vue.set(this.area, 2, true)
            this.l1 = 'green'
            window.scrollTo(0,0);
        },
        grava2(valor) {
            this.resp2 = valor
            if (valor == "v") {
                this.acertos++
            }
            Vue.set(this.area, 2, false)
            Vue.set(this.area, 3, true)
            this.l2 = 'green'
            window.scrollTo(0,0);
        },
        grava3(valor) {
            this.resp3 = valor
            if (valor == "f") {
                this.acertos++
            }
            Vue.set(this.area, 3, false)
            Vue.set(this.area, 4, true)
            this.l3 = 'green'
            window.scrollTo(0,0);
        },
        grava4(valor) {
            this.resp4 = valor
            if (valor == "f") {
                this.acertos++
            }
            Vue.set(this.area, 4, false)
            Vue.set(this.area, 5, true)
            this.l4 = 'green'
            window.scrollTo(0,0);
        },
        grava5(valor) {
            this.resp5 = valor
            this.mostrabotao = true
            if (valor == "v") {
                this.acertos++
            }
            this.l5 = 'green'
            Vue.set(this.area, 6, true)
            Vue.set(this.area, 1, true)
            Vue.set(this.area, 2, true)
            Vue.set(this.area, 3, true)
            Vue.set(this.area, 4, true)
            Vue.set(this.area, 5, true)
            this.jogando=false;
            window.scrollTo(0,0);
        },
    
    }

})




