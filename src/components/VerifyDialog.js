const VerifyDialog = ({ isSuccess, style }) => {
    const text = isSuccess ? "You are a good dev." : "You are a gher dev."
    return (
        <div className="dialog" style={style}>
            <h2>Congrats</h2>
            <p>{text}</p>
        </div>
    );
};

export { VerifyDialog };