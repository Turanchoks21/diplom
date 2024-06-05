import React from "react";
import { useTranslation } from "react-i18next";
import FormWraper from "../components/forms/FormWraper";
import FormInput from "../components/inputs/FormInput";
import TitleWraper from "../components/forms/TitleWraper";
import ButtonOutline from "../components/buttons/ButtonOutline";
import ButtonSolid from "../components/buttons/ButtonSolid";
import ButtonWraper from "../components/forms/ButtonWraper";

function RegisterView() {
  const { t } = useTranslation();

  return (
    <FormWraper>
      <TitleWraper>{t("registerTitle")}</TitleWraper>
      <FormInput>{t("nickname")}</FormInput>
      <FormInput>Email</FormInput>
      <FormInput type="password">{t("password")}</FormInput>
      <FormInput type="password">{t("password")}</FormInput>
      <FormInput>{t("data")}</FormInput>
      <ButtonWraper>
        <ButtonSolid to="/main">{t("registerUser")}</ButtonSolid>
        <ButtonOutline to="/login">{t("haveAccount")}</ButtonOutline>
      </ButtonWraper>
    </FormWraper>
  );
}

export default RegisterView;
