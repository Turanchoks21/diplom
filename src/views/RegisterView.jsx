import React from "react";
import { useTranslation } from "react-i18next";
import UserForm from "../components/forms/UserForm";
import FormInput from "../components/inputs/FormInput";
import FormButtonOutline from "../components/buttons/FormButtonOutline";
import FormButtonSolid from "../components/buttons/FormButtonSolid";

function RegisterView() {
  const { t } = useTranslation();

  return (
    <UserForm>
      <span className="text-xl text-pale-yellow">{t('registerTitle')}</span>
      <FormInput>{t('nickname')}</FormInput>
      <FormInput>Email</FormInput>
      <FormInput>{t('password')}</FormInput>
      <FormInput>{t('data')}</FormInput>
      <FormButtonSolid>{t('registerUser')}</FormButtonSolid>
      <FormButtonOutline to='/login'>{t('haveAccount')}</FormButtonOutline>
    </UserForm>
  );
}

export default RegisterView;
