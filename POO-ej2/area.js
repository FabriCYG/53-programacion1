export default class Area {

        bi;
        ds;
        a;
    
        constructor (bi,bs,a){
        this.bi = bi
        this.bs = bs
        this.a = a
        }

        calcularSuma(){ 
        
        
        const resultado = ((  parseInt(this.bi)+ parseInt(this.bs)  ) / 2) * this.a
        return resultado 
        }


        



}