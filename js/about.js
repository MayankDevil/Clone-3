/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/script.js
*/
try
{
   function about()
   {
        let dot_menu = document.getElementById('dot_menu')

        let flt_menu = document.getElemetById('flt_menu')

        dot_menu.onclick = () => {
        
            alert('done')
            flt_menu.style.display = `block`
        }
   }
}
catch(error)
{
    console.log(error)
}
// the end ===
