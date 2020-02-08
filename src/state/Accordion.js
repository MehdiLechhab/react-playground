import React from "react";

class Accordion extends React.Component {
	static defaultProps = { 
		sections: [] 
	};
	state = {
    	currentSectionIndex: null
  	};

  	handleButtonClick = (index) => {
    console.log('button clicked!', { index })
    this.setState({ currentSectionIndex: index })

  }


  	renderButton(section, idx, currentIndex) {
  		return (
  			<li key={idx}>
  				<button onClick={() => this.handleButtonClick(idx)}>{section.title}</button>
  				{(currentIndex === idx) && <p>{section.content}</p>}
  			</li>
  		)
  	}
 
  render() {
  	const {currentSectionIndex} = this.state
  	const {sections} = this.props
    return (
      <ul>
        {sections.map((section, idx) =>
        	this.renderButton(section, idx, currentSectionIndex)
        	)}
      </ul>
    )
  }
}


export default Accordion;