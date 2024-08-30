import PopExit from "../../components/PopUps/PopExit/PopExit"

export const ExitPage = ({logout}) => {
    return (
        <>
        <PopExit logout={logout}/>;
        </>
    )
};
export default ExitPage;