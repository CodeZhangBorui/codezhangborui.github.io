function EXAM() {
    ActiveID = prompt("请输入授权码","");
    ExamID = prompt("请输入全真考场序号","");
    Score = prompt("请输入成绩（一定要乘100！）","12000");
    JumpURL = "http://www.itexam.com/User/submitscore/" + ActiveID + "_EXAM" + ExamID + "_" + Score;
    console.log("JumpURL = " + JumpURL);
    alert("即将跳转：" + JumpURL);
    window.location.href = JumpURL;
}
function Moni() {
    ActiveID = prompt("请输入授权码","");
    ExamID = prompt("请输入全真考场序号","");
    Score = prompt("请输入成绩（一定要乘100！）","12000");
    JumpURL = "http://www.itexam.com/User/submitscore/" + ActiveID + "_Moni" + ExamID + "_" + Score;
    console.log("JumpURL = " + JumpURL);
    alert("即将跳转：" + JumpURL);
    window.location.href = JumpURL;
}
