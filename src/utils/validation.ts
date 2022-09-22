import * as yup from "yup";

const requiredMessage = 'Campo obrigatório'
const invalidEmailMessage = 'Insira um e-mail válido'
const nameLengthMessage = 'Seu nome deve ter no mínimo 3 caracteres'
const passwordLengthMessage = 'Sua senha deve ter no mínimo 4 caracteres'
const invalidConfirmPasswordMessage = 'Senhas não coincidem'

const authSchema = yup.object({
  name: yup.string().required(requiredMessage).min(3, nameLengthMessage),
  email: yup.string().required(requiredMessage).email(invalidEmailMessage),
  password: yup.string().required(requiredMessage).min(4, passwordLengthMessage),
  confirmPassword: yup.string().required(requiredMessage).oneOf([yup.ref('password')], invalidConfirmPasswordMessage),
}).required();

export { authSchema }