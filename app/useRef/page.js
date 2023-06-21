'use client'

import { useRef } from 'react';
import './useRef.css';

export default function App(){
  const listRef = useRef(null)

  function scrollToIndex(index){
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>
          Tom
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Maru
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Jellylorum
        </button>
      </nav>
      <h1>Hi before we begin you can scroll to the bottom to see some nice kitties, just click any of the buttons to do so</h1>
      <div>
        In this fast-paced digital age, where our attention spans are constantly being tested, taking the time to scroll to the bottom of a webpage might seem like an insignificant action. However, I implore you to reconsider, as there are several compelling reasons why scrolling to the bottom can greatly enhance your browsing experience and uncover hidden gems of information. Allow me to present my case.

First and foremost, scrolling to the bottom of a webpage provides you with a comprehensive view of its content. Websites are meticulously designed to guide users through a journey, and the bottom section often holds crucial elements that complete the narrative or provide valuable insights. By scrolling all the way down, you ensure that you don't miss out on any important details or context that might be waiting for you.

Moreover, many websites place additional features, resources, or interactive elements at the bottom of the page. Think of it as a digital treasure trove waiting to be discovered. It could be a helpful FAQ section, a contact form, or even a hidden Easter egg. By exploring the entire page, you increase your chances of stumbling upon these delightful surprises, enriching your online experience.

Furthermore, scrolling to the bottom demonstrates a genuine curiosity and thirst for knowledge. It's a testament to your commitment to fully immerse yourself in the content provided. It shows that you value thoroughness and seek to extract every ounce of value from the webpage. This mindset can be applied not just to online browsing, but to various aspects of life, where a willingness to explore deeper often leads to greater understanding and personal growth.

Additionally, scrolling to the bottom of a webpage can help you develop a critical eye and discernment. While the information presented at the top of a webpage is typically well-curated and attention-grabbing, it's often towards the bottom that you find alternative perspectives, lesser-known details, or user-generated content. By exploring this territory, you become a more informed consumer of information, capable of forming well-rounded opinions and making better decisions.

Let's not forget the practical benefits as well. Scrolling to the bottom allows you to locate important navigation links, privacy policies, terms of service, or copyright information that might be legally required or contain essential details you should be aware of. Ignoring these sections might lead to missed opportunities or potential pitfalls that could have been avoided.

In conclusion, scrolling to the bottom of a webpage is an action that holds tremendous value. It grants you a complete picture, uncovers hidden gems, demonstrates curiosity and thoroughness, fosters critical thinking, and ensures you don't miss out on important information. So, I encourage you to embrace the spirit of exploration, dive deeper into the content, and scroll all the way to the bottom. Who knows what delightful surprises and enriching experiences await you there?

Happy scrolling!
        In this fast-paced digital age, where our attention spans are constantly being tested, taking the time to scroll to the bottom of a webpage might seem like an insignificant action. However, I implore you to reconsider, as there are several compelling reasons why scrolling to the bottom can greatly enhance your browsing experience and uncover hidden gems of information. Allow me to present my case.

First and foremost, scrolling to the bottom of a webpage provides you with a comprehensive view of its content. Websites are meticulously designed to guide users through a journey, and the bottom section often holds crucial elements that complete the narrative or provide valuable insights. By scrolling all the way down, you ensure that you don't miss out on any important details or context that might be waiting for you.

Moreover, many websites place additional features, resources, or interactive elements at the bottom of the page. Think of it as a digital treasure trove waiting to be discovered. It could be a helpful FAQ section, a contact form, or even a hidden Easter egg. By exploring the entire page, you increase your chances of stumbling upon these delightful surprises, enriching your online experience.

Furthermore, scrolling to the bottom demonstrates a genuine curiosity and thirst for knowledge. It's a testament to your commitment to fully immerse yourself in the content provided. It shows that you value thoroughness and seek to extract every ounce of value from the webpage. This mindset can be applied not just to online browsing, but to various aspects of life, where a willingness to explore deeper often leads to greater understanding and personal growth.

Additionally, scrolling to the bottom of a webpage can help you develop a critical eye and discernment. While the information presented at the top of a webpage is typically well-curated and attention-grabbing, it's often towards the bottom that you find alternative perspectives, lesser-known details, or user-generated content. By exploring this territory, you become a more informed consumer of information, capable of forming well-rounded opinions and making better decisions.

Let's not forget the practical benefits as well. Scrolling to the bottom allows you to locate important navigation links, privacy policies, terms of service, or copyright information that might be legally required or contain essential details you should be aware of. Ignoring these sections might lead to missed opportunities or potential pitfalls that could have been avoided.

In conclusion, scrolling to the bottom of a webpage is an action that holds tremendous value. It grants you a complete picture, uncovers hidden gems, demonstrates curiosity and thoroughness, fosters critical thinking, and ensures you don't miss out on important information. So, I encourage you to embrace the spirit of exploration, dive deeper into the content, and scroll all the way to the bottom. Who knows what delightful surprises and enriching experiences await you there?

Happy scrolling!
        In this fast-paced digital age, where our attention spans are constantly being tested, taking the time to scroll to the bottom of a webpage might seem like an insignificant action. However, I implore you to reconsider, as there are several compelling reasons why scrolling to the bottom can greatly enhance your browsing experience and uncover hidden gems of information. Allow me to present my case.

First and foremost, scrolling to the bottom of a webpage provides you with a comprehensive view of its content. Websites are meticulously designed to guide users through a journey, and the bottom section often holds crucial elements that complete the narrative or provide valuable insights. By scrolling all the way down, you ensure that you don't miss out on any important details or context that might be waiting for you.

Moreover, many websites place additional features, resources, or interactive elements at the bottom of the page. Think of it as a digital treasure trove waiting to be discovered. It could be a helpful FAQ section, a contact form, or even a hidden Easter egg. By exploring the entire page, you increase your chances of stumbling upon these delightful surprises, enriching your online experience.

Furthermore, scrolling to the bottom demonstrates a genuine curiosity and thirst for knowledge. It's a testament to your commitment to fully immerse yourself in the content provided. It shows that you value thoroughness and seek to extract every ounce of value from the webpage. This mindset can be applied not just to online browsing, but to various aspects of life, where a willingness to explore deeper often leads to greater understanding and personal growth.

Additionally, scrolling to the bottom of a webpage can help you develop a critical eye and discernment. While the information presented at the top of a webpage is typically well-curated and attention-grabbing, it's often towards the bottom that you find alternative perspectives, lesser-known details, or user-generated content. By exploring this territory, you become a more informed consumer of information, capable of forming well-rounded opinions and making better decisions.

Let's not forget the practical benefits as well. Scrolling to the bottom allows you to locate important navigation links, privacy policies, terms of service, or copyright information that might be legally required or contain essential details you should be aware of. Ignoring these sections might lead to missed opportunities or potential pitfalls that could have been avoided.

In conclusion, scrolling to the bottom of a webpage is an action that holds tremendous value. It grants you a complete picture, uncovers hidden gems, demonstrates curiosity and thoroughness, fosters critical thinking, and ensures you don't miss out on important information. So, I encourage you to embrace the spirit of exploration, dive deeper into the content, and scroll all the way to the bottom. Who knows what delightful surprises and enriching experiences await you there?

Happy scrolling!
        In this fast-paced digital age, where our attention spans are constantly being tested, taking the time to scroll to the bottom of a webpage might seem like an insignificant action. However, I implore you to reconsider, as there are several compelling reasons why scrolling to the bottom can greatly enhance your browsing experience and uncover hidden gems of information. Allow me to present my case.

First and foremost, scrolling to the bottom of a webpage provides you with a comprehensive view of its content. Websites are meticulously designed to guide users through a journey, and the bottom section often holds crucial elements that complete the narrative or provide valuable insights. By scrolling all the way down, you ensure that you don't miss out on any important details or context that might be waiting for you.

Moreover, many websites place additional features, resources, or interactive elements at the bottom of the page. Think of it as a digital treasure trove waiting to be discovered. It could be a helpful FAQ section, a contact form, or even a hidden Easter egg. By exploring the entire page, you increase your chances of stumbling upon these delightful surprises, enriching your online experience.

Furthermore, scrolling to the bottom demonstrates a genuine curiosity and thirst for knowledge. It's a testament to your commitment to fully immerse yourself in the content provided. It shows that you value thoroughness and seek to extract every ounce of value from the webpage. This mindset can be applied not just to online browsing, but to various aspects of life, where a willingness to explore deeper often leads to greater understanding and personal growth.

Additionally, scrolling to the bottom of a webpage can help you develop a critical eye and discernment. While the information presented at the top of a webpage is typically well-curated and attention-grabbing, it's often towards the bottom that you find alternative perspectives, lesser-known details, or user-generated content. By exploring this territory, you become a more informed consumer of information, capable of forming well-rounded opinions and making better decisions.

Let's not forget the practical benefits as well. Scrolling to the bottom allows you to locate important navigation links, privacy policies, terms of service, or copyright information that might be legally required or contain essential details you should be aware of. Ignoring these sections might lead to missed opportunities or potential pitfalls that could have been avoided.

In conclusion, scrolling to the bottom of a webpage is an action that holds tremendous value. It grants you a complete picture, uncovers hidden gems, demonstrates curiosity and thoroughness, fosters critical thinking, and ensures you don't miss out on important information. So, I encourage you to embrace the spirit of exploration, dive deeper into the content, and scroll all the way to the bottom. Who knows what delightful surprises and enriching experiences await you there?

Happy scrolling!
        In this fast-paced digital age, where our attention spans are constantly being tested, taking the time to scroll to the bottom of a webpage might seem like an insignificant action. However, I implore you to reconsider, as there are several compelling reasons why scrolling to the bottom can greatly enhance your browsing experience and uncover hidden gems of information. Allow me to present my case.

First and foremost, scrolling to the bottom of a webpage provides you with a comprehensive view of its content. Websites are meticulously designed to guide users through a journey, and the bottom section often holds crucial elements that complete the narrative or provide valuable insights. By scrolling all the way down, you ensure that you don't miss out on any important details or context that might be waiting for you.

Moreover, many websites place additional features, resources, or interactive elements at the bottom of the page. Think of it as a digital treasure trove waiting to be discovered. It could be a helpful FAQ section, a contact form, or even a hidden Easter egg. By exploring the entire page, you increase your chances of stumbling upon these delightful surprises, enriching your online experience.

Furthermore, scrolling to the bottom demonstrates a genuine curiosity and thirst for knowledge. It's a testament to your commitment to fully immerse yourself in the content provided. It shows that you value thoroughness and seek to extract every ounce of value from the webpage. This mindset can be applied not just to online browsing, but to various aspects of life, where a willingness to explore deeper often leads to greater understanding and personal growth.

Additionally, scrolling to the bottom of a webpage can help you develop a critical eye and discernment. While the information presented at the top of a webpage is typically well-curated and attention-grabbing, it's often towards the bottom that you find alternative perspectives, lesser-known details, or user-generated content. By exploring this territory, you become a more informed consumer of information, capable of forming well-rounded opinions and making better decisions.

Let's not forget the practical benefits as well. Scrolling to the bottom allows you to locate important navigation links, privacy policies, terms of service, or copyright information that might be legally required or contain essential details you should be aware of. Ignoring these sections might lead to missed opportunities or potential pitfalls that could have been avoided.

In conclusion, scrolling to the bottom of a webpage is an action that holds tremendous value. It grants you a complete picture, uncovers hidden gems, demonstrates curiosity and thoroughness, fosters critical thinking, and ensures you don't miss out on important information. So, I encourage you to embrace the spirit of exploration, dive deeper into the content, and scroll all the way to the bottom. Who knows what delightful surprises and enriching experiences await you there?

Happy scrolling!
        In this fast-paced digital age, where our attention spans are constantly being tested, taking the time to scroll to the bottom of a webpage might seem like an insignificant action. However, I implore you to reconsider, as there are several compelling reasons why scrolling to the bottom can greatly enhance your browsing experience and uncover hidden gems of information. Allow me to present my case.

First and foremost, scrolling to the bottom of a webpage provides you with a comprehensive view of its content. Websites are meticulously designed to guide users through a journey, and the bottom section often holds crucial elements that complete the narrative or provide valuable insights. By scrolling all the way down, you ensure that you don't miss out on any important details or context that might be waiting for you.

Moreover, many websites place additional features, resources, or interactive elements at the bottom of the page. Think of it as a digital treasure trove waiting to be discovered. It could be a helpful FAQ section, a contact form, or even a hidden Easter egg. By exploring the entire page, you increase your chances of stumbling upon these delightful surprises, enriching your online experience.

Furthermore, scrolling to the bottom demonstrates a genuine curiosity and thirst for knowledge. It's a testament to your commitment to fully immerse yourself in the content provided. It shows that you value thoroughness and seek to extract every ounce of value from the webpage. This mindset can be applied not just to online browsing, but to various aspects of life, where a willingness to explore deeper often leads to greater understanding and personal growth.

Additionally, scrolling to the bottom of a webpage can help you develop a critical eye and discernment. While the information presented at the top of a webpage is typically well-curated and attention-grabbing, it's often towards the bottom that you find alternative perspectives, lesser-known details, or user-generated content. By exploring this territory, you become a more informed consumer of information, capable of forming well-rounded opinions and making better decisions.

Let's not forget the practical benefits as well. Scrolling to the bottom allows you to locate important navigation links, privacy policies, terms of service, or copyright information that might be legally required or contain essential details you should be aware of. Ignoring these sections might lead to missed opportunities or potential pitfalls that could have been avoided.

In conclusion, scrolling to the bottom of a webpage is an action that holds tremendous value. It grants you a complete picture, uncovers hidden gems, demonstrates curiosity and thoroughness, fosters critical thinking, and ensures you don't miss out on important information. So, I encourage you to embrace the spirit of exploration, dive deeper into the content, and scroll all the way to the bottom. Who knows what delightful surprises and enriching experiences await you there?

Happy scrolling!
        In this fast-paced digital age, where our attention spans are constantly being tested, taking the time to scroll to the bottom of a webpage might seem like an insignificant action. However, I implore you to reconsider, as there are several compelling reasons why scrolling to the bottom can greatly enhance your browsing experience and uncover hidden gems of information. Allow me to present my case.

First and foremost, scrolling to the bottom of a webpage provides you with a comprehensive view of its content. Websites are meticulously designed to guide users through a journey, and the bottom section often holds crucial elements that complete the narrative or provide valuable insights. By scrolling all the way down, you ensure that you don't miss out on any important details or context that might be waiting for you.

Moreover, many websites place additional features, resources, or interactive elements at the bottom of the page. Think of it as a digital treasure trove waiting to be discovered. It could be a helpful FAQ section, a contact form, or even a hidden Easter egg. By exploring the entire page, you increase your chances of stumbling upon these delightful surprises, enriching your online experience.

Furthermore, scrolling to the bottom demonstrates a genuine curiosity and thirst for knowledge. It's a testament to your commitment to fully immerse yourself in the content provided. It shows that you value thoroughness and seek to extract every ounce of value from the webpage. This mindset can be applied not just to online browsing, but to various aspects of life, where a willingness to explore deeper often leads to greater understanding and personal growth.

Additionally, scrolling to the bottom of a webpage can help you develop a critical eye and discernment. While the information presented at the top of a webpage is typically well-curated and attention-grabbing, it's often towards the bottom that you find alternative perspectives, lesser-known details, or user-generated content. By exploring this territory, you become a more informed consumer of information, capable of forming well-rounded opinions and making better decisions.

Let's not forget the practical benefits as well. Scrolling to the bottom allows you to locate important navigation links, privacy policies, terms of service, or copyright information that might be legally required or contain essential details you should be aware of. Ignoring these sections might lead to missed opportunities or potential pitfalls that could have been avoided.

In conclusion, scrolling to the bottom of a webpage is an action that holds tremendous value. It grants you a complete picture, uncovers hidden gems, demonstrates curiosity and thoroughness, fosters critical thinking, and ensures you don't miss out on important information. So, I encourage you to embrace the spirit of exploration, dive deeper into the content, and scroll all the way to the bottom. Who knows what delightful surprises and enriching experiences await you there?

Happy scrolling!
      </div>
      <div>
        <nav>
          <ul ref={listRef}>
            <li>
              <img
                src="https://placekitten.com/g/200/200"
                alt="Tom"
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/300/200"
                alt="Maru"
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/250/200"
                alt="Jellylorum"
              />
            </li>
          </ul>
        </nav>
      <nav>
        <button onClick={() => scrollToIndex(0)}>
          Tom
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Maru
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Jellylorum
        </button>
      </nav>
      </div>
    </>
  );
}