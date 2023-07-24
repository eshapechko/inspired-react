import { ThreeDots } from "react-loader-spinner";

const style = {
    display: "flex",
    justifyContent: "center",
    padding: "100px 0",
};

export const Preloader = () => (
    <div style={style}>
        <ThreeDots width={140} height={140} color="#8a8a8a" />
    </div>
);
