/*
 * @Desc: 时间工具类
 * @Author: LeonWang 
 * @Date: 2017-09-17 18:29:30  
 * */

import moment from 'moment';

const localeZh = require('moment/locale/zh-cn');

moment.locale('zh-cn', localeZh);

export default class DateUtil {
    /**
    * 友好时间显示
    */
    static fromNowTime = (date) => {
      try {
        return moment(date).fromNow();
      } catch (error) {
        return '让时间飞会儿';
      }
    };
}
