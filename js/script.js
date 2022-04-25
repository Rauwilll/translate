// function defineButton(){
//     const textInput = document.getElementById('textInput');
//     const kyrgLetters = {
//         o:{
//             kyrgO : 'Ө',
//             kyrgo : 'ө'
//         }
//         ,
//         y:{
//             kyrgY : 'Ү',
//             kyrgy : 'ү'
//         }
//         ,
//         ng:{
//             kyrgNg : 'Ң',
//             kyrgng : 'ң'
//         }
//     };
// }     
function defineLang(){
    const textInput = document.getElementById('textInput');
    const kyrgLetters = {
        o:{
            kyrgO : 'Ө',
            kyrgo : 'ө'
        }
        ,
        y:{
            kyrgY : 'Ү',
            kyrgy : 'ү'
        }
        ,
        ng:{
            kyrgNg : 'Ң',
            kyrgng : 'ң'
        },

        оо:{
            kyrgОО : 'ОО',
            kyrgоо : 'оо'
        },
        aa:{
            kyrgAA : 'AA',
            kyrgaa : 'аа'
        },
        yy:{
            kyrgУУ : 'УУ',
            kyrgyy : 'уу'
        },
        ээ:{
            kyrgЭЭ : 'ЭЭ',
            kyrgээ : 'ээ'
        },

    };



    if(
        textInput.value.includes(kyrgLetters.o.kyrgO) ||
        textInput.value.includes(kyrgLetters.o.kyrgo) ||
        textInput.value.includes(kyrgLetters.y.kyrgY) ||
        textInput.value.includes(kyrgLetters.y.kyrgy) ||
        textInput.value.includes(kyrgLetters.ng.kyrgNg) ||
        textInput.value.includes(kyrgLetters.ng.kyrgng) ||
        textInput.value.includes(kyrgLetters.aa.kyrgAA) ||
        textInput.value.includes(kyrgLetters.aa.kyrgaa) ||
        textInput.value.includes(kyrgLetters.yy.kyrgyy) ||
        textInput.value.includes(kyrgLetters.yy.kyrgyy) ||
        textInput.value.includes(kyrgLetters.ээ.kyrgээ) ){

        alert('KyrgyzText')
    }
        else if(
        textInput.value.includes('я') ||
        textInput.value.includes('её') ||
        textInput.value.includes('нн') ||
        textInput.value.includes('ё') ||
        textInput.value.includes('ь') ||
        textInput.value.includes('ъ') ) {
   
        alert('RussianText')
    }
        else{

        alert('not kyrgyz and russian')
    }
}
