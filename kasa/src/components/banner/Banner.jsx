
function HomeBanner({photo, children, classZ}) {
    return (
        <div className={classZ}>
            <h1 className={'banner_header_title'}>
                <span className={'banner_header_title_span'}>
                    {children}
                </span>
            </h1>
            <img src={photo} alt={'alt'}/>
        </div>
    )
}

export default HomeBanner