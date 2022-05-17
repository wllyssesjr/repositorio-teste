function eventoBurger(burger) {
    
    if(burger === classic) {
        burger.addEventListener('mouseenter', () => {
            document.querySelector('#ingredientes-classic').style.opacity = '1'
        })
        burger.addEventListener('mouseout', () => {
            document.querySelector('#ingredientes-classic').style.opacity = '0'
        })
    } else if(burger === especial) {
        burger.addEventListener('mouseenter', () => {
            document.querySelector('#ingredientes-especial').style.opacity = '1'
        })
        burger.addEventListener('mouseout', () => {
            document.querySelector('#ingredientes-especial').style.opacity = '0'
        })
    } else if(burger === prime) {
        burger.addEventListener('mouseenter', () => {
            document.querySelector('#ingredientes-prime').style.opacity = '1'
        })
        burger.addEventListener('mouseout', () => {
            document.querySelector('#ingredientes-prime').style.opacity = '0'
        })
    } else {
        burger.addEventListener('mouseenter', () => {
            document.querySelector('#ingredientes-double').style.opacity = '1'
        })
        burger.addEventListener('mouseout', () => {
            document.querySelector('#ingredientes-double').style.opacity = '0'
        })
    }
}

eventoBurger(classic)
eventoBurger(especial)
eventoBurger(prime)
eventoBurger(double)

// let burgers = [
//     {
//         nome: 'bbq burger classic',
//         id: 1,
//         ingredientes:['Pão Brioche', 'Blend de Carnes (150g)', 'Queijo Cheedar', 'Maionese da Casa']
//     },
//     {
//         nome: 'bbq burger especial',
//         id: 2,
//         ingredientes: ['Pão Brioche', 'Blend de Carnes (150g)', 'Queijo Cheedar', 'Bacon Crocante', 'Maionese da Casa', 'Molho Barbecue']
//     },
//     {
//         nome: 'bbq burger prime',
//         id: 3,
//         ingredientes: ['Pão Brioche', 'Blend de Carnes (150g)', 'Queijo Cheedar', 'Cebola Caramelizada', 'Bacon Crocante', 'Molho Especial']
//     },
//     {
//         nome: 'bbq burger double',
//         id: 4,
//         ingredientes: ['Pão Brioche', 'Duplo Blend de Carnes (150g)', 'Duplo Queijo Cheedar', 'Duplo Bacon Crocante', 'Molho Especial']
//     }
// ]