export default function SectionComponent({imgUrl, title, content, imgAlt}) {
    return (
        <>
        <section className="trackDeliverySection">
        <img src={imgUrl} alt={imgAlt} loading="lazy"/>
        <article className="text">
            <p className="title">{title}</p>
            <p>
            {content}
            </p>
        </article>
        </section>
        </>
    )
}