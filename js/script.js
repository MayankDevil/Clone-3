/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/script.js
*/
try
{
    // let primary_container = document.getElementById('primary_container')

    // let secondary_container = document.getElementById('secondary_container')
    
    let chats = document.getElementById('chats')

    let chatBox = document.getElementsByClassName('chatBox')

    var index = Math.floor(Math.random() * chatData.length)

    chat_Section()

    /*
        ----------------------------------------------------------------------------------------
        [ chat box layout ] get chat data argument and return layout
        ----------------------------------------------------------------------------------------
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

                    <div class="chat_dp">
                        <img src='${data.person_dp }' class='image_dp'>
                    </div>
                    
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
    /*
        -----------------------------------------------------------------------------------------
        | chat section function | return numbers of chats that present in chatData
        -----------------------------------------------------------------------------------------
    */ 
    function chat_Section()
    {
        chats.innerHTML = "" // clear chat section

        /*
            [ return as loop until to chat length ]----------------------------------------------
        */ 
        for (let i = 0; i < chatData.length; i++)
        {
            chats.insertAdjacentHTML("beforeend",`${ chat_Box_Layout(chatData[i]) }`)
            // chats.insertAdjacentHTML("beforeend",`${ chat_Box_Layout(chatData[i]) }`)
        }
    }

    for (let i = 0; i < chatBox.length; i++)
    {
        
        chatBox[i].onclick = () => {

            index = i
            window.open('second.html','_parent','width=150,height=100'.false)
        }    
    }
}
catch(error)
{
    console.log(error)
}
// the end ===