/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/script.js
*/
try
{
    

    let search_fld = document.getElementById('search_fld')
    
    let data_list = document.getElementById('data_list')

    let all_link = document.getElementsByClassName('url')
    
    data_list.style.display = 'none';

    var url = [
        "https://github.com/login",
        "https://web.telegram.org/",
        "https://en.wikipedia.org/",
        "https://twitter.com/",
        "https://www.google.com/gmail/about/",
        "https://in.linkedin.com/",
        "https://mxlinux.org/",
        "https://web.whatsapp.com/",
        "https://www.youtube.com/",
        "https://account.microsoft.com/",
        "https://exporntoons.net/recent",
    ].forEach( (element) => {

        data_list.insertAdjacentHTML("afterbegin",`<a href='${element}' class='url'> ${element} </a>`);

    })
    
    search_fld.onkeydown = () => {

        var serach_value = search_fld.value;

        
        for(i = 0; i < url.length; i++)
        {
            data = all_link[i].innerText
            
            if (search_data.upperCase().indexOf(data.upperCase()) > -1)
            {
                data_list.style.display = 'block';
            }
            else
            {
                data_list.style.display = 'none';
            }
        }
    }

    search_fld.onunfocus = () => {

        data_list.style.display = 'none';
    }

    function search_data()
    {
        url.forEach(data => ` <a href="${data}"> ${data} </a>` );
    }
    
}
catch(error)
{
    console.log(error)
}
// the end ===