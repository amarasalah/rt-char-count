const textboxEl= document.getElementById("textarea");
const totaltextEl= document.getElementById("totaltext");
const textremainingEl = document.getElementById("textremaining");

textboxEl.addEventListener("keyup",()=>{
    updateTextBox();
    
})

function updateTextBox(){
    totaltextEl.innerHTML = textboxEl.value.length;
    textremainingEl.innerHTML = ( textboxEl.getAttribute("maxlength")- textboxEl.value.length )
}