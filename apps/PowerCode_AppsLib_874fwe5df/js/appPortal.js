vls = verifyLoginStatus();
if(
    vls == "NOT_LOGIN" || 
    vls == "USER_NOT_FOUND" || 
    vls == "SHA512PWD_NOT_FOUND" ||
    vls == "WRONG_AUTHCODE" ||
    vls == "WRONG_PWD"
) {
    setTimeout("window.location='/loginx'",2000)
} else {
    setTimeout("window.location='/apps/PowerCode_PowerStore_874fwe5df/'",5000)
}