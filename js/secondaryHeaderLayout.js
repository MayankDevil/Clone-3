/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/secondaryHeaderLayout.js
*/
try
{
    /*
        [ secondary header layout ]-------------------------------------------
    */ 
    function secondary_Header_Layout()
    {
        {
            return (`
                <!-- ( person identiry detail ) -->
                <div class="" id="person">

                    <div id="person_dp">
                        <span class="bi bi-person-circle"></span>
                    </div>

                    <div id="person_name"> Mayank </div>

                </div>
                <!-- ( feature ) -->
                <div class="" id="features">
                    
                    <a href="#" class="feature">
                        <span class="bi bi-camera-video-fill"></span>
                    </a>
                    <a href="#" class="feature">
                        <span class="bi bi-telephone-fill"></span>
                    </a>
                    <a href="#" class="feature">
                        <span class="bi bi-three-dots-vertical"></span>
                    </a>

                </div>
            `)
        }
    }
}
catch(error)
{
    console.error(`[ secondary header layout ] : ${error}`)
}
// the end ===