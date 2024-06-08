import React from "react";
import { useTranslation } from "react-i18next";
import FormWraper from "../components/forms/FormWraper";
import FormInput from "../components/inputs/FormInput";
import TitleWraper from "../components/forms/TitleWraper";
import ButtonOutline from "../components/buttons/ButtonOutline";
import ButtonSolid from "../components/buttons/ButtonSolid";
import ButtonWraper from "../components/forms/ButtonWraper";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginView() {
  const { t } = useTranslation();

  const LoginSchema = Yup.object().shape({
    nick_name: Yup.string()
      .required(t("emptyField"))
      .min(3, t("errorNick"))
      .max(16, t("errorNick")),
    password: Yup.string()
      .required(t("emptyField"))
      .min(8, t("errorPassword"))
      .max(32, t("errorPassword")),
  });

  const LoginForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(LoginSchema),
    });

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <FormWraper>
        <TitleWraper>{t("loginTitle")}</TitleWraper>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <FormInput
            name="nick_name"
            id="nick_name"
            register={register}
            error={errors.nick_name}
          >
            {t("nickname")}
          </FormInput>
          <FormInput
            type="password"
            name="password"
            id="password"
            register={register}
            error={errors.password}
          >
            {t("password")}
          </FormInput>
          <ButtonWraper>
            <ButtonSolid type="submit">{t("loginUser")}</ButtonSolid>
            <ButtonOutline>{t("forgotPassword")}</ButtonOutline>
            <ButtonOutline to="/register">{t("createUser")}</ButtonOutline>
          </ButtonWraper>
        </form>
      </FormWraper>
    );
  };

  return <LoginForm />;
}

export default LoginView;
