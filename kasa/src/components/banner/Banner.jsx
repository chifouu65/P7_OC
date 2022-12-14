function HomeBanner({photo, children, classZ}) {
    return (
        <div className={classZ}>
            {
                children ? <h1 className={'banner_header_title'}>
                <span className={'banner_header_title_span'}>
                    {children}
                </span>
            </h1> : null
            }
            <img src={photo} alt={children}/>
        </div>
    )
}

export default HomeBanner