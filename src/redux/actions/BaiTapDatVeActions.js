import {DAT_GHE_CHEAT, HUY_GHE } from "../types/BaiTapDatVeType"




export const  datGheCheatAction = (ghe) => {

  return  {
        type:DAT_GHE_CHEAT,
        ghe
    }
}

export const huyGheAction = (soGhe) => {
    return {
        type:HUY_GHE,
        soGhe
    }
}