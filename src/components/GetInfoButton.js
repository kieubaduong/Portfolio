const GetInfoButton = ({ style, onClick}) => {
    // const backgroundColor = style?.backgroundColor || '#33eaff';
    return (
        <button style={{...style}} onClick={onClick}>Get info</button>
    )
}

export { GetInfoButton };