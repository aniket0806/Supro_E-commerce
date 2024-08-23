import * as Yup from "yup";
export const signUpSchema =Yup.object({
    name: Yup.string().min(3).max(25).required("Enter the name "),
    email: Yup.string().email().required(" Enter the email"),
    password: Yup.string().min(6).required("Enter the password"),
    confirm_password: Yup.string().required()
    .oneOf([Yup.ref("password"),null],"Pasword must match"),
})