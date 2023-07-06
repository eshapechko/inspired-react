import { useDispatch } from "react-redux";
import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice";

export const Navigation = () => {
    const location = useLocation();
    const gender = location.pathname.split("/")[1] || "women";

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveGender(gender));
    }, [gender, dispatch]);

    return (
        <nav>
            <Container>
                <Gender />
                <Category />
            </Container>
        </nav>
    );
};
