import useLocalStorage from "~/hooks/useLocalStorage";

const YourScores = () => {
    const [data] = useLocalStorage("scores", {});

    return (
        <>
            Your scores
            <div>{JSON.stringify(data)}</div>
        </>
    );
};

export default YourScores;
