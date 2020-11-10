

let vetorCores = [
"AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", 
"Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", 
"BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", 
"Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", 
"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", 
"DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", 
"DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", 
"DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", 
"ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", 
"Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", 
"Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", 
"LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", 
"LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", 
"LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", 
"LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", 
"MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", 
"MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", 
"MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace",
"Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod",
"PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff",
"Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red",
"RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
"SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
"SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue",
"Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat",
"White", "WhiteSmoke", "Yellow", "YellowGreen"
];

let vidas = 3;
let escolhaCor = "green";
let textoInput;
let sortear;
let cores = [];
let teste = document.getElementsByTagName('body')[0]; 

verificaVida()

function coresAleatorias(){

    for (let i = 1; i <= 10; i++){
        cores.push(vetorCores[Math.floor(Math.random() * vetorCores.length)]);
        console.log(cores)
        
    }

    cores.sort()

    document.getElementById("mostrarCores").innerText = `${cores[0]}` + '\n' + `${cores[1]}` + '\n' + `${cores[2]}` + '\n' + `${cores[3]}` + '\n' + `${cores[4]}` + '\n' + `${cores[5]}` + '\n' + `${cores[6]}` + '\n' + `${cores[7]}` + '\n' + `${cores[8]}` + '\n' + `${cores[9]}` + '\n' + `${cores[1]}`
    
    sortear = cores[Math.floor(Math.random() * cores.length)];
    console.log(sortear);

}
coresAleatorias()

function campoTexto(){

    textoInput = document.querySelector("input").value; {
        if (textoInput.toUpperCase() === sortear.toUpperCase()){
            teste.style.backgroundColor = sortear;
            alert('Você acertou!!')
        }else{
            vidas--;
            if(vidas <= 2){
                if (textoInput.toUpperCase() > sortear.toUpperCase()){
                    alert('\nSua cor é alfabeticamente maior que a sorteada.\n\nVocê errou!\nTotal de vidas: ' + vidas)
                    verificaVida()
                }else if (textoInput.toUpperCase() < sortear.toUpperCase()){
                    alert('\nSua cor é alfabeticamente menor que a sorteada.\n\nVocê errou!\nTotal de vidas: ' + vidas)
                    verificaVida()
                }         
            }
        }
    }
}

function verificaVida(){
    if (vidas == 0){
        alert('\nAcabaram as suas vidas')
    }if (vidas == 3){
        alert('\nVocê está começando com ' + vidas + ' vidas')
    } 
}