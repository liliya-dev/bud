export interface User {
  email: string;
  name: string;
  surname: string;
  id: string;
  phone: string;
}

export interface InitialState {
  email: string;
  name: string;
  surname: string;
  phone: string;
  additionalPhone: string;
  additionalMail: string;
  isPhoneVisible: boolean;
  isMailVisible: boolean;
  id: string;
}