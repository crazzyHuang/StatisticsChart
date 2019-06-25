
import * as homeService from '../services/home';

export default {
  namespace: 'home',
  state: {
    homeList: [1, 2, 3],
  },
  effects: {
    *fetch( {
        payload: { page = 1 },
      },
      { call, put },
    ) {
      console.info("开始请求");
      const data = yield call(homeService.query);
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
  },
  reduces: {
    save(
      state,
      {
        payload: { data: homeList },
      },
    ) {
      return { ...state, homeList };
    },
  },
};
