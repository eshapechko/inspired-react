import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

export const Navigation = () => (
    <nav>
        <div className="container">
            <Gender />
            <Category />
        </div>
    </nav>
);
