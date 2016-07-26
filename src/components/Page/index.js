import React, { PropTypes, Component } from 'react'
import styles from "./page.scss";

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.setYear(+e.target.innerText)
  }
  render() {
    const { year } = this.props
    return <div className='ib page'>
      <p>
        <button className={styles.btn1} onClick={::this.onYearBtnClick}>2016</button>{' '}
        <button className={styles.btn2} onClick={::this.onYearBtnClick}>2015</button>{' '}
        <button className={styles.btn3} onClick={::this.onYearBtnClick}>2014</button>
      </p>
      <h3 className={styles.title}>
        {year}
        <span className={styles.text}> год</span>
      </h3>

      <span className={styles.text}> год</span>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired
}
