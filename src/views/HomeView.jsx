import ButtonSolid from "./../components/buttons/ButtonSolid";
import { useTranslation } from "react-i18next";

function NomeView() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className="relative items-center flex flex-col
          col-span-1 gap-6
        "
        >
          <div
            className="bg-clip-text text-transparent bg-gradient-to-r 
          from-[#833ab4] via-[#fd1d1d] to-[#fcb045]
            font-bold text-5xl xxl:text-9xl py-3
          "
          >
            {t("welcome")}
          </div>
          <div className="w-full max-w-xl flex">
            <ButtonSolid to="/login">{t("letsDoThis")}</ButtonSolid>
          </div>
        </div>
      </div>
    </>
  );
}

export default NomeView;
