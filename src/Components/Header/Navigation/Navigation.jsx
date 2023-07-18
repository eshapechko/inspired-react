import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

export const Navigation = () => {
    return (
        <nav>
            <Container>
                <Gender />
                <Category />
            </Container>
        </nav>
    );
};
