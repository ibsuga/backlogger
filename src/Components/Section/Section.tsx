import './Section.css'


const Section = (props: {
    children: JSX.Element | JSX.Element[]
    title?: string,
    title_bg?: string,
    tools?: JSX.Element[]
    tools_end?: JSX.Element[]
}) => {
    return (
        <div className="Section">
          <div className="Section__header">
            { props.title && <div className="Section__title">{props.title}</div> }
            {
              (props.tools ?? props.tools_end) &&
              <div className="Section__tools">
                { props.tools && <div className="Section__tools--start">{ props.tools.map((tool, index) => <div key={index}>{tool}</div>) }</div>}
                { props.tools_end && <div className="Section__tools--end">{ props.tools_end.map((tool, index) => <div key={index}>{tool}</div>) }</div>}
              </div>
            }
            { props.title_bg && <div className="section-title__bg" style={{backgroundImage: `url(${props.title_bg})`}} />}
          </div>
          <div className="section-content">
              {props.children}
          </div>
        </div>
    )
}

export default Section;