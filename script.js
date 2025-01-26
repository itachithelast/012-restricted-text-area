const subjectInp = document.getElementById("subject-input")
const emailInp = document.getElementById("email-input")
const textarea = document.getElementById("textarea")
const submitBtn = document.getElementById("submit")


subjectInp.addEventListener("beforeinput",(e)=>{
    changeCount(e)
})
emailInp.addEventListener("beforeinput",(e)=>{
    changeCount(e)
})
textarea.addEventListener("beforeinput",(e)=>{
    changeCount(e)
})
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    subjectInp.value=''
    emailInp.value=''
    textarea.value=''
})

const changeCount = (e)=>{
    const count = e.target.value.length
    const max = Number(e.target.nextElementSibling.querySelector("#word-limit").textContent)
    const wordCount = e.target.nextElementSibling.querySelector("#word-count")
    if (count >= max){
        e.target.style.border = "1px solid red"
        e.preventDefault()
    } else  {wordCount.textContent = count}
}