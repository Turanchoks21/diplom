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

function RegisterView() {
  const { t } = useTranslation();

  const RegisterSchema = Yup.object().shape({
    nick_name: Yup.string()
      .required(t("emptyField"))
      .min(3, t("errorNick"))
      .max(16, t("errorNick")),
    email: Yup.string().email(t("invalidEmail")).required(t("emptyField")),
    password: Yup.string()
      .required(t("emptyField"))
      .min(8, t("errorPassword"))
      .max(32, t("errorPassword")),
    passwordConfirm: Yup.string()
      .required(t("emptyField"))
      .oneOf([Yup.ref("password")], t("errorPasswordConfirm")),
  });

  function RegisterForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(RegisterSchema),
    });

    function onSubmit(data) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = {
        nick_name: data.nick_name,
        email: data.email,
        password: data.password,
        birthDate: null,
        avatar: null,
      };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    return (
      <FormWraper>
        <TitleWraper>{t("registerTitle")}</TitleWraper>
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
            name="email"
            id="email"
            register={register}
            error={errors.email}
          >
            Email
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
          <FormInput
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            register={register}
            error={errors.passwordConfirm}
          >
            {t("confirmPassword")}
          </FormInput>
          <ButtonWraper>
            <ButtonSolid type="submit">{t("registerUser")}</ButtonSolid>
            <ButtonOutline to="/login">{t("haveAccount")}</ButtonOutline>
          </ButtonWraper>
        </form>
      </FormWraper>
    );
  }

  return <RegisterForm />;
}

export default RegisterView;
