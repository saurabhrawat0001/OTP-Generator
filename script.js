function generateOtp(){
    let otp = '';
    for(i=0;i<5;i++){
        otp += Math.floor(Math.random()*10);
    }
    return otp;
}

document.getElementById('btn').addEventListener('click', function(){
    let otp = generateOtp();
    document.getElementById('otp').textContent = `Your OTP is: ${otp}`;
})