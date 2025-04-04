import { FunctionalComponent } from "preact/src/index.d.ts";


export const Header: FunctionalComponent = () => {
    return(
        <div>
            <a href={"/"}>
                <button>Home</button>
            </a>
        </div>
    )
}

export default Header;