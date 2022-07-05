const usernames = ["Lucile Robby", "Diego Castanho", "Daniel Orivaldo", "Jess Rider", "Jamal da Silva"]
const userpictures = ["https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg", 
"https://cdn.pixabay.com/photo/2020/12/16/04/15/man-5835659_960_720.jpg", "https://media.istockphoto.com/photos/asian-businessman-standing-by-the-window-picture-id1353552544?s=612x612", 
"https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_960_720.jpg", "https://cdn.pixabay.com/photo/2016/08/13/23/33/smile-1591798_960_720.jpg"
]
const usertitle = ["Modelo", "Designer", "CEO", "Fotógrafa", "Contador"]
const usertext = ["Assim mesmo, a execução dos pontos do programa desafia a capacidade de equalização dos procedimentos normalmente adotados. Por outro lado, o novo modelo estrutural aqui preconizado aponta para a melhoria do remanejamento dos quadros funcionais.", 
"Do mesmo modo, a complexidade dos estudos efetuados garante a contribuição de um grupo importante na determinação das novas proposições. No mundo atual, o desenvolvimento contínuo de distintas formas de atuação exige a precisão e a definição dos métodos utilizados na avaliação de resultados.",
"Caros amigos, a determinação clara de objetivos cumpre um papel essencial na formulação do processo de comunicação como um todo. Acima de tudo, é fundamental ressaltar que o julgamento imparcial das eventualidades talvez venha a ressaltar a relatividade das regras de conduta normativas.",
"Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a mobilidade dos capitais internacionais prepara-nos para enfrentar situações atípicas decorrentes dos relacionamentos verticais entre as hierarquias. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a crescente influência da mídia ainda não demonstrou convincentemente que vai participar na mudança das condições inegavelmente apropriadas.",
"Gostaria de enfatizar que a estrutura atual da organização deve passar por modificações independentemente de todos os recursos funcionais envolvidos. No entanto, não podemos esquecer que o desafiador cenário globalizado estimula a padronização da gestão inovadora da qual fazemos parte. Todavia, o aumento do diálogo entre os diferentes setores produtivos possibilita uma melhor visão global dos modos de operação convencionais."
]

const rbutton = document.getElementById("right")
const lbutton = document.getElementById("left")
const surpriseme = document.getElementById("surpriseMe")
let arrayNumber = randomArrayNumber(usernames)

lbutton.addEventListener("click", (e) => {
    arrayNumber --
    if(arrayNumber < 0){
        arrayNumber = usernames.length - 1
    }
    rprofile(arrayNumber);
})

rbutton.addEventListener("click", (e) => {
    arrayNumber ++
    if(arrayNumber == usernames.length){
        arrayNumber = 0
    }
    rprofile(arrayNumber);
})

surpriseme.addEventListener("click", (e) => {
    arrayNumber = randomArrayNumber(usernames)
    rprofile(arrayNumber);
    return arrayNumber
})

window.addEventListener("load", (e) => {
    rprofile(arrayNumber);
    return arrayNumber
})

function rprofile(number){
    n = usernames[number]
    document.getElementById("name").innerHTML = `${n}`

    i = userpictures[number]
    document.getElementById("avatar").src = `${i}`

    ti = usertitle[number]
    document.getElementById("title").innerHTML = `${ti}`

    te = usertext[number]
    document.getElementById("text").innerHTML = `${te}`
}

function randomArrayNumber(Array) {
    let index = Math.floor(Math.random() * Array.length);
    return index
}
