/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/script.js
*/
try
{
    let header = document.getElementById('header')

    let footer = document.getElementById('footer')
    
    header.innerHTML = primary_Header_Layout()

    footer.innerHTML = contentLayout()

    let chats = document.getElementById('chats')

    let chatBox = document.getElementsByClassName('chatBox')
    
    /*
        -----------------------------------------------------------------------------------------
        | message section function | return message in section by take index number in argument
        -----------------------------------------------------------------------------------------
    */ 
    function message_Section(index)
    {
        let messages = document.getElementById('messages')

        let person_name = document.getElementById('person_name')

        let person_dp = document.getElementById('person_dp')

        messages.innerHTML = "" // clear message section

        person_name.innerHTML = `${chatData[index].person_name}` // set name of person
        
        /*
            [ set person dp  if not null ]-------------------------------------------------------  
        */

        if (chatData[index].person_dp != null)
        {
            person_dp.innerHTML = `<img src='${chatData[index].person_dp}' class='image_dp'>`
        }
        else
        {
            person_dp.innerHTML = `<span class="bi bi-person-circle"></span>`
        }

        messages.insertAdjacentHTML("beforeend",`<span class='date'> ${chatData[index].date} </span>`)

        /*
            [ return as loop until to chat length ]----------------------------------------------
        */ 
        for (let i = 0; i < chatData[index].chat.length; i++)
        {
            if (chatData[index].chat[i].read == 1)
            {
                messages.insertAdjacentHTML("beforeend",`<div class='left'>${chatData[index].chat[i].data} <time> ${chatData[index].chat[i].time} </time> <d/iv>`)
            }
            else
            {
                messages.insertAdjacentHTML("beforeend",`<div class='right'>${chatData[index].chat[i].data} <time> ${chatData[index].chat[i].time} </time> <d/iv>`)
            }    
        }
    }
     /*
        -----------------------------------------------------------------------------------------
        | chat section function | return numbers of chats that present in chatData
        -----------------------------------------------------------------------------------------
    */ 
        function chat_Section()
        {
            
        }
        chat_Section()
    chats.innerHTML = "" // clear chat section
    /*
        [ return as loop until to chat length ]----------------------------------------------
    */ 
    for (let i = 0; i < chatData.length; i++)
    {
        chats.insertAdjacentHTML("beforeend",`${ chat_Box_Layout(chatData[i]) }`)

        chatBox[i].onclick = () => {

            header.innerHTML = secondary_Header_Layout()

            footer.innerHTML = message_Layout()
            
            message_Section(i)

        }    
    }
    about()
}
catch(error)
{
    console.log(error)
}
// the end ===
