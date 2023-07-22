const CustomDialog = ({ title, content, style }) => {
    // const text = isSuccess ? "You are a good dev." : "You are a gher dev."
    return (
        <div className="dialog" style={style}>
            <h2>{title}</h2>
            <pre>{content}</pre>
        </div>
    );
};

export { CustomDialog };