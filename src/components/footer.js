import React from 'react';

function Footer(props) {
  const chun = (
    <a
      href="https://heyitschun.com"
      rel="noreferrer noopener"
      target="_blank"
      className="font-bold"
    >
      Chun Poon
    </a>
  )
  return (
    <footer
      className={`
        text-sm font-mono ${props.bgColor} ${props.textColor} p-3 text-center
      `}
    >
      &copy; 2020-2021 by {chun}
    </footer>
  );
};

Footer.defaultProps = {
  bgColor: "",
  textColor: ""
}

export default Footer;
