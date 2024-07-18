import React from 'react';

class RAG extends React.Component {
  constructor(props) {
    super(props);
    // You can now access this.props
    console.log(props);
  }
  // Function to replace markdown with HTML tags
  replaceMarkdown(markdownText) {
    // Replace **text** with <b>text</b>
    let formattedText = markdownText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    // Replace [link text](url) with <a href="url">link text</a>
    formattedText = formattedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Replace \n with <br/>
    formattedText = formattedText.replace(/\n/g, '<br/>');

    // Identify standalone links and format them, avoiding duplicates
    formattedText = formattedText.replace(/(^|\s)(https?:\/\/[^\s<]+)/g, '$1<a href="$2">$2</a>');

    return formattedText;
  }

  applyLinkStyles() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.color = 'blue';
    });
  }

  componentDidMount() {
    this.applyLinkStyles();
  }

  componentDidUpdate() {
    this.applyLinkStyles();
  }

  render() {
    const data = JSON.parse(this.props.message);
    const paragraph = `${data.para}`;

    const links = data.links

    const formattedText = this.replaceMarkdown(paragraph);

    return (
      <div style={{ fontSize: '12px',maxWidth: "100%" ,lineHeight: '1.6' }}>
        <div dangerouslySetInnerHTML={{ __html: formattedText }}></div>
        <br/>
        <h3><b>Follow this link for further reference</b></h3>
        <div>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default RAG;
