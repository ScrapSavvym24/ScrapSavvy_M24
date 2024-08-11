// Email validation
export const ValidateEmail = (email, tempErrors) => {
    let isValid = true;

    if (!email) {
        tempErrors["email"] = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        tempErrors["email"] = "Email is not valid";
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
