function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}
let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);


 function Duyetcautraloi(answer) {
     let result = "";
     if (answer) {
         result = "Có khi bước không chung đường vậy lại hay.";
     }else{
         result = "Đã vấn vương rồi như sương"
     }
     return result;
 }
 let duyet = confirm("Ta có hạnh phúc với chính ta ngày hôm nay?");
 let traloi = Duyetcautraloi(duyet);
 alert(traloi);