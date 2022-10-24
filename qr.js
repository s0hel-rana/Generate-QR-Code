const wrapper = document.getElementById("wrapper");
generateBtn = document.getElementById("geneBtn");
 qrInput = document.getElementById("inputValue");
 qrImg = document.getElementById("qrImg");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
    });
});
