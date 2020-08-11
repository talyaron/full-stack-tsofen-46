
document.getElementById("languages2").selectedIndex = "2";
// to send a mistake with the translate 
// to edit it on database ( JSON ) 
// fetsh get 
function SendMistake() {

    console.log(1)
    //alert(document.getElementById('entry').value)
    ShowHide( document.getElementById('main'))
    ShowHide( document.getElementById('showSendmistake'))
    document.getElementById('From1').innerText=document.getElementById('languages1').value+" :";

    document.getElementById('showerrorword').innerText=document.getElementById('entry').value;
    document.getElementById('To1').innerText=document.getElementById('languages2').value+" :";

}

function SendMistakeToServer()
{  console.log("SendMistakeToServer SendMistakeToServer")
    var TargetWord = document.getElementById('entry').value;
    var From = document.getElementById('languages1').value;
    var To = document.getElementById('languages2').value;
    var newword = document.getElementById('correctWord').value;
    //alert(document.getElementById('correctWord').value)
    fetch('/SendMistakeToServer', {
        method: 'POST',
        body: JSON.stringify({
            TargetWord,
            From,
            To,
            newword
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
             alert("Thank's");
            window.location.replace("index.html");


        })




}
function ShowHide(elem) {
     if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
  }
//this function to get a tran for the word automaticly 
// fetch post and get 
function PostTranWord() {
    var TargetWord = document.getElementById('entry').value;
    var From = document.getElementById('languages1').value;
    var To = document.getElementById('languages2').value;

    console.log("PostTranWord running ...")
    fetch('/PostfromDic', {
        method: 'POST',
        body: JSON.stringify({
            TargetWord,
            From,
            To
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            console.log("Marshood")
            const { toreturn } = data;
            //console.log(data)
            console.log("mmmm" + toreturn)
            // const { success } = data;
            //console.log(success + "aa");
            if (toreturn == "not Found") {
                //documnt.getElementById("GetAnswer").value = "no found!!";
                document.getElementById("TranslationR").value = "Not Found try Again !";

            } else {
                document.getElementById("TranslationR").value = toreturn;
            }

        })



}