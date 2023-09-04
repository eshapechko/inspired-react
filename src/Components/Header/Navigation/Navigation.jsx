import { Container } from "../../Layout/Container/Container.jsx";
import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";

export const Navigation = () => (
  <nav>
    <Container>
      <Gender />
      <Category />
    </Container>
  </nav>
);
