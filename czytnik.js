let plik;
let reader = new FileReader();

/*document.getElementById("przycisk").onclick = function(){
    reader.readAsText(plik);
    window.alert(reader.result);
}*/
var stronka;
var tablica;
var changeIt = 'amp;';
var putIt = '';
const regexp = new RegExp('(?<=google[.]com).*?(?=show)','gs');
const regAmp = new RegExp(changeIt, 'g');
const regWhite = new RegExp(putIt,'g');

function konwerter (input) {
    plik = document.querySelector('#select-file').files[0];
    reader.readAsText(plik);
}

function display () {
    var i = 0;
    var temp = '';
    var pom = '';
    var file = '';
    stronka = reader.result;
    stronka.toString();
    tablica = [stronka.match(regexp)];
    tablica[0].toString();
        while (tablica[0][i] != undefined){
            tablica[0][i].toString();
            temp = tablica[0][i];
            pom = temp.replaceAll("amp;", "");
            tablica[0][i] = pom;
            //console.log("https://docs.google.com" + tablica[0][i]);
            file = "https://docs.google.com" + tablica[0][i];
            pobierz(file);
            

            temp = '';

            i += 1;

        }

        
    }

    function alerty () {
        var j = 0;
        while (tablica[0][j] != undefined){
            console.log(tablica[0][j]);
            j++;

        }
    }

    async function pobierz (file) {
            let blob = await fetch(file)
            .then((response) => response.blob())
            .then((blob) => {
            // 2. Create blob link to download
             const url = window.URL.createObjectURL(new File([blob], "obraz", {type: "image/png"}));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `sample.png`);
             // 3. Append to html page
             document.body.appendChild(link);
             // 4. Force download
             link.click();
             // 5. Clean up and remove the link
             link.parentNode.removeChild(link);
            })}

    /*const downloadFile = (file) => {
        const element = document.createElement('a');
        element.setAttribute('href', 'Download Btn', target="_blank");
        element.setAttribute('download', file);      
        element.style.display = 'none';
      
        document.body.appendChild(element);
      
        element.click();
        document.body.removeChild(element);
      }*/
    



