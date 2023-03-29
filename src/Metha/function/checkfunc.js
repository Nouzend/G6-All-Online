//check password
const checkPassword = (password, err) => {
    let passwordError = "";
    if (!password) {
      passwordError = "กรุณากรอกรหัสผ่าน";
    } else if (password.length < 8) {
      passwordError = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]+$/.test(password)
    ) {
      passwordError =
        "รหัสผ่านต้องมีตัวอักษรพิมพ์หรือพิมเล็กอย่างน้อย 1 ตัวอักษร";
    }
    return passwordError;
  };
  //checks email address
  const checkemail = (email) => {
    let emailError = "";
    if (!email) {
      emailError = "กรุณากรอกอีเมล";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      emailError = "อีเมลไม่สามารถใช้งานได้";
    }
    return emailError;
  };
  //check if email
  const checkname = (Name) => {
    let NameError = "";
    if (!Name) {
      NameError = "กรุณากรอกบัญชีผู้ใช้";
    }
    if (Name.length < 5) {
      NameError = "บัญชีผู้ใช้จำเป็นต้องมีมากกว่า 5 ตัวอักษร";
    }
    return NameError;
  };
  //checks comfrimpass
  const checkConfirmPassword = (password, confirmPassword) => {
    let confirmPasswordError = "";
    if (!confirmPassword) {
      confirmPasswordError = "ยืนยันรหัสผ่านไม่สามารถใช้งานได้";
    } else if (password !== confirmPassword) {
      confirmPasswordError = "รหัสผ่านไม่ตรงกัน";
    }
    return confirmPasswordError;
  };

  module.exports = {
    checkConfirmPassword,
    checkPassword,
    checkemail,
    checkname
  }