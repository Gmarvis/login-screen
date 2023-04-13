 function message(){
            let name = document.getElementById("name");
            let password = document.getElementById("password")
            let msg = document.getElementById('msg')
            const success = document.getElementById('success')
            const danger = document.getElementById('danger')

            if(name.value === "" || password.value === ""){
                danger.style.display = 'block'
            }
            else { 
                setTimeout(() => {
                name.value = ""
                password.value = ""
            }, 5000);
            success.style.display = 'block'
        }

        setTimeout(()=>{
            success.style.display = 'none'
            danger.style.display = 'none'
        }, 4000)


        }
