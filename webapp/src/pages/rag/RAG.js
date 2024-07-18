import React from 'react';

class RAG extends React.Component {
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
    const paragraph = `It's great that you're looking for ways to help someone with dementia. Unfortunately, there's no cure for dementia, but there are many things you can do to support someone living with it. Here are some things to keep in mind: **Focus on communication:** People with dementia often have trouble with communication. Be patient, speak clearly and slowly, and use simple language. **Create a safe and familiar environment:** A person with dementia may feel confused and disoriented. Make sure their home is safe and comfortable, and try to keep their routine as consistent as possible. **Encourage social interaction:** Social interaction is important for everyone, but especially for people with dementia. Encourage them to participate in activities they enjoy, and connect with friends and family. **Seek professional help:** There are many resources available to help people with dementia and their families. Contact the Admiral Nurse Dementia Helpline at 0800 888 6678 or visit their website at [https://www.dementiauk.org/](https://www.dementiauk.org/) for support and information. Remember, dementia is a complex condition, and there's no one-size-fits-all approach. Be patient, understanding, and supportive, and you can make a real difference in the life of someone living with dementia.`;

    const links = [
      "https://www.dementiauk.org/information-and-support/living-with-dementia/changes-in-sexual-behaviour/",
      "https://www.dementiauk.org/information-and-support/young-onset-dementia/young-onset-dementia-different-symptoms/",
      "https://www.dementiauk.org/information-and-support/living-with-dementia/tips-for-communication/"
    ];

    const formattedText = this.replaceMarkdown(paragraph);

    return (
      <div style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <div dangerouslySetInnerHTML={{ __html: formattedText }}></div>
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
