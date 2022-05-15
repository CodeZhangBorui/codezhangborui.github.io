function EXAM() {
    ActiveID = prompt("请输入授权码","");
    ExamID = prompt("请输入全真考场序号","");
    ScoreIpt = Number(prompt("请输入成绩",120));
    Score = String(ScoreIpt*100)
    JumpURL = "http://www.itexam.com/User/submitscore/" + ActiveID + "_EXAM" + ExamID + "_" + Score;
    console.log("JumpURL = " + JumpURL);
    alert(`授权码：${ActiveID}\n考场序号：${ExamID}\n成绩：${ScoreIpt}\n即将跳转：${JumpURL}`);
    window.location.href = JumpURL;
}
function Moni() {
    ActiveID = prompt("请输入授权码","");
    ExamID = prompt("请输入全真考场序号","");
    ScoreIpt = Number(prompt("请输入成绩",120));
    Score = String(ScoreIpt*100)
    JumpURL = "http://www.itexam.com/User/submitscore/" + ActiveID + "_Moni" + ExamID + "_" + Score;
    console.log("JumpURL = " + JumpURL);
    alert(`授权码：${ActiveID}\n考场序号：${ExamID}\n成绩：${ScoreIpt}\n即将跳转：${JumpURL}`);
    window.location.href = JumpURL;
}
