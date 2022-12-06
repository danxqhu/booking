import React from 'react';
import './widgetSm.css';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <spna className="widgetSmTitle">New Join Members</spna>
      <ul className="widgetSmList">
        <li className="widgetSmIListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <bbutton className="widgetSmButton"></bbutton>
        </li>
      </ul>
    </div>
  );
}
