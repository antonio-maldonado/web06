function division(n1,n2){
    let numeroDividido={
      cociente:0,
      residuo:0
    }
    
    numeroDividido.cociente = parseInt(n1/n2);
    numeroDividido.residuo = n1%n2;
    
    return numeroDividido;
}
  
  console.table(division(5,3));

