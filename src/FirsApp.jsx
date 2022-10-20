import PropTypes from "prop-types";



export const FirsApp = ({ title, subtitle }) => {



    return (
        <>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>By Lestrades</p>
        </>

    )
}
FirsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
FirsApp.defaultProps = {
    title: "No hay titulo",
    subtitle: "No hay",
}