import { FunctionalComponent } from "preact/src/index.d.ts";
import Axios from "axios";

type PhoneProps = {
    phone: string;
    is_valid: boolean;
    country: string;
}

export const Phone: FunctionalComponent<PhoneProps> = (props) => {
    const phone = props.phone;
    const url = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`;

    return(
        <>
        </>
    )
}