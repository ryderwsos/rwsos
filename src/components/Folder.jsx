import './Folder.scss'

export const Folder = (props) => {
    return (
        <>
            <div className='folder'>
                <div className='back'></div>
                <div className='tab'></div>
                <div className='paper'></div>
                <div className='front'> <p>{props.name}</p> </div>
            </div>
        </>
    )
}
