import './Folder.scss'

export const Folder = (props) => {
    console.log(props.name)
    return (
        <>
        <div className="folder" data-content={props.name}>
            <div className="paper one"></div>
            <div className="paper two"></div>
            <div className="paper three"></div>
            <div className="paper four"></div>
        </div>
        </>
    )
}
