
function Tags({Object}) {
    return (
        <>
            {
                Object.map((tag, key) => (
                    <li key={key +1}>{tag}</li>
                ))
            }
        </>
    )
}

export default Tags;