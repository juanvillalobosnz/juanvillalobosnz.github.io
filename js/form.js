window.addEventListener('load', () => {
    const btn = document.getElementById('btn_send');
    const form = document.getElementById('form');
    const nameInput = document.querySelector("input[name='name']");
    const emailInput = document.querySelector("input[name='email']");
    const messageInput = document.querySelector("textarea[name='message']");
    /*const checkbox_web = document.querySelector("input[name=web]");
    const checkbox_software = document.querySelector("input[name=software]");
    const checkbox_pruebas = document.querySelector("input[name=pruebas]");
    const checkbox_mobile = document.querySelector("input[name=mobile]");
    */
  
    nameInput.isValid = () => isValidName(nameInput.value.trim() && nameInput.value.trim());
    emailInput.isValid = () => isValidEmail(emailInput.value.trim());
    messageInput.isValid = () => isValidMessage(messageInput.value.trim());
  
    const inputFields = [nameInput, emailInput,messageInput];
  
    const isValidName = (name) => {
        const re = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
        return re.test(String(name).toLowerCase()); 
    };
  
    const isValidEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };
  
    const isValidMessage = (message) => {
        const re = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ,.0-9\s]+$/;
        return re.test(String(message).toLowerCase());
    };
  
    function clearInputs(){
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }
  
  
    let shouldValidate = false;
    let isFormValid = false;
  
    const validateInputs = () => {
      if (!shouldValidate) return;
  
      isFormValid = true;
      inputFields.forEach((input) => {
        input.classList.remove("invalid");
        input.nextElementSibling.classList.add("hide");
  
        if (!input.isValid()) {
          input.classList.add("invalid");
          isFormValid = false;
          input.nextElementSibling.classList.remove("hide");
        }
      });
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      shouldValidate = true;
      validateInputs();
      validateCheckBox();
      if (isFormValid) {
        //btn.value = 'Enviando...';
  
        const serviceID = 'default_service';
        const templateID = 'template_utnru1l';
  
        emailjs.sendForm(serviceID, templateID, this.form).then(() => {
            //btn.value = 'Enviar';
            setTimeout(() => {
              clearInputs();
          }, 2000);
          success.style.display = 'block';
        },(err) => {
            btn.value = 'Enviar';
            danger.style.display = 'block';
            alert(JSON.stringify(err));
        });
  
        setTimeout(() => {
          danger.style.display = 'none';
          success.style.display = 'none';
        }, 4000);
        
      }
    });

    inputFields.forEach((input) => input.addEventListener("input", validateInputs));
  });