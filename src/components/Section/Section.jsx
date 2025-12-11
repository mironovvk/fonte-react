import './Section.scss'

const Section = ({title, children}) => {
  return (
    <section className="section">
      <div className="section__header">
        <h3 className="section__header-title">  {title}</h3>
      </div>
      <div className="section__body">
        {children}
      </div>
    </section>
  )
}

export default Section