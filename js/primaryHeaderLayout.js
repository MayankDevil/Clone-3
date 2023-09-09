/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/primaryHeaderLayout.js
*/
try
{
    /*
        [ primary header layout ]------------------------------
    */ 
    function primary_Header_Layout()
    {
        {
            return (`
                <!-- ( brand name ) -->
                <div class="" id="brand_name"> Whatsapp </div>
                
                <!-- ( tools ) -->
                <div class="" id="tools">
                    
                    <a href="#" class="tool">
                        <span class="bi bi-camera-fill"></span>
                    </a>
                    <a href="https://mastermayank.w3spaces.com" target="_blank" class="tool">
                        <span class="bi bi-search"></span>
                    </a>
                    <button href="#" class="tool" id="dot_menu">
                        <span class="bi bi-three-dots-vertical"></span>
                    </button>

                </div>
                
                <!-- ( float menu ) -->
                <div class="" id="flt_menu">
                    <a herf="#" class="link"> New group </a>
                    <a herf="#" class="link"> New broadcast </a>
                    <a herf="#" class="link"> Linked device </a>
                    <a herf="#" class="link"> Started  messages </a>
                    <a herf="#" class="link"> Payments </a>
                    <a herf="#" class="link"> Settings </a>
                </div>
            `)
        }
    }
}
catch(error)
{
    console.error(`[ primary header layout ] : ${error}`)
}
// the end ===
