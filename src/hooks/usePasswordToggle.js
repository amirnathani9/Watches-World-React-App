import { useState } from "react";

export const usePasswordToggle = () => {
    const [hidePass, sethidePass] = useState(true);

    const showHide = () => {
      hidePass ? sethidePass(false) : sethidePass(true);
    };
    return {showHide, hidePass}
}