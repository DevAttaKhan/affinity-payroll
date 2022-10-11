const ArrowIcon = ({className, color, width, height}) => {
    return (
        <svg className={`feather feather-chevron-down ${className || ""}`}
             xmlns="http://www.w3.org/2000/svg"
             width={width ? width : "24"}
             height={height ? height : "24"}
             viewBox="0 0 24 24" fill="none"
             stroke={color ? color : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    )
}
export default ArrowIcon;