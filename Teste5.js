let st = 'Morreu de morte morrida';

let stCortada = st.split('')

let novaSt = '';

for(let i = stCortada.length; i != 0; i--) {
    novaSt = novaSt + stCortada[i - 1];
}

console.log(novaSt);