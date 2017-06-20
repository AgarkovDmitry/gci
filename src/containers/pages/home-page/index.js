import React from 'react'
import { withRouter } from 'react-router'
import 'assets/styles/main.less'

const programs = [
  {
    icon: 'http://www.clipartkid.com/images/353/black-and-white-education-icon-1AWv2E-clipart.png',
    title: 'IELTS',
    subtitle: '20-06-2017',
    isAvailable: true,
    link: '/program/ielts6'
  },
  {
    icon: 'https://image.flaticon.com/icons/svg/46/46881.svg',
    title: 'IELTS',
    subtitle: '20-05-2017',
    isAvailable: true,
    link: '/program/ielts5'
  },
  {
    icon: 'http://www.clipartkid.com/images/353/black-and-white-education-icon-1AWv2E-clipart.png',
    title: 'IELTS',
    subtitle: '20-04-2017',
    isAvailable: false,
    link: '/program/ielts4'
  },
  {
    icon: 'https://image.flaticon.com/icons/svg/46/46881.svg',
    title: 'IELTS',
    subtitle: '20-03-2017',
    isAvailable: false,
    link: '/program/ielts3'
  },
  {
    icon: 'http://www.clipartkid.com/images/353/black-and-white-education-icon-1AWv2E-clipart.png',
    title: 'IELTS',
    subtitle: '20-02-2017',
    isAvailable: false,
    link: '/program/ielts2'
  }
]

const Page = ({ history }) =>
    <div className='main'>
      <div className='main-wrapper'>
        <a className='main-program' href='http://mcsummerschool.gau.edu.tr/ru/'>
          <div className='main-program-title'>
            Multicultural Summer School
          </div>
          <div className='main-program-subtitle'>
            2, 3, 4 weeks programs available
          </div>
        </a>
        <div className='other-programs'>
          <div className='other-programs-title'>
            Other programs:
          </div>
          <div className='other-programs-items'>
            {
              programs.map((program, key) => (
                <a onClick={() => history.push(program.link)} key={key}>
                  <div>
                    <img src={program.icon} alt="IELTS" width="100"/>
                  </div>
                  <span>{program.title}</span>
                  <span>{program.subtitle}</span>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>


export default withRouter(Page)
