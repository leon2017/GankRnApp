/**
 * Api 接口
 */

const BASE_HOST = 'http://gank.io/api/';

// 分类url
const CATEGORY_URL = `${BASE_HOST}data/`;

// 默认每页请求数
const pageSize = 15;

/**
 * gank 分类数据
 * @param {数据类型} category 福利 | Android | iOS | 休息视频 | 拓展资源 | 前端 | all
 * @param {第几页} page 数字，大于0
 */
const getCategoryUrl = (category, page) => {
  try {
    return `${CATEGORY_URL + category}/${pageSize}/${page}`;
  } catch (error) {
    return 'request url exception';
  }
};

export {
  getCategoryUrl
};
