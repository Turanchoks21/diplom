import React from "react";
import { useTranslation } from "react-i18next";
import UserForm from "../componets/forms/UserForm";
import FormInput from "../componets/inputs/FormInput";
import FormButtonOutline from "../componets/buttons/FormButtonOutline";
import FormButtonSolid from "../componets/buttons/FormButtonSolid";

function LoginView() {
  const { t } = useTranslation();

  return (
    <>
      <UserForm>
        <span className="text-xl text-pale-yellow">{t('loginTitle')}</span>
        <FormInput>{t('nickname')}</FormInput>
        <FormInput>{t('password')}</FormInput>
        <FormButtonSolid>{t('loginUser')}</FormButtonSolid>
        <FormButtonOutline>{t('forgotPassword')}</FormButtonOutline>
        <FormButtonOutline to="/register">{t('createUser')}</FormButtonOutline>
      </UserForm>
    </>
  );
}

export default LoginView;
