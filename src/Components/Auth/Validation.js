// Email validation
export const ValidateEmail = (email, tempErrors) => {
    let isValid = true;
  
    if (!email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      tempErrors["email"] = "Only username@gmail.com format is allowed";
      isValid = false;
    }
  
    return isValid;
  }

const passwordRequirements = [
    { regex: /.{6,}/, message: "Password must be at least 6 characters long" },
    { regex: /[A-Z]/, message: "Password must contain at least one uppercase letter" },
    { regex: /\d/, message: "Password must contain at least one number" },
    { regex: /[@$!%*?&#]/, message: "Password must contain at least one special character" }
];

export const ValidatePassword = (password, tempErrors, field) => {
    let isValid = true;

    if (!password) {
        tempErrors[field] = "Password is required";
        isValid = false;
    } else {
        for (let rule of passwordRequirements) {
            if (!rule.regex.test(password)) {
                tempErrors[field] = rule.message;
                isValid = false;
                break;
            }
        }
    }

    return isValid;
}
