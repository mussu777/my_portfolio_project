import React from 'react'
import {personalInfo} from '../data';

const Info = () => {
  return (
    <>
    {personalInfo.map(({title, description, url }, index) => {
      return (
        <li className="info__item" key={index}>
          <span className="info__title">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </span>
          <span className="info__description">{description}</span>
        </li>
      );
    })}
    </>
  )
}

export default Info