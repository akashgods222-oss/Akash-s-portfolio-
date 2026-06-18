window.onload = function () {
    const button = document.getElementById("myBtn");
    
    if (button) {
        button.addEventListener("click", function () {
        const nameValue = document.getElementById("userName") .value.trim();
        const emailValue = document.getElementById("userEmail") .value.trim();
        
        // Khali dabba aur poora form pakadne ke liye variables
      const msgDabba = document.getElementById("successMessage");
      const pooraForm = document.querySelector("form");
      
        if (nameValue === "" || emailValue  === "") {
            alert("oi, first fill the form! 🫰");
        } else {
        // alert hataya, ab chalega asli jaadu!
        
        // 1. Poore form ko screen se gayab karo
        pooraForm.style.display = "none"; 
        
        // 2. Khali dabbe ke andar mast text daal do
        msgDabba.innerHTML = "Thank you, bhai! Form submit ho gaya hai. 🔥🚀";
      }
        });
    }
};
