import { User } from '../interfaces';

export const handleEditing = (user: User) => {
  const phones = user.phone.split('  ');
  const emails = user.email.split('  ');
  const secondPhone = phones.length === 2 ? phones[1] : '';
  const secondMail = emails.length === 2 ? emails[1] : '';
  
  const states = {
    name: user.name,
    surname: user.surname,
    phone: phones[0],
    additionalMail: secondMail,
    additionalPhone: secondPhone,
    email: emails[0],
    isMailVisible: emails.length === 2,
    isPhoneVisible: phones.length === 2,
    id: user.id
  }

  return states;
}