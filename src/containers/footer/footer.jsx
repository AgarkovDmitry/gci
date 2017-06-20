import React from 'react'
import 'assets/styles/footer.less'

export default ({ history }) => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-left">
          <a onClick={() => history.push('/about')}>
            <img className="image-logo" alt="Global Career Institute"/>
          </a>
        </div>
        <div className="footer-center">
          <div className="social">
            <a target="_blank" href="https://www.facebook.com/globalcareerinstitute/" className="icon-fb">fb</a>
            <a target="_blank" href="https://www.facebook.com/globalcareerinstitute/" className="icon-fb">fb</a>
            <a target="_blank" href="https://www.facebook.com/globalcareerinstitute/" className="icon-fb">fb</a>
          </div>
          <div className="copy">© 2016 — 2017 Global Career Institute</div>
        </div>
        <div className="footer-right">
          <div className="phone">+90(533) 8-774-707</div>
          <a className="link" href="mailto:info@frontend-science.com">gcinstitute.info@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
