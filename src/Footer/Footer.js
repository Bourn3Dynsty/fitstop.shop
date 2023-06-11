import './Footer.css'
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div id="footer">
        <a href='https://www.instagram.com/'><InstagramIcon /></a> 
        © Designed by <a href='https://wisemonkey.xyz'>wisemonkey.xyz</a> 
    </div>
  );
}
