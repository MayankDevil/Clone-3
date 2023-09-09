/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/contentLayout.js
*/
try
{
    /*
        [ content inside layout ]------------------------------
    */ 
    function contentLayout()
    {
        {
            return (`
                <!--
                    ---------------
                    [ nav section ]------------------------------------
                    ---------------
                -->
                <nav id="navbar">
                    
                    <span class="bi bi-people-fill" id="group_icon"></span>
                    
                    <div id="nav">
                        <a href="#" class="active"> CHATS </a>
                        <a href="#status"> STATUS </a>
                        <a href="#call"> CALLS </a>
                    </div>
                    
                </nav>
                <!--
                    ----------------
                    [ chat section ]------------------------------------
                    ----------------
                -->
                <section id="chats"></section>
                <!--
                    ------------------
                    [ message button ]-----------------------------------
                    ------------------
                -->
                <div id="msg_btn">
                    <span class="bi bi-chat-right-text-fill"></span>
                </div>
                
                <!-- <span class="bi bi-collection"></span> -->
            `)
        }
    }
}
catch(error)
{
    console.error(`[ content layout ] : ${error}`)
}
// the end ===