/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/messageLayout.js
*/
try
{
    /*
        [ message layout ]-----------------------------------------------------
    */
    function message_Layout()
    {
        {
            return (`
                <!--
                    ------------------
                    [ message section ]------------------------------------
                    ------------------
                -->
                <section class="" id="messages"></section>
                <!--
                    --------------------
                    [ type pad section ]------------------------------------
                    --------------------
                -->
                <section class="" id="type_pad">
                    
                    <div id="input_form">

                        <span class="bi bi-emoji-smile"></span>

                        <input type="text" id="text_fld" placeholder="Type a message">

                        <span class="bi bi-paperclip"></span>
                        <spn class="bi bi-ruppes"> &#8377; </spn>
                        <span class="bi bi-camera-fill"></span>

                    </div>

                    <div id="mic">
                        <span class="bi bi-mic-fill"></span>
                    </div>

                </section>
            `)
        }
    }
}
catch(error)
{
    console.error(`[ message layout ] : ${error}`)
}
// the end ===