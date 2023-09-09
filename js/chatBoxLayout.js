/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/chatBoxLayout.js
*/
try
{
    /*
        -------------------------------------------------------------------------------
        [ chat box layout ] get chat data argument and return layout
        -------------------------------------------------------------------------------
    */ 
    function chat_Box_Layout(data)
    {
        if (data.person_dp == null)
        {
            return (`
                <div class="chatBox">

                    <div class="chat_dp">
                        <span class="bi bi-person-circle"></span>
                    </div>
                    
                    <div class="chat_detail">
                        <div>
                            <div class="person_name"> ${data.person_name} </div>
                            <time> ${data.chat[data.chat.length - 1].time} </time>
                        </div>
                        <div>
                            <div class="short_message"> ${data.chat[0].data} </div>
                            <div class="notice"> 1 </div>
                        </div>
                    </div>

                </div>
            `)
        }
        else
        {
            return (`
                <div class="chatBox">

                    <!-- ( chating box display picture ) -->
                    <div class="chat_dp">
                        <img src='${data.person_dp }' class='image_dp'>
                    </div>
                    
                    <!-- ( chat detail ) -->
                    <div class="chat_detail">
                        <div>
                            <div class="person_name"> ${data.person_name} </div>
                            <time> ${data.chat[data.chat.length - 1].time} </time>
                        </div>
                        <div>
                            <div class="short_message"> ${data.chat[0].data} </div>
                        </div>
                    </div>

                </div>
            `)
        }
    }
}
catch(error)
{
    console.error(`[ chat box layout ] : ${error}`)
}
// the end ===