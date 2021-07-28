function checkbutton() {
    alert("회원가입 창으로 이동합니다.");
    window.location = 'signup.html'
}

function checkbutton1() {
    var number = prompt("인증번호를 입력하세요")
    if (number == 1234)
        confirm("인증번호가 일치합니다.")
    else
        confirm("인증번호가 불일치합니다. 인증번호 받기를 다시 클릭하세요")
        
}