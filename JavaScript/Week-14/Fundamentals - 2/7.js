function generateOtp() {
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp
  }
  
  console.log(`Here is your otp: ${generateOtp()}`);
  
  // OUTPUT: Here is your otp: 8315
  