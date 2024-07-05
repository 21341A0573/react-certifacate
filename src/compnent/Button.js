import React from 'react';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { toPng } from 'html-to-image';
import down from './asset/down.png'
import './Button.css'

const Button = () => {
  const handleDownload = () => {
    const node = document.getElementById('certificate');

    htmlToImage.toPng(node)
      .then((dataUrl) => {
        download(dataUrl, 'certificate.png');
      })
      .catch((error) => {
        console.error('Failed to download certificate:', error);
      });
  };

  return (
    <img src={down} className='down' onClick={handleDownload}></img>
  );
};

export default Button;
