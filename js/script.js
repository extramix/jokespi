/* $(document).ready(function () {
    $.getJSON("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke", function (json) {
        $(".type").html(json.type);
        $(".setup").html(json.setup);
        $(".punchline").html(json.punchline);
       
    });
});
 */

let type = document.querySelector('.type');
let setup = document.querySelector('.setup');
let punchline = document.querySelector('.punchline');


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/extramix/official_joke_api/master/jokes/index.json', true);
xhr.onload = function () {
    if(this.status == 200) {
        let jokes = JSON.parse(this.responseText);
        
        var randomIndex = Math.floor(jokes.length*Math.random());
        var joke = jokes[randomIndex];
        type.innerHTML = joke.type;
        setup.innerHTML = joke.setup;
        punchline.innerHTML = joke.punchline;
    }

}
xhr.send();

//New joke button
let button = document.getElementById('newjoke').addEventListener("click", function(){
    xhr.open('GET', 'https://raw.githubusercontent.com/extramix/official_joke_api/master/jokes/index.json', true);
    xhr.onload = function () {
    if(this.status == 200) {
        let jokes = JSON.parse(this.responseText);
        
        var randomIndex = Math.floor(jokes.length*Math.random());
        var joke = jokes[randomIndex];
        type.innerHTML = joke.type;
        setup.innerHTML = joke.setup;
        punchline.innerHTML = joke.punchline;
    }

}
xhr.send();
});
