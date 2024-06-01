import ButtonSolid from './../components/buttons/ButtonSolid'

function NomeView() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="relative items-center flex flex-col
          col-span-1 gap-6
        ">
          <div
            className="bg-clip-text text-transparent bg-gradient-to-r 
          from-[#833ab4] via-[#fd1d1d] to-[#fcb045]
            font-bold text-5xl xxl:text-9xl py-3
          "
          >
            Start chating!
          </div>
            <ButtonSolid to='/login'>
              Let`s do this
            </ButtonSolid>
        </div>
      </div>
    </>
  );
}

export default NomeView;
