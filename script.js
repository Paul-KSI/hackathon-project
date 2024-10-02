function showMoreInfo() {
    const learnMoreLink = document.getElementById('learn-more-link');
    const textSection = document.querySelector('.text-section');

    if (learnMoreLink.textContent === 'Learn More') {
        const moreInfo = document.createElement('p');
        moreInfo.innerHTML = "Paul is a thoughtful and introspective individual with a strong sense of integrity. Known for his kindness and empathy, Paul is someone who genuinely cares about others and strives to make a positive impact on the people around him. His calm demeanor and patient nature make him a steady presence in any situation, always willing to listen and offer support.<br><br>Paul has a natural curiosity that drives him to explore new ideas and experiences. He's not afraid to challenge himself and step outside his comfort zone, whether it's in his personal life or in the pursuit of knowledge. Despite his quiet confidence, Paul is humble and values continuous growth, always seeking to learn and improve.<br><br>His sense of humor and easygoing personality make him a joy to be around. Paul values deep connections and meaningful conversations, often bringing a thoughtful perspective to discussions. He approaches life with a sense of purpose, balancing his ambitions with a genuine care for others, making him a well-rounded and deeply respected individual.";
        moreInfo.style.marginTop = "20px";
        textSection.appendChild(moreInfo);
        learnMoreLink.textContent = 'Show Less';
    } else {
        const moreInfo = textSection.querySelector('p:nth-of-type(2)');
        if (moreInfo) {
            textSection.removeChild(moreInfo);
        }
        learnMoreLink.textContent = 'Learn More';
    }
}
