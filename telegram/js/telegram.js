// Handle form submission
    const botToken = '6198334627:AAFGHUKh6F5GEUH0fhBX6NDRmYkYFl9im4E';
    const chatId = '566903442';  
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;


    function sendForm (e)  {
        e.preventDefault();

        
        // console.log(e.target.id);
        let message = `<b>Зацікавив курс</b>\n`;
        message += `<b>Ім'я:</b>\n ${this.name.value}\n`;
        message += `<b>телефон:</b>\n ${this.phone.value}\n`;
        message += `<b>емейл:</b>\n ${this.email.value}`;

        axios.post(apiUrl, {
            chat_id: chatId,
            parse_mode: 'html',
            text: message
        })
        .then((res)=> {
            this.name.value = "";
            this.phone.value = "";
            this.email.value = "";
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            document.getElementById(e.target.id).style.display="none";
            if (["footer-moto-interest", "moto-school__asking-form"].includes(e.target.id)) {
                document.getElementById(e.target.id).style.display="block";
            }
            document.body.style.overflow = "scroll";
            showThnx();
            
        })
       
    }
    // let formId = document.getElementsByTagName('form');
    // let currentForm = formId.getElementById(id);
    // currentForm.addEventListener('submit', sendForm);

    let interestForm = document.getElementById('interest-form');
    let motoSchoolAskingForm = document.getElementById('moto-school__asking-form');
    let footerMotoInterest = document.getElementById('footer-moto-interest');
    let getCertificateForm = document.getElementById('get-certificate-form');
    let haveCertificateForm = document.getElementById('have-certificate');

    interestForm.addEventListener('submit', sendForm);
    motoSchoolAskingForm.addEventListener('submit', sendForm);
    footerMotoInterest.addEventListener('submit', sendForm);
    getCertificateForm.addEventListener('submit', sendForm);
    haveCertificateForm.addEventListener('submit', sendForm);