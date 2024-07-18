import React from 'react';

class RAG extends React.Component {
  // Function to replace markdown with HTML tags
  replaceMarkdown(markdownText) {
    // Replace **text** with <b>text</b>
    let formattedText = markdownText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    // Replace \n with <br/>
    formattedText = formattedText.replace(/\n/g, '<br/>');

    // Replace [link text](url) with <a href="url">link text</a>
    formattedText = formattedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Identify standalone links and format them
    formattedText = formattedText.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');

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
    const paragraph = `It's great you're looking for ways to support someone with mild-stage dementia. It's a challenging journey, but with the right approach, you can make a big difference! It's important to remember that **every person with dementia is different**, so a "one-size-fits-all" plan won't work. Instead, let's focus on creating a personalized plan based on their specific needs and strengths. Here's a framework to get us started: **1. Communication & Connection:** * **Open & Honest:** Talk with the person about their diagnosis. Use clear and simple language, and be patient as they may struggle to understand. It's important to reassure them that you'll be there to support them throughout this journey.\n* **Regular Communication:** Maintain frequent and meaningful conversations. Focus on shared memories, hobbies, and activities they enjoy. Use visual aids, like photos and calendars, to help them remember important events.\n* **Simplify Language:** Avoid complex sentences and use short, clear phrases. Repeat yourself when needed. \n* **Encourage Socialization:** Arrange outings and activities that promote social interaction, like going to a park, a museum, or a movie. **2. Daily Activities & Routine:** * **Structured Schedule:** Create a consistent daily routine to help them feel grounded and safe. This might include regular meal times, exercise, and hobbies.\n* **Adapt Activities:** Modify tasks to make them easier to complete. For example, you might break down chores into smaller steps or provide written instructions. \n* **Cognitive Stimulation:** Engage their brain with activities that they enjoy, like reading, puzzles, or games. Consider joining a support group for people with dementia, which can provide social interaction and cognitive stimulation. **3. Home Safety & Environment:** * **Reduce Clutter:** Clear out unnecessary items from their home to minimize distractions and potential hazards.\n* **Make It Easy to Navigate:** Use clear signage, ensure adequate lighting, and eliminate tripping hazards.\n* **Adapt the Bathroom:** Install safety features like grab bars and non-slip mats. **4. Seek Professional Support:** * **Doctor & Specialist:** Regular checkups with their doctor are crucial to monitor their progress, address any health concerns, and explore potential treatment options. \n* **Speech Therapist:** Communication difficulties are common in dementia. A speech therapist can provide strategies to help them communicate more effectively. \n* **Occupational Therapist:** An occupational therapist can assess their home environment and recommend adaptations to improve safety and independence. **Important Note:** The information I've provided is a starting point. It's crucial to discuss these ideas with the individual, their loved ones, and their healthcare professionals to create a personalized plan that addresses their unique needs and preferences. **Remember:** * **Be Patient:** Dementia can be frustrating and confusing, so patience and understanding are essential.\n* **Focus on the Person:** Treat them with respect and dignity, remembering that they're still the same person they've always been.\n* **Take Care of Yourself:** Caring for someone with dementia can be emotionally draining. Make sure to prioritize your own well-being and seek support from family, friends, and professional organizations. For more specific advice and support, you can always reach out to Dementia UK's Helpline (0800 888 6678) or their website: https://www.dementiauk.org/ **Supporting someone with dementia is a challenging but rewarding journey. By working together, you can create a brighter future for them.**\n`;

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
