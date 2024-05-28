import React from "react";
import { useTranslation } from "react-i18next";
import FormWraper from "../components/forms/FormWraper";
import FormInput from "../components/inputs/FormInput";
import TitleWraper from "../components/forms/TitleWraper";
import ButtonOutline from "../components/buttons/ButtonOutline";
import ButtonSolid from "../components/buttons/ButtonSolid";
import ButtonWraper from "../components/forms/ButtonWraper";

function LoginView() {
  const { t } = useTranslation();

  return (
    <>
      <FormWraper>
        <TitleWraper>{t("loginTitle")}</TitleWraper>
        <FormInput>{t("nickname")}</FormInput>
        <FormInput type="password">{t("password")}</FormInput>
        <ButtonWraper>
          <ButtonSolid>{t("loginUser")}</ButtonSolid>
          <ButtonOutline>{t("forgotPassword")}</ButtonOutline>
          <ButtonOutline to="/register">{t("createUser")}</ButtonOutline>
        </ButtonWraper>
      </FormWraper>
    </>
  );
}

export default LoginView;
