var s = "";

var res = 0;
var ec = 0;
$(document).keydown(
    function (event) {
        var ec = event.keyCode;
        console.log(ec);
        // console.log(ec);
        if (ec == 8)
            s = s.slice(0, -1);
        else if ((ec >= 96 && ec <= 105) || (ec == 107 || ec == 110 || ec == 109 || ec == 106 || ec == 111))
            s = s + event.key;
        else if (ec == 13) {
            res = eval(s);
            s = res;

        }
        else if (ec == 46)
            s = "";


        $(".input").text(s);
    }
)

$(".button").click(function (e) {
    var vc = e.target.innerText;

    console.log(vc);
    // console.log(ec);
    switch (vc) {
        case 'AC':
            {
                s="";
                $(".input").text(s);
            }
            break;
        case 'C':
            {
                s = s.slice(0, -1);
                $(".input").text(s);
            }
            break;
        case '=':
            {
                // res=eval(s);
                // s=res;
                try {
                    s=eval(s)
                    s=s.toString();
                $(".input").text(s);
                } catch (error) {

                    $(".input").text("Error!!");
                }
                
            }
            break;
       default:
        {
            s=s+vc;
            $(".input").text(s);
        }

    }


    // $(".input").text(s);
    //console.log( typeof(e.target.innerText));
})